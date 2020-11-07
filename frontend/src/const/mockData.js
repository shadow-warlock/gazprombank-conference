export const CONFERENCE_ITEMS = [
    {
        id: 0,
        image: null,
        name: 'Вступительное слово',
        speaker: '',
        description: '',
        time: '10:00 – 10:10',
    },
    {
        id: 1,
        image: '/assets/speakers/paradejenko.jpg',
        name: '',
        speaker: 'Парадеженко Виталий Геннадьевич',
        description: 'Исполнительный Вице-Президент',
        time: null,
    },
    {
        id: 1.5,
        image: null,
        name:
            'Обзор изменений Федерального закона от 10.12.2003 № 173-ФЗ «О валютном регулировании и валютном контроле»',
        speaker: '',
        description: '',
        time: '10:10 - 10:45',
    },
    {
        id: 2,
        image: '/assets/speakers/lopatnikova.jpg',
        name: '',
        speaker: 'Лопатникова Элина Вячеславовна',
        description:
            'Вице-Президент - начальник Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 2.5,
        image: null,
        name: [
            'Новые продукты для корпоративных клиентов в рамках валютного контроля',
            'Практические вопросы проведения валютных операций в Банке ГПБ (АО)',
        ],
        speaker: '',
        description: '',
        time: '10:45 - 11:05',
    },
    {
        id: 3,
        image: '/assets/speakers/zetilova.jpg',
        name: '',
        speaker: 'Зетилова Татьяна Владимировна',
        description:
            'Заместитель начальника Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 5,
        image: null,
        name: 'Личный кабинет участника ВЭД',
        speaker: '',
        description: '',
        time: '11:05 - 11:20',
    },
    {
        id: 5.1,
        image: '/assets/speakers/mironova.jpg',
        name: '',
        speaker: 'Миронова Екатерина Юрьевна',
        description:
            'Заместитель начальника Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 5.5,
        image: null,
        name: 'Сессия вопросов и ответов',
        speaker: '',
        description: '',
        time: '11:20 – 12:00',
    },
    {
        id: 8,
        image: '/assets/speakers/putilina.jpg',
        name: '',
        speaker: 'Путилина Юлия Евгеньевна',
        description:
            'Начальник Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 6,
        image: '/assets/speakers/lopatnikova.jpg',
        name: '',
        speaker: 'Лопатникова Элина Вячеславовна',
        description:
            'Вице-Президент - начальник Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 7,
        image: '/assets/speakers/zetilova.jpg',
        name: '',
        speaker: 'Зетилова Татьяна Владимировна',
        description:
            'Заместитель начальника Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 9,
        image: '/assets/speakers/mironova.jpg',
        name: '',
        speaker: 'Миронова Екатерина Юрьевна',
        description:
            'Заместитель начальника Управления сопровождения и контроля валютных операций Департамента сопровождения валютных операций',
        time: null,
    },
    {
        id: 10,
        image: null,
        name: 'Закрытие конференции',
        speaker: '',
        description: '',
        time: null,
    },
    {
        id: 11,
        image: '/assets/speakers/lopatnikova.jpg',
        name: '',
        speaker: 'Лопатникова Элина Вячеславовна',
        description:
            'Вице-Президент - начальник Департамента сопровождения валютных операций',
        time: null,
    },
];

export const USE = {
    MAIN: 'main',
    AUTH: 'auth',
};

export const TECH_SUPPORTERS = [
    {
        use: [USE.MAIN, USE.AUTH],
        role: 'participation',
        name: 'svetlana_pimenova',
        phone: '+7 (903) 263-46-14',
        email: 's.pimenova@atoevents.ru',
    },
    {
        use: [USE.MAIN, USE.AUTH],
        role: 'participation',
        name: 'nikita_kachaev',
        phone: '+7 (964) 500-25-33',
        email: 'nikita.kachaev@gmail.com',
    },
];

export const CONTACTS = [
    {
        use: [USE.MAIN, USE.AUTH],
        role: 'agenda',
        name: 'igor_smirnov',
        phone: '+7 (965) 236-88 97',
        email: 'i.smirnov@wwe-conferences.com',
    },
];

export const conferenceDate = new Date('2020-11-12');
export const conferenceTime = '09:30';
export const agendaURL = {
    en: '',
    ru:
        'https://wwe-conferences.com/wp-content/uploads/2020/11/MOSPF20_rus.pdf',
};
