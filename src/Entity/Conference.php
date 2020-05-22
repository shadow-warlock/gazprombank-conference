<?php

namespace App\Entity;

use App\Repository\ConferenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ConferenceRepository::class)
 */
class Conference
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\OneToOne(targetEntity=Poll::class, cascade={"persist", "remove"})
     */
    private $poll;

    /**
     * @ORM\OneToMany(targetEntity=ConferenceItem::class, mappedBy="conference", orphanRemoval=true)
     */
    private $conferenceItems;

    /**
     * @ORM\OneToOne(targetEntity=Chat::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $chat;

    public function __construct()
    {
        $this->conferenceItems = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getPoll(): ?Poll
    {
        return $this->poll;
    }

    public function setPoll(?Poll $poll): self
    {
        $this->poll = $poll;

        return $this;
    }

    public function getChat(): ?Chat
    {
        return $this->chat;
    }

    public function setChat(Chat $chat): self
    {
        $this->chat = $chat;

        return $this;
    }

    /**
     * @return Collection|ConferenceItem[]
     */
    public function getConferenceItems(): Collection
    {
        return $this->conferenceItems;
    }

    public function addConferenceItem(ConferenceItem $conferenceItem): self
    {
        if (!$this->conferenceItems->contains($conferenceItem)) {
            $this->conferenceItems[] = $conferenceItem;
            $conferenceItem->setConference($this);
        }

        return $this;
    }
}
