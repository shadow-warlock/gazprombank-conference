<?php


use Workerman\Worker;

require_once __DIR__.'/vendor/autoload.php';

$config = file_get_contents(__DIR__."/../env.json");
$config = json_decode($config, true);
if (!isset($config["SSL"]) || !$config["SSL"]) {
    $ws_worker = new Worker('websocket://0.0.0.0:'.$config["WS_OUT"]);
} else {
    $context = array(
        'ssl' => array(
            'local_cert' => __DIR__.'/ssl/fullchain.pem',
            'local_pk' => __DIR__.'/ssl/privkey.pem',
            'verify_peer' => false,
        ),
    );
    $ws_worker = new Worker('websocket://0.0.0.0:'.$config["WS_OUT"], $context);
    $ws_worker->transport = "ssl";
}

$connections = [];
// 4 processes
//$ws_worker->count = 4;
$lastPing = 0;

$ws_worker->onWorkerStart = function () use (&$connections, $config, &$lastPing) {
    $inner_tcp_worker = new Worker("tcp://127.0.0.1:".$config["WS_IN"]);
    $inner_tcp_worker->onMessage = function ($connection, $data) use (&$connections, &$lastPing)
    {
        $json = json_decode($data, true);
        if(!isset($connections[$json["chat"]])){
            $connections[$json["chat"]] = [];
        }
        if($json['type'] == "pong"){
            if(time() - $lastPing > 30000){
                $lastPing = time();
                foreach ($connections[$json["chat"]] as $client) {
                    $client->send($data);
                }
            }
        }else{
            foreach ($connections[$json["chat"]] as $client) {
                $client->send($data);
            }
        }
    };
    $inner_tcp_worker->listen();
};

$ws_worker->onConnect = function ($connection) use (&$connections) {
    $connection->onWebSocketConnect = function ($connection, $header) use (&$connections)  {
        $chat = $_GET["chat"];
        if(isset($connections[$chat])){
            $connections[$chat][] = $connection;
        }else{
            $connections[$chat] = [];
            $connections[$chat][] = $connection;
        }
    };

};

$ws_worker->onMessage = function($connection, $data) {
    if($data === "ping"){
        $connection->send(json_encode(['type'=>'pong']));
    }
};

$ws_worker->onClose = function ($connection) use (&$connections) {
    foreach ($connections as $chat){
        $index = array_search($connection, $chat);
        if($index !== false){
            unset($connections[$index]);
        }
    }
};

Worker::runAll();
