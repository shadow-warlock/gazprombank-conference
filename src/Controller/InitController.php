<?php


namespace App\Controller;


use App\Entity\Chat;
use App\Entity\Conference;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class InitController extends AbstractController
{

    private const URL = "https://facecast.net/v/uwvub1";

    /**
     * @Route("/api/init", name="init", methods={"GET"})
     */
    public function init(): JsonResponse
    {
        $user = new User();
        $user->setRole(User::ROLE_ADMIN);
        $user->setName("Администратор");
        $user->setSurname("портала");
        $user->setCode(10);
        $conference = new Conference();
        $conference->setUrl(self::URL);
        $chat = new Chat();
        $conference->setChat($chat);
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($user);
        $manager->persist($conference);
        $manager->persist($chat);
        $manager->flush();
        return new JsonResponse($user->getCode(), 200, [], true);
    }

    /**
     * @Route("/api/seturl", name="set_url", methods={"POST"})
     */
    public function setConferenceUrl(Request $request): JsonResponse
    {
        $url = json_decode($request->getContent(), true)["url"];
        $em = $this->getDoctrine()->getManager();
        $conference = $em->getRepository(Conference::class)->findAll()[0];
        $conference->setUrl($url);
        $em->persist($conference);
        $em->flush();
        return $this->json($conference->getUrl());
    }
}
