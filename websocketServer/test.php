<?php
// соединяемся с локальным tcp-сервером
$instance = stream_socket_client("tcp://127.0.0.1:2345");
// отправляем сообщение
fwrite($instance, json_encode(['message' => 'message']));

