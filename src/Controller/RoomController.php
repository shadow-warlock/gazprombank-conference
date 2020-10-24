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
     * @param  Room  $room
     *
     * @return JsonResponse
     */
    public function getRoom(Room $room) {
        if($room->getVisible()){
            $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        }else{
            $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        }
        return $this->json($room);
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
        if($count >= 20)
            throw new BadRequestHttpException("max room count");
        $room->setVisible($data["visible"]);
        $room->setCode(sha1($data['name']));
        $entityManager->persist($room);
        $connector->createSession($room);
        $entityManager->flush();
        $wsSender->send(WebSocketSender::CREATE_ROOM, null);
        $json = $serializer->toJSON($room);
        return new JsonResponse($json, 201, [], true);
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
        $wsSender->send(WebSocketSender::DELETE_ROOM, null);
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
        $token = $connector->createToken($sessionId);
        return new JsonResponse($token, 200, [], false);
    }

}
