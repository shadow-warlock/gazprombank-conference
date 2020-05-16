<?php

namespace App\Controller;

use App\Entity\Conference;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ConferenceController extends AbstractController {
    /**
     * @Route("/api/conference", name="get_conference", methods={"GET"})
     */
    public function getConference() {
        $this->denyAccessUnlessGranted(User::IS_AUTHENTICATED_FULLY);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        return $this->json($conference);
    }

    /**
     * @Route("/api/conference/poll",name="close_poll", methods={"DELETE"})
     */
    public function closePoll() {
//        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $entityManager = $this->getDoctrine()->getManager();
        $conference = $entityManager->getRepository(Conference::class)->findAll()[0];
        $conference->setPoll(null);
        $entityManager->persist($conference);
        $entityManager->flush();
        return $this->json(true, 204);
    }
}
