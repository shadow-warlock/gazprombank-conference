<?php

namespace App\Controller;

use App\Entity\Answer;
use App\Entity\Conference;
use App\Entity\Poll;
use App\Entity\User;
use App\Service\JSONer;
use App\Service\WebSocketSender;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

class PollController extends AbstractController {

    /**
     * @Route("/api/poll/{id}", name="get_poll", methods={"GET"})
     * @param $id
     * @return JsonResponse
     */
    public function getPoll($id) {
        $poll = $this->getDoctrine()->getManager()->find(Poll::class, $id);
        return $this->json($poll);
    }

    /**
     * @Route("/api/poll", name="set_poll", methods={"POST"})
     * @param Request $request
     * @param JSONer $serializer
     * @param WebSocketSender $wsSender
     * @return JsonResponse
     */
    public function addPoll(Request $request, JSONer $serializer, WebSocketSender $wsSender) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);
        $poll = new Poll();
        $poll->setQuestion($data['question']);
        $poll->setVariants($data['variants'] ?? null);
        $conference = $entityManager->getRepository(Conference::class)->findAll()[0];
        $conference->setPoll($poll);
        $entityManager->persist($poll);
        $entityManager->persist($conference);
        $entityManager->flush();
        $json = $serializer->toJSON($poll);
        $wsSender->send(WebSocketSender::POLL, $poll);
        return new JsonResponse($json, 201, [], true);
    }

    /**
     * @Route("/api/poll/{id}/answer", name="add_answer", methods={"POST"})
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function addAnswer(Request $request, $id) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $poll = $entityManager->find(Poll::class, $id);
        if(is_null($poll)) {
            throw new BadRequestHttpException("poll not exist");
        }
        $answer = new Answer();
        $answer->setUser($this->getUser());
        $answer->setText($data['text']);
        $answer->setPoll($poll);
        $entityManager->persist($answer);
        $entityManager->flush();
        return $this->json($answer);
    }
}
