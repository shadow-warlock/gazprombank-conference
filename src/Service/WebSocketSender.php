<?php


namespace App\Service;


class WebSocketSender {

    private JSONer $serializer;
    const MESSAGE = "message";
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


    public function send($type, $data){
        $instance = stream_socket_client("tcp://127.0.0.1:2345");
        $json = $this->serializer->toJSON(["type" => $type, "data" => $data]);
        fwrite($instance, $json);
    }
}
