<?php

namespace App\Controller;

use App\Entity\Conference;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

class WebSocketController extends AbstractController
{
    /**
     * @Route("/api/chat/websocket/start", methods={"GET"})
     * @return Response
     */
    public function socketStart() {
//        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        if($conference->getChat() === null){
            throw new BadRequestHttpException("chat not found");
        }
        shell_exec('php ' . __DIR__ . '/../../websocketServer/server.php start >/dev/null 2>/dev/null &');
        return new Response("OK", 200);
    }

    /**
     * @Route("/api/chat/websocket/status", methods={"GET"})
     * @return Response
     */
    public function socketStatus() {
//        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        if($conference->getChat() === null){
            throw new BadRequestHttpException("chat not found");
        }
        $output = shell_exec('php ' . __DIR__ . '/../../websocketServer/server.php status');
        return new Response($output, 200);
    }

    /**
     * @Route("/api/chat/websocket/stop", methods={"GET"})
     * @return Response
     */
    public function socketStop() {
//        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        if($conference->getChat() === null){
            throw new BadRequestHttpException("chat not found");
        }
        shell_exec('php ' . __DIR__ . '/../../websocketServer/server.php stop >/dev/null 2>/dev/null &');
        return new Response("OK", 200);
    }

    /**
     * @Route("/api/chat/websocket/restart", methods={"GET"})
     * @return Response
     */
    public function socketRestart() {
//        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $conference = $this->getDoctrine()->getRepository(Conference::class)->findAll()[0] ?? null;
        if($conference->getChat() === null){
            throw new BadRequestHttpException("chat not found");
        }
        shell_exec('php ' . __DIR__ . '/../../websocketServer/server.php restart >/dev/null 2>/dev/null &');
        return new Response("OK", 200);
    }
}
