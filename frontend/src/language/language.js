const cookieName = 'language=';
const supporterLanguages = ['ru', 'en'];
const navigatorLang = navigator.language.substr(0, 2).toLowerCase();
const defaultLang =
    supporterLanguages.indexOf(navigatorLang) !== -1 ? navigatorLang : 'ru';

export function setLanguage(lang) {
    document.cookie = cookieName + lang;
}

export function getLanguage() {
    // let cookies = document.cookie.split('; ');
    // let langCookie = cookies.find((element) => {
    //     return element.startsWith(cookieName);
    // });
    // let lang = langCookie ? langCookie.replace(cookieName, '') : defaultLang;
    // return lang;
    return 'ru';
}

export function changeLanguage() {
    let index = supporterLanguages.indexOf(getLanguage());
    setLanguage(supporterLanguages[index ? 0 : 1]);
}

export function getMessages() {
    return require('./messages/' + getLanguage() + '.json');
}
