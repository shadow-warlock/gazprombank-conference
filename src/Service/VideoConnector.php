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
        $url = str_replace("{num}", $room->getVideo(), $this->url);
        $response = $this->client->request("POST", $url . self::SESSION, [
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

    public function createToken(Room $room){
        $url = str_replace("{num}", $room->getVideo(), $this->url);
        $response = $this->client->request("POST", $url . self::TOKEN, [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode(['session' => $room->getCode()])
        ]);
        return $response->toArray()["token"];
    }

    public function cameraConnect(Room $room){
        $url = str_replace("{num}", $room->getVideo(), $this->url);
        $response = $this->client->request("POST", $url .  self::SESSION . "/" . $room->getCode() . "/connection", [
            "verify_peer"=>false,"verify_host"=>false,
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode('OPENVIDUAPP:' . $this->secret),
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'type' => 'IPCAM',
                'rtspUri' => "rtsp://rtsp:StartRTSP@176.97.32.22:5543",
                'adaptativeBitrate' => false,
                'onlyPlayWithSubscribers' => false,
                'data' => json_encode(['clientData' => 'test camera']),
//                'networkCache' => 2000
            ])
        ]);
//        '{"type": "IPCAM", "rtspUri": "rtsp://rtsp:StartRTSP@176.97.32.22:5541/live/main", "adaptativeBitrate": true, "onlyPlayWithSubscribers": true, "data": "Office security camera", "networkCache": 2000}'
        return $response->toArray();
    }

    public function deleteSession(Room $room){
        $url = str_replace("{num}", $room->getVideo(), $this->url);
        $response = $this->client->request("DELETE", $url . self::SESSION . '/' . $room->getCode(), [
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
        $url = str_replace("{num}", $room->getVideo(), $this->url);

        $response = $this->client->request("GET", $url . self::SESSION . '/' . $room->getCode(), [
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
