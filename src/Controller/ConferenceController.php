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
}
