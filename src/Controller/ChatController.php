<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\Message;
use App\Entity\User;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ChatController extends AbstractController {
    /**
     * @Route("/api/{id}/chat", name="get_chat", methods={"GET"})
     * @param $id
     * @return JsonResponse
     */
    public function getChat($id) {
        $chat = $this->getDoctrine()->getRepository(Chat::class)->find($id);
        return $this->json($chat);
    }

    /**
     * @Route("/api/chat/{id}/message", name="add_message", methods={"POST"})
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function addMessage(Request $request, $id) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $message = new Message();
        if(isset($data['text']) && count($data['text']) >= 2) {
            $message->setText($data['text']);
        } else {
            throw new HttpException(500, "field text must be over 2 symbols in length");
        }
        $message->setChat($entityManager->find(Chat::class, $id));
        $message->setUser($this->getUser());
        $message->setReplyTo(isset($data['replyTo']) ? $entityManager->find(Message::class, $data['replyTo']) : null);
        $message->setTime(new DateTime());
        $entityManager->persist($message);
        $entityManager->flush();
        return $this->json($message);
    }
}
