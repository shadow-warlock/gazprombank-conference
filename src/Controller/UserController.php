<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class UserController extends AbstractController {
    /**
     * @Route("/api/user/{id}", name="user_delete", methods={"DELETE"})
     * @param $id
     * @return JsonResponse
     */
    public function deleteUser($id) {
        $entityManager = $this->getDoctrine()->getManager();
        $user = $entityManager->find(User::class, $id);
        if(!$user) {
            throw new NotFoundHttpException("user not found");
        }
        $entityManager->remove($user);
        $entityManager->flush();
        return $this->json(true, 204);
    }

    /**
     * @Route("/api/user", name="user_add", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function userAdd(Request $request) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $serializer = new Serializer([new GetSetMethodNormalizer()], [new JsonEncoder()]);
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $user->setRole(User::ROLE_USER);
        $codes = array_map(fn(User $user) => $user->getCode(), $this->getAllUsers());
        do {
            $user->setCode();
        } while(array_search($user->getCode(), $codes) !== false);
        $this->getDoctrine()->getManager()->persist($user);
        $this->getDoctrine()->getManager()->flush();
        return $this->json($user, 201);
    }

    /**
     * @Route("/api/user/{id}/code",name="generate_new_code",methods={"PUT"})
     * @param $id
     * @return JsonResponse
     */
    public function generateNewCode($id) {
        $this->denyAccessUnlessGranted(User::ROLE_ADMIN);
        $repository = $this->getDoctrine()->getRepository(User::class);
        $user = $repository->find($id);
        $codes = array_map(fn($user) => $user->getCode(), $this->getAllUsers());
        do {
            $user->setCode();
        } while(array_search($user->getCode(), $codes) !== false);
        $this->getDoctrine()->getManager()->persist($user);
        $this->getDoctrine()->getManager()->flush();
        return $this->json($user, 200);
    }

    /**
     * @Route("/api/user/{id}")
     * @param $id
     * @return JsonResponse
     */
    public function userGet($id) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        return $this->json($user, 200);
    }

    /**
     * @return User[]|object[]
     */
    private function getAllUsers() {
        $repository = $this->getDoctrine()->getRepository(User::class);
        return $repository->findAll();
    }

    /**
     * @Route("/api/user", name="get_logged_user", methods={"GET"})
     */
    public function getLoggedUser() {
        return $this->json($this->getUser());
    }
}
