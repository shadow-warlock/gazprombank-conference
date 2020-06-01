<?php


use Workerman\Worker;

require_once __DIR__ . '/vendor/autoload.php';

function createWorker($wsPort = "2350", $tcpPort = "2349"){
    $ws_worker = new Worker('websocket://0.0.0.0:' . $wsPort);

    $connections = [];
    // 4 processes
    //$ws_worker->count = 4;

    $ws_worker->onWorkerStart = function() use (&$connections, &$tcpPort){
        $inner_tcp_worker = new Worker("tcp://127.0.0.1:" . $tcpPort);
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
}

createWorker(2350, 2349);
createWorker(2352, 2351);

Worker::runAll();
