<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\Conference;
use App\Entity\Message;
use App\Entity\User;
use App\Entity\UserLike;
use App\Service\JSONer;
use App\Service\WebSocketSender;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/api/message/{id}", name="delete_message", methods={"DELETE"})
     * @param Request $request
     * @param $id
     * @param WebSocketSender $wsSender
     * @return JsonResponse
     */
    public function deleteMessage(Request $request, int $id, WebSocketSender $wsSender) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $message = $entityManager->find(Message::class, $id);
        if(!$message) {
            throw new NotFoundHttpException("message not found");
        }
        $entityManager->remove($message);
        $entityManager->flush();
        $wsSender->send(WebSocketSender::DELETE_MESSAGE, ["messageId"=>$id]);
        return new JsonResponse("", 204, [], true);
    }

    /**
     * @Route("/api/message/{id}/like", name="add_like", methods={"POST"})
     * @param $id
     * @param JSONer $serializer
     * @param WebSocketSender $wsSender
     * @return JsonResponse
     */
    public function addLike(int $id, JSONer $serializer, WebSocketSender $wsSender) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $entityManager = $this->getDoctrine()->getManager();
        $message = $entityManager->find(Message::class, $id);
        if($message->findLikeFromUser($this->getUser())) {
            throw new BadRequestHttpException("like already exist");
        }
        $like = new UserLike();
        $like->setUser($this->getUser());
        $like->setMessage($message);
        $like->setTime();
        $entityManager->persist($like);
        $entityManager->flush();
        $wsSender->send(WebSocketSender::LIKE, $like);
        $json = $serializer->toJSON($like);
        return new JsonResponse($json, 201, [], true);
    }

    /**
     * @Route("/api/chat/message/csv",name="chat_message_csv", methods={"GET"})
     * @param JSONer $serializer
     * @return Response
     */
    public function csvChatMessages(JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $manager = $this->getDoctrine()->getManager();
        $conference = $manager->getRepository(Conference::class)->findAll()[0] ?? null;
        if($conference == null || $conference->getChat() == null){
            throw new NotFoundHttpException();
        }
        $data = [];
        foreach($conference->getChat()->getMessages() as $message){
            $data[] = [
                $message->getId(),
                $message->getTime()->format('Y-m-d H:i:s'),
                $message->getText(),
                $message->getReplyTo() == null ? null : $message->getReplyTo()->getId()
            ];
        }
        return new Response($serializer->ArrayToCSV($data), 200,
            [
                "Content-Type" => "text/csv",
                "Content-Disposition" => "attachment;filename=chat_messages.csv"
            ]
        );
    }

    /**
     * @Route("/api/message/{id}/like", name="delete_like", methods={"DELETE"})
     * @param $id
     * @param WebSocketSender $wsSender
     * @return JsonResponse
     */
    public function removeLike(int $id, WebSocketSender $wsSender) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $entityManager = $this->getDoctrine()->getManager();
        $message = $entityManager->find(Message::class, $id);
        $like = $message->findLikeFromUser($this->getUser());
        $likeId = $like->getId();
        if(!$like) {
            throw new NotFoundHttpException("like not found");
        }
        $entityManager->remove($like);
        $entityManager->flush();
        $wsData = ["messageId" => $id, "likeId" => $likeId];
        $wsSender->send(WebSocketSender::DELETE_LIKE, $wsData);
        return $this->json(true, 204);
    }
}
