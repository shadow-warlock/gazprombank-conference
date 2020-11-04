<?php


namespace App\Service;


use App\Entity\Chat;

class WebSocketSender {

    private JSONer $serializer;
    const MESSAGE = "message";
    const CREATE_ROOM = "create room";
    const DELETE_ROOM = "delete room";
    const EDIT_ROOM = "edit room";
    const LIKE = "like";
    const POLL = "poll";
    const DELETE_LIKE = "delete like";
    const DELETE_MESSAGE = "delete message";

    /**
     * WebSocketSender constructor.
     * @param $serializer
     */
    public function __construct(JSONer $serializer) {
        $this->serializer = $serializer;
    }


    public function send($type, $data, Chat $chat){
        $config = file_get_contents(__DIR__ . "/../../env.json");
        $config = json_decode($config, true);
        $instance = stream_socket_client("tcp://127.0.0.1:" . $config['WS_IN']);
        $json = $this->serializer->toJSON(["type" => $type, "data" => $data, "chat"=>$chat->getId()]);
        fwrite($instance, $json);
    }
}
