<?php

namespace App\Controller;

use App\Entity\Conference;
use App\Entity\User;
use App\Service\JSONer;
use App\Service\WebSocketSender;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ConferenceController extends AbstractController {
    /**
     * @Route("/api/conference", name="get_conference", methods={"GET"})
     * @param JSONer $serializer
     * @return JsonResponse
     */
    public function getConference(JSONer $serializer) {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        $json = $serializer->toJSON($conference);
        return new JsonResponse($json, 200, [], true);
    }

    /**
     * @Route("/api/conference/poll",name="close_poll", methods={"DELETE"})
     * @param WebSocketSender $wsSender
     * @return JsonResponse
     */
    public function closePoll(WebSocketSender $wsSender) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $conference = $entityManager->getRepository(Conference::class)->findAll()[0];
        $conference->setPoll(null);
        $entityManager->persist($conference);
        $entityManager->flush();
        $wsSender->send(WebSocketSender::POLL, null);
        return $this->json(true, 204);
    }
}
