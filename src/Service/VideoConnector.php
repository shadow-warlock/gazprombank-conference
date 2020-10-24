<?php


namespace App\Service;


use App\Entity\Room;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class VideoConnector
{

    private string $url;
    private string $secret;
    private HttpClientInterface $client;

    private const SESSION = "/api/sessions";
    private const TOKEN = "/api/tokens";

    public function __construct(string $url, string $secret, HttpClientInterface $client)
    {
        $this->url = $url;
        $this->secret = $secret;
        $this->client = $client;
    }

    public function createSession(Room $room){
        $response = $this->client->request("POST", $this->url . self::SESSION, [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode(['customSessionId' => $room->getCode()])
        ]);
        $code = $response->getStatusCode();
        if($code !== 409){
            return $response->toArray()["id"];
        }else{
            return $room->getCode();
        }
    }

    public function createToken(string $sessionId){
        $response = $this->client->request("POST", $this->url . self::TOKEN, [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode(['session' => $sessionId])
        ]);
        return $response->toArray()["token"];
    }

    public function deleteSession(Room $room){
        $response = $this->client->request("DELETE", $this->url . self::SESSION . '/' . $room->getCode(), [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'body' => json_encode(['customSessionId' => $room->getCode()])
        ]);
        $code = $response->getStatusCode();
//        if($code !== 204 && $code !== 404){
//            throw new \LogicException();
//        }
    }

    public function getSession(Room $room){
        $response = $this->client->request("GET", $this->url . self::SESSION . '/' . $room->getCode(), [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'body' => json_encode(['customSessionId' => $room->getCode()])
        ]);
        return $response->toArray();
    }
}
