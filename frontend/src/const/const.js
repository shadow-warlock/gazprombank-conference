export const SERVER = {
    URL: "http://localhost:8000",
    WS1: 'ws://localhost:2348',
    WS2: 'ws://localhost:2350',
};

export const API = {
    SESSION: SERVER.URL + "/api/session",
    CONFERENCE: SERVER.URL + "/api/conference",
    CONFERENCE_POLL: SERVER.URL + "/api/conference/poll",
    USER: SERVER.URL + "/api/user",
    POLL: SERVER.URL + "/api/poll",
    CONFERENCE_POLL_CSV: SERVER.URL + "/api/conference/poll/csv",
    USER_CODE_CSV: SERVER.URL + "/api/user/code/csv",
    CHAT_MESSAGE_CSV: SERVER.URL + "/api/chat/message/csv",
    MESSAGE: (id)=> {return SERVER.URL+"/api/message/"+id},
    CHAT_MESSAGE: (id) => {return SERVER.URL + "/api/chat/" + id + "/message"},
    MESSAGE_LIKE: (id) => {return SERVER.URL + "/api/message/" + id + "/like"},
    QUESTION_ANSWER: (id) => {return SERVER.URL + "/api/question/" + id + "/answer"},
    USER_CODE: (id) => {return SERVER.URL + "/api/user/" + id + "/code"}
};


export const AXIOS_CONFIG = {withCredentials: true};

export const ROLE = {
    ADMIN: "ROLE_ADMIN",
    USER: "ROLE_USER"
}


