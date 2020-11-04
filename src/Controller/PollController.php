<?php

namespace App\Controller;

use App\Entity\Answer;
use App\Entity\Conference;
use App\Entity\Poll;
use App\Entity\Question;
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
    public function getPoll($id, JSONer $serializer) {
        $poll = $this->getDoctrine()->getManager()->find(Poll::class, $id);
        return new JsonResponse($serializer->toJSON($poll), 200, [],true);
    }

    /**
     * @Route("/api/poll", name="add_poll", methods={"POST"})
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
        $poll->setName($data['name']);
        foreach ($data['questions'] as $questionData){
            $question = new Question();
            $poll->addQuestions($question);
            $question->setPoll($poll);
            $question->setQuestion($questionData['question']);
            $question->setVariants($questionData['variants'] ?? null);
            $entityManager->persist($question);
        }

        $conference = $entityManager->getRepository(Conference::class)->findAll()[0];
        $conference->setPoll($poll);
        $entityManager->persist($poll);
        $entityManager->persist($conference);
        $entityManager->flush();
        $json = $serializer->toJSON($poll);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        $wsSender->send(WebSocketSender::POLL, $poll, $conference->getChat());
        return new JsonResponse($json, 201, [], true);
    }

    /**
     * @Route("/api/question/{id}/answer", name="add_answer", methods={"POST"})
     * @param Request $request
     * @param $id
     * @param JSONer $serializer
     * @return JsonResponse
     */
    public function addAnswer(Request $request, $id, JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $question = $entityManager->find(Question::class, $id);
        if(is_null($question)) {
            throw new BadRequestHttpException("question not exist");
        }
        $answer = new Answer();
        $answer->setUser($this->getUser());
        $answer->setText($data['text']);
        $answer->setQuestion($question);
        $entityManager->persist($answer);
        $entityManager->flush();
        $json = $serializer->toJSON($answer);
        return new JsonResponse($json, 201, [], true);
    }
}
