import alfa_ru from "../assets/sponsors/alfa_ru.svg";
import alfa_en from "../assets/sponsors/alfa_en.svg";
import lufthansa from "../assets/sponsors/lufthansa.svg";
import embraer from "../assets/sponsors/embraer.svg";
import whiteNcase from "../assets/sponsors/whiteNcase.svg";
import sita from "../assets/sponsors/sita.svg";

export const CONFERENCE_ITEMS = [
    {
        id: 0,
        image: null,
        name: "Вступительное слово",
        speaker: "",
        description: "",
        time: "10:00 – 10:10"
    },
    {
        id: 1,
        image: "/assets/speakers/paradejenko.jpg",
        name: "",
        speaker: "Парадеженко Виталий Геннадьевич",
        description: "Исполнительный Вице-Президент",
        time: null
    },
    {
        id: 1.5,
        image: null,
        name: "Обзор изменений Федерального закона от 10.12.2003 № 173-ФЗ «О валютном регулировании и валютном контроле»",
        speaker: "",
        description: "",
        time: "10:10 - 10:45"
    },
    {
        id: 2,
        image: "/assets/speakers/lopatnikova.jpg",
        name: "",
        speaker: "Лопатникова Элина Вячеславовна",
        description: "Вице-Президент - начальник Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 2.5,
        image: null,
        name: [
            "Новые продукты для корпоративных клиентов в рамках валютного контроля",
            "Практические вопросы проведения валютных операций в Банке ГПБ (АО)"
        ],
        speaker: "",
        description: "",
        time: "10:45 - 11:05"
    },
    {
        id: 3,
        image: "/assets/speakers/zetilova.jpg",
        name: "",
        speaker: "Зетилова Татьяна Владимировна",
        description: "Заместитель начальника Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 5,
        image: null,
        name: "Личный кабинет участника ВЭД",
        speaker: "",
        description: "",
        time: "11:05 - 11:20"
    },
    {
        id: 5.1,
        image: "/assets/speakers/mironova.jpg",
        name: "",
        speaker: "Миронова Екатерина Юрьевна",
        description: "Заместитель начальника Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 5.5,
        image: null,
        name: "Сессия вопросов и ответов",
        speaker: "",
        description: "",
        time: "11:20 – 12:00"
    },
    {
        id: 8,
        image: "/assets/speakers/putilina.jpg",
        name: "",
        speaker: "Путилина Юлия Евгеньевна",
        description: "Начальник Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 6,
        image: "/assets/speakers/lopatnikova.jpg",
        name: "",
        speaker: "Лопатникова Элина Вячеславовна",
        description: "Вице-Президент - начальник Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 7,
        image: "/assets/speakers/zetilova.jpg",
        name: "",
        speaker: "Зетилова Татьяна Владимировна",
        description: "Заместитель начальника Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 9,
        image: "/assets/speakers/mironova.jpg",
        name: "",
        speaker: "Миронова Екатерина Юрьевна",
        description: "Заместитель начальника Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций",
        time: null
    },
    {
        id: 10,
        image: null,
        name: "Закрытие конференции",
        speaker: "",
        description: "",
        time: null
    },
    {
        id: 11,
        image: "/assets/speakers/lopatnikova.jpg",
        name: "",
        speaker: "Лопатникова Элина Вячеславовна",
        description: "Вице-Президент - начальник Департамента сопровождения валютных операций",
        time: null
    }
];

export const USE = {
    MAIN: "main",
    AUTH: "auth"
}

export const TECH_SUPPORTERS = [
    {
        use: [USE.MAIN, USE.AUTH],
        role: "participation",
        name: "alena_garanicheva",
        phone: "+7 (965) 109-3484",
        email: "a.garanicheva@atoevents.ru"
    },
    {
        use: [USE.MAIN, USE.AUTH],
        role: "participation",
        name: "elizaveta_clavskaya",
        phone: "+7 (965) 118-6831",
        email: "e.slavskaya@atoevents.ru"
    },
    {
        use: [USE.MAIN, USE.AUTH],
        role: "participation",
        name: "amir_manzhukov",
        phone: "+7 (962) 945-5129",
        email: "a.manzhukov@atoevents.ru"
    },

    {
        use: [USE.MAIN],
        role: "participation",
        name: "vladislav_nemtinov",
        phone: "+7 (965) 118-7175",
        email: "v.nemtinov@atoevents.ru"
    },
    // {
    //     use: [USE.AUTH],
    //     name: "svetlana_pimenova",
    //     phone: "+7 (903) 263-4614",
    //     email: "s.pimenova@atoevents.ru"
    // },
    // {
    //     use: [USE.MAIN],
    //     role: "agenda",
    //     name: "anastasia_zamotina",
    //     phone: "+7 (967) 198-3892",
    //     email: "a.zamotina@atoevents.ru"
    // }
];

export const ATO_LINK = {
    ru: "https://events.ato.ru/",
    en: "https://events.ato.ru/eng/"
}

export const conferenceDate = new Date("2020-10-27");
export const conferenceTime = "11:00";
export const agendaURL = {
    "en": "https://www.events.ato.ru/wof2020-agenda-e",
    "ru": "https://www.events.ato.ru/wof2020-agenda-r"
};

export const SPONSORS = [
    {
        id: "alfa",
        role: "general_insurance_partner",
        logo: {
            ru: alfa_ru,
            en: alfa_en
        },
        link: {
            ru: "https://www.alfastrah.ru/",
            en: "https://www.alfastrah.ru/en/company/"
        }
    },
    {
        id: "lufthansa",
        role: "partner",
        logo: {
            ru: lufthansa,
            en: lufthansa
        },
        link: {
            ru: "https://www.lufthansa-technik.com/",
            en: "https://www.lufthansa-technik.com/"
        }
    },
    {
        id: "embraer",
        role: "partner",
        logo: {
            ru: embraer,
            en: embraer
        },
        link: {
            ru: "https://embraer.com/",
            en: "https://embraer.com/"
        }
    },
    {
        id: "whiteNcase",
        role: "partner",
        logo: {
            ru: whiteNcase,
            en: whiteNcase
        },
        link: {
            ru: "https://www.whitecase.com/",
            en: "https://www.whitecase.com/"
        }
    },
    {
        id: "sita",
        role: "general_award_partner",
        logo: {
            ru: sita,
            en: sita
        },
        link: {
            ru: "https://www.sita.aero/",
            en: "https://www.sita.aero/"
        }
    }
]