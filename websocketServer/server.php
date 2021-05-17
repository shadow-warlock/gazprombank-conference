<?php


use Workerman\Worker;

require_once __DIR__ . '/vendor/autoload.php';

function createWorker($wsPort = "2350", $tcpPort = "2349", $ssl = false){
    if(!$ssl){
        $ws_worker = new Worker('websocket://0.0.0.0:' . $wsPort);
    }else{
        $context = array(
            'ssl' => array(
                'local_cert'  => __DIR__.'/ssl/fullchain.pem',
                'local_pk'    => __DIR__.'/ssl/privkey.pem',
                'verify_peer' => false,
            )
        );
        $ws_worker = new Worker('websocket://0.0.0.0:' . $wsPort, $context);
        $ws_worker->transport = "ssl";
    }
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

createWorker(2350, 2349, true);
createWorker(2352, 2351, true);

Worker::runAll();
