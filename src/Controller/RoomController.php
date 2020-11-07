<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\Conference;
use App\Entity\Message;
use App\Entity\Room;
use App\Entity\User;
use App\Entity\UserLike;
use App\Repository\RoomRepository;
use App\Service\JSONer;
use App\Service\VideoConnector;
use App\Service\WebSocketSender;
use DateTime;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RoomController extends AbstractController {

    const ROOM_COUNT = 6;

    /**
     * @Route("/api/room", methods={"GET"})
     * @param  JSONer  $serializer
     *
     * @return JsonResponse
     */
    public function getRooms(JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);

        if(array_search(User::ROLE_ADMIN, $this->getUser()->getRoles()) !== true)
            $rooms = $this->getDoctrine()->getRepository(Room::class)->findBy([]);
        else
            $rooms = $this->getDoctrine()->getRepository(Room::class)->findBy(["visible" => true]);
        return new JsonResponse($serializer->toJSON($rooms), 200, [], true);
    }

    /**
     * @Route("/api/room/{code}", methods={"GET"})
     * @ParamConverter("room", options={"mapping": {"code": "code"}})
     * @param  Room    $room
     *
     * @param  JSONer  $serializer
     *
     * @return JsonResponse
     */
    public function getRoom(Room $room, JSONer $serializer) {
        if($room->getVisible()){
            $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        }else{
            $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        }
        return new JsonResponse($serializer->toJSON($room), 200, [], true);
    }


    /**
     * @Route("/api/room", methods={"POST"})
     * @param  Request          $request
     * @param  WebSocketSender  $wsSender
     * @param  VideoConnector   $connector
     * @param  JSONer           $serializer
     *
     * @return JsonResponse
     */
    public function createRoom(Request $request, WebSocketSender $wsSender, VideoConnector $connector, JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $room = new Room();
        if(isset($data['name']) && mb_strlen($data['name']) >= 1) {
            $room->setName($data['name']);
        } else {
            throw new BadRequestHttpException("room name must be over 2 symbols in length");
        }
        $count = $entityManager->getRepository(Room::class)->count([]);
        if($count >= self::ROOM_COUNT)
            throw new BadRequestHttpException("max room count");
        $room->setVisible($data["visible"]);
        $room->setCode(sha1($data['name'] . time()));
        $room->setVideo($this->findVideoServerNum($entityManager));
        if(isset($data["sponsor"])){
            $room->setSponsor($data["sponsor"]);
        }
        $chat = new Chat();
        $room->setChat($chat);
        $entityManager->persist($chat);
        $entityManager->persist($room);
        $connector->createSession($room);
        $entityManager->flush();
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        $wsSender->send(WebSocketSender::CREATE_ROOM, null, $conference->getChat());
        $json = $serializer->toJSON($room);
        return new JsonResponse($json, 201, [], true);
    }

    public function findVideoServerNum(ObjectManager $manager){
        $num = null;
        $i = 1;
        while ($num === null || $i <= self::ROOM_COUNT){
            $room = $manager->getRepository(Room::class)->findOneBy(['video' => $i]);
            if($room === null){
                return $i;
            }
            $i++;
        }
        return null;
    }


    /**
     * @Route("/api/room/{id}", methods={"DELETE"})
     * @param  Room             $room
     * @param  VideoConnector   $connector
     * @param  WebSocketSender  $wsSender
     * @param  JSONer           $serializer
     *
     * @return JsonResponse
     */
    public function deleteRoom(Room $room, VideoConnector $connector, WebSocketSender $wsSender, JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($room);
        $connector->deleteSession($room);
        $entityManager->flush();
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        $wsSender->send(WebSocketSender::DELETE_ROOM, null, $conference->getChat());
        $json = $serializer->toJSON($room);
        return new JsonResponse($json, 200, [], true);
    }

    /**
     * @Route("/api/room/{id}", methods={"PATCH"})
     * @param  Room             $room
     * @param  WebSocketSender  $wsSender
     * @param  JSONer           $serializer
     * @param  Request          $request
     * @return JsonResponse
     */
    public function editRoom(Room $room, WebSocketSender $wsSender, JSONer $serializer, Request $request) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $room->setName($data['name']);
        $entityManager->flush();
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        $wsSender->send(WebSocketSender::EDIT_ROOM, null, $conference->getChat());
        $json = $serializer->toJSON($room);
        return new JsonResponse($json, 200, [], true);
    }

    /**
     * @Route("/api/room/{id}/token", methods={"POST"})
     * @param  Room $room
     * @param  VideoConnector  $connector
     * @return JsonResponse
     */
    public function createToken(Room $room, VideoConnector $connector) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $sessionId = $connector->createSession($room);
        $session = $connector->getSession($room);
        if($session['connections']['numberOfElements'] >= 20){
            throw new BadRequestHttpException(json_encode($session['connections']['numberOfElements']));
        }
        $token = $connector->createToken($room);
        return new JsonResponse($token, 200, [], false);
    }



}
