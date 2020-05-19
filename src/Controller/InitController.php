<?php


namespace App\Controller;


use App\Entity\Chat;
use App\Entity\Conference;
use App\Entity\Message;
use App\Entity\User;
use App\Service\WebSocketSender;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class InitController extends AbstractController {


    /**
     * @Route("/api/init", name="init", methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function init(Request $request) {
        $user = new User();
        $user->setRole(User::ROLE_ADMIN);
        $user->setName("Администратор");
        $user->setSurname("портала");
        $user->setCode(10);
        $conference = new Conference();
        $conference->setUrl("https://facecast.net/v/tk1yzi");
        $chat = new Chat();
        $conference->setChat($chat);
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($user);
        $manager->persist($conference);
        $manager->persist($chat);
        $manager->flush();
        return new JsonResponse($user->getCode(), 200, [], true);
    }
}
