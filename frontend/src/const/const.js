export const SERVER = {
    URL: "http://localhost:8000",
    WS: 'ws://localhost:2346'
};

export const API = {
    SESSION: SERVER.URL + "/api/session",
    CONFERENCE: SERVER.URL + "/api/conference",
    CHAT_MESSAGE: (id) => {return SERVER.URL + "/api/chat/" + id + "/message"},
    MESSAGE_LIKE: (id) => {return SERVER.URL + "/api/message/" + id + "/like"}
};


export const AXIOS_CONFIG = {withCredentials: true};

export const TECH_SUPPORT_PHONE = "+7-926-149-14-37";
export const ROLE = {
    ADMIN: "ROLE_ADMIN",
    USER: "ROLE_USER"
}


