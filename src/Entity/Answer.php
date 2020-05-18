<?php

namespace App\Entity;

use App\Repository\AnswerRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\UniqueConstraint;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass=AnswerRepository::class)
 * @Table(name="answer",
 *    uniqueConstraints={
 *        @UniqueConstraint(name="answer_unique",
 *            columns={"user_id", "poll_id"})
 *    }
 * )
 */
class Answer {
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Poll::class, inversedBy="answers")
     * @ORM\JoinColumn(nullable=false)
     * @Serializer\Exclude()
     */
    private $poll;

    public function getId(): ?int {
        return $this->id;
    }

    public function getText(): ?string {
        return $this->text;
    }

    public function setText(string $text): self {
        $this->text = $text;

        return $this;
    }

    public function getUser(): ?User {
        return $this->user;
    }

    /**
     * @param User|null|object $user
     * @return $this
     */
    public function setUser(?User $user): self {
        $this->user = $user;

        return $this;
    }

    public function getPoll(): ?Poll {
        return $this->poll;
    }

    /**
     * @param Poll|object|null $poll
     * @return $this
     */
    public function setPoll(?Poll $poll): self {
        $this->poll = $poll;

        return $this;
    }
}
