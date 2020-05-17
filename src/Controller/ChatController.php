<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\Message;
use App\Entity\User;
use App\Entity\UserLike;
use App\Service\JSONer;
use App\Service\WebSocketSender;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController {
    /**
     * @Route("/api/chat/{id}", name="get_chat", methods={"GET"})
     * @param $id
     * @return JsonResponse
     */
    public function getChat($id) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $chat = $this->getDoctrine()->getRepository(Chat::class)->find($id);
        return $this->json($chat);
    }

    /**
     * @Route("/api/chat/{id}/message", name="add_message", methods={"POST"})
     * @param Request $request
     * @param $id
     * @param WebSocketSender $wsSender
     * @param JSONer $serializer
     * @return JsonResponse
     */
    public function addMessage(Request $request, $id, WebSocketSender $wsSender, JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $message = new Message();
        if(isset($data['text']) && mb_strlen($data['text']) >= 1) {
            $message->setText($data['text']);
        } else {
            throw new BadRequestHttpException("field text must be over 2 symbols in length");
        }
        $message->setChat($entityManager->find(Chat::class, $id));
        $message->setUser($this->getUser());
        $message->setReplyTo(isset($data['replyTo']) ? $entityManager->find(Message::class, $data['replyTo']) : null);
        $message->setTime();
        $entityManager->persist($message);
        $entityManager->flush();
        $wsSender->send(WebSocketSender::MESSAGE, $message);
        $json = $serializer->toJSON($message);
        return new JsonResponse($json, 201, [], true);
    }

    /**
     * @Route("/api/message/{id}/like", name="add_like", methods={"POST"})
     * @param $id
     * @return JsonResponse
     */
    public function addLike($id) {
        $entityManager = $this->getDoctrine()->getManager();
        $message = $entityManager->find(UserLike::class, $id);
        if($message->findLikeFromUser($this->getUser())) {
            throw new BadRequestHttpException("like already exist");
        }
        $like = new UserLike();
        $like->setUser($this->getUser());
        $like->setMessage($message);
        $like->setTime();
        $entityManager->persist($like);
        $entityManager->flush();
        return $this->json($like, 201);
    }

    /**
     * @Route("/api/message/{id}/like", name="add_like", methods={"DELETE"})
     * @param $id
     * @return JsonResponse
     */
    public function removeLike($id) {
        $entityManager = $this->getDoctrine()->getManager();
        $message = $entityManager->find(UserLike::class, $id);
        $like = $message->findLikeFromUser();
        if(!$like) {
            throw new NotFoundHttpException("like not found");
        }
        $entityManager->remove($like);
        $entityManager->flush();
        return $this->json(true, 204);
    }
}
