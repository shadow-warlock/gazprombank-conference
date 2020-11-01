export const SERVER = {
    URL: 'http://localhost:8000',
    WS: (port) => {
        return 'ws://localhost:' + port;
    },
};

export const API = {
    SESSION: SERVER.URL + '/api/session',
    CONFERENCE: SERVER.URL + '/api/conference',
    WS_SERVER_START: SERVER.URL + '/api/chat/websocket/start',
    WS_SERVER_STOP: SERVER.URL + '/api/chat/websocket/stop',
    WS_SERVER_STATUS: SERVER.URL + '/api/chat/websocket/status',
    CONFERENCE_POLL: SERVER.URL + '/api/conference/poll',
    USER: SERVER.URL + '/api/user',
    CONFERENCE_URL: SERVER.URL + '/api/seturl',
    POLL: SERVER.URL + '/api/poll',
    CONFERENCE_POLL_CSV: SERVER.URL + '/api/conference/poll/csv',
    USER_CODE_CSV: SERVER.URL + '/api/user/code/csv',
    CHAT_MESSAGE_CSV: SERVER.URL + '/api/chat/message/csv',
    MESSAGE: (id) => {
        return SERVER.URL + '/api/message/' + id;
    },
    CHAT_MESSAGE: (id) => {
        return SERVER.URL + '/api/chat/' + id + '/message';
    },
    MESSAGE_LIKE: (id) => {
        return SERVER.URL + '/api/message/' + id + '/like';
    },
    QUESTION_ANSWER: (id) => {
        return SERVER.URL + '/api/question/' + id + '/answer';
    },
    USER_CODE: (id) => {
        return SERVER.URL + '/api/user/' + id + '/code';
    },
};

export const AXIOS_CONFIG = { withCredentials: true };

export const ROLE = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
};
