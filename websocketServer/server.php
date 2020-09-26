<?php


use Workerman\Worker;

require_once __DIR__ . '/vendor/autoload.php';

$config = file_get_contents(__DIR__ . "/../env.json");
$config = json_decode($config, true);

$ws_worker = new Worker('websocket://0.0.0.0:' . $config["WS_OUT"]);

$connections = [];
// 4 processes
//$ws_worker->count = 4;

$ws_worker->onWorkerStart = function() use (&$connections, $config){
    $inner_tcp_worker = new Worker("tcp://127.0.0.1:" . $config["WS_IN"]);
    $inner_tcp_worker->onMessage = function($connection, $data) use (&$connections) {
        foreach ($connections as $client) {
            $client->send($data);
        }
    };
    $inner_tcp_worker->listen();
};

$ws_worker->onConnect = function($connection) use (&$connections) {
    $connections[] = $connection;
};

//$ws_worker->onMessage = function($connection, $data) {
//    $connection->send('Hello ' . $data);
//};

$ws_worker->onClose = function($connection) use (&$connections) {
    $index = array_search($connection, $connections);
    unset($connections[$index]);
};

Worker::runAll();
