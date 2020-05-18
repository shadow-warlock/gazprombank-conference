<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message {
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
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=Message::class, inversedBy="replies")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $replyTo;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="replyTo")
     * @Serializer\Exclude()
     */
    private $replies;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=UserLike::class, mappedBy="message", orphanRemoval=true)
     */
    private $likes;

    /**
     * @ORM\ManyToOne(targetEntity=Chat::class, inversedBy="messages")
     * @ORM\JoinColumn(nullable=false)
     * @Serializer\Exclude()
     */
    private $chat;

    public function __construct() {
        $this->replies = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

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

    public function getText(): ?string {
        return $this->text;
    }

    public function setText(string $text): self {
        $this->text = $text;

        return $this;
    }

    public function getReplyTo(): ?self {
        return $this->replyTo;
    }

    /**
     * @param Message|object|null $replyTo
     * @return $this
     */
    public function setReplyTo(?self $replyTo): self {
        $this->replyTo = $replyTo;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getReplies(): Collection {
        return $this->replies;
    }

    public function addReply(self $reply): self {
        if(!$this->replies->contains($reply)) {
            $this->replies[] = $reply;
            $reply->setReplyTo($this);
        }

        return $this;
    }

    public function removeReply(self $reply): self {
        if($this->replies->contains($reply)) {
            $this->replies->removeElement($reply);
            // set the owning side to null (unless already changed)
            if($reply->getReplyTo() === $this) {
                $reply->setReplyTo(null);
            }
        }

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

    /**
     * @return Collection|UserLike[]
     */
    public function getLikes(): Collection {
        return $this->likes;
    }

    public function addLike(UserLike $like): self {
        if(!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setMessage($this);
        }

        return $this;
    }

    public function removeLike(UserLike $like): self {
        if($this->likes->contains($like)) {
            $this->likes->removeElement($like);
            // set the owning side to null (unless already changed)
            if($like->getMessage() === $this) {
                $like->setMessage(null);
            }
        }

        return $this;
    }

    public function getChat(): ?Chat {
        return $this->chat;
    }

    /**
     * @param Chat|object|null $chat
     * @return $this
     */
    public function setChat(?Chat $chat): self {
        $this->chat = $chat;

        return $this;
    }

    public function findLikeFromUser(User $user): ?UserLike {
        foreach($this->getLikes() as $like) {
            if($user->getId() == $like->getUser()->getId()) {
                return $like;
            }
        }
        return null;
    }
}
