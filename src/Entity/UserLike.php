<?php

namespace App\Entity;

use App\Repository\UserLikeRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserLikeRepository::class)
 */
class UserLike {
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $time;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Message::class, inversedBy="likes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $message;

    public function getId(): ?int {
        return $this->id;
    }

    public function getTime(): ?\DateTimeInterface {
        return $this->time;
    }

    public function setTime(): self {
        $this->time = new DateTime();
        return $this;
    }

    public function getUser(): ?User {
        return $this->user;
    }

    /**
     * @param User|object|null $user
     * @return $this
     */
    public function setUser(?User $user): self {
        $this->user = $user;

        return $this;
    }

    public function getMessage(): ?Message {
        return $this->message;
    }

    /**
     * @param Message|object|null $message
     * @return $this
     */
    public function setMessage(?Message $message): self {
        $this->message = $message;

        return $this;
    }
}
