import alfa_ru from "../assets/sponsors/alfa_ru.svg";
import alfa_en from "../assets/sponsors/alfa_en.svg";
import lufthansa from "../assets/sponsors/lufthansa.svg";
import embraer from "../assets/sponsors/embraer.svg";
import whiteNcase from "../assets/sponsors/whiteNcase.svg";
import sita from "../assets/sponsors/sita.svg";
import React from 'react';

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

let alfaDescription = <>
    <p>AlfaStrakhovanie is a leader of innovations in insurance sector and risks protection of
        Russian aviation market.</p>
    <p>Being more than 25 years in the insurance industry and recognized experts,
        AlfaStrakhovanie specialists offer the highest quality services for the aviation market and
        passengers. Individual approach to each client and the ability to design reliable insurance
        protection as requested, work with the largest airlines and millions of passengers, unique
        competences of our professionals, efficiency of claim settlements, instant payments – all
        these benefits determine the choice of AlfaStrakhovanie as an insurer of major domestic
        airlines, manufacturers and aerospace clients.</p>
    <p>Among clients and partners of AlfaStrakhovanie are Aeroflot, S7 Airlines, Pobeda, Ural
        Airlines, Royal Flight, Yamal, «Red Wings», «NordStar», «Nordwind Airlines», «Azimut»,
        «Rusline», Federal State Unitary Enterprise ATC, Sukhoi, Domodedovo Airport,
        International Airport Vnukovo, TUTU.RU, OZON.TRAVEL, OneTwoTrip and other market
        players.</p>
    <p>AlfaStrakhovanie is a market leader in online insurance and mobile services. Company has
        completed more than 50 online projects in passengers’ and travel insurance. Among
        partners are leading Russian airlines, the largest online travel agencies and other
        prominent market participants. In 2019 more than 10 million passengers were insured by
        the company. AlfaStrakhovanie Mobile allows passengers always be protected by a
        reliable partner anywhere in the world.</p>
    <p>AlfaStrakhovanie specialists take part in life of professional aviation community.
        AlfaStrakhovanie is a member of the International Union of Aerospace Insurers (IUAI),
        Association Airport of Civil Aviation, the Russian Association of Air Transport Operators,
        the Society of Flight Accident Investigators and the Russian United Business Aviation
        Association (RUBAA).</p>
    <p>AlfaStrakhovanie. Providing tomorrow’s service today!</p>
</>;

let lufthansaDescription = <>
    <p>The Lufthansa Technik Group, with more than 35 subsidiaries and affiliates, is the
        world’s leading provider of technical services for the aviation industry and covers the
        entire process chain of the MRO (maintenance, repair &amp; overhaul) business.
        Lufthansa Technik’s range of products and services encompasses the entire service
        spectrum for commercial as well as VIP/Special Mission aircraft, engines,
        components and landing gear in the fields of digital fleet management,
        maintenance, repair, overhaul, modification, fitting out and conversion, along with
        the manufacture of innovative cabin products. More than 25,000 employees serve
        the internationally certified maintenance, production and development company.
        With a turnover exceeding 6.9 billion euros in 2019, the company now has more
        than 850 customers. In total, Lufthansa Technik currently supports more than 5,000
        aircraft worldwide.</p>
    <p>Digitalization is in the focus of Lufthansa Technik to create new business and to
        meet the challenges of the future MRO market. The company grasped this trend
        very early and is now continuing its consistent progress on multiple levels in the
        digitalization of processes. One of the core products in this area is AVIATAR, an
        open, neutral and modular digital platform. In a secure web-based environment,
        AVIATAR serves as an integrating hub for digital fleet solutions in the aviation
        industry, with a focus on the technical and operational side of the airlines.</p>
</>

let embraerDescription = <>
    <p>A global aerospace company headquartered in Brazil, Embraer has businesses in Commercial and Executive
        aviation, Defense &amp; Security and Agricultural Aviation. The company designs, develops, manufactures and
        markets aircraft and systems, providing Services &amp; Support to customers after-sales.</p>
    <p>Since it was founded in 1969, Embraer has delivered more than 8,000 aircraft. On average, about every 10
        seconds an aircraft manufactured by Embraer takes off somewhere in the world, transporting over 145 million
        passengers a year.</p>
    <p>Embraer is the leading manufacturer of commercial jets up to 150 seats and the main exporter of high value-
        added goods in Brazil. The company maintains industrial units, offices, service and parts distribution centers,
        among other activities, across the Americas, Africa, Asia and Europe.</p>
    <p>In Russia and the CIS the are over 60 Embraer aircraft operating with seven airlines, such as S7 and
        PegasFly. Air Astana is operating Embraer&#39;s new E2, and will soon be joined by Belavia.</p>
</>

let whiteNcaseDescription = <>
    <p>A global aerospace company headquartered in Brazil, Embraer has businesses in Commercial and Executive
        aviation, Defense &amp; Security and Agricultural Aviation. The company designs, develops, manufactures and
        markets aircraft and systems, providing Services &amp; Support to customers after-sales.</p>
    <p>Since it was founded in 1969, Embraer has delivered more than 8,000 aircraft. On average, about every 10
        seconds an aircraft manufactured by Embraer takes off somewhere in the world, transporting over 145 million
        passengers a year.</p>
    <p>Embraer is the leading manufacturer of commercial jets up to 150 seats and the main exporter of high value-
        added goods in Brazil. The company maintains industrial units, offices, service and parts distribution centers,
        among other activities, across the Americas, Africa, Asia and Europe.</p>
    <p>In Russia and the CIS the are over 60 Embraer aircraft operating with seven airlines, such as S7 and
        PegasFly. Air Astana is operating Embraer&#39;s new E2, and will soon be joined by Belavia.</p>
</>;

let sitaDescription = <>
    <p>A global aerospace company headquartered in Brazil, Embraer has businesses in Commercial and Executive
        aviation, Defense &amp; Security and Agricultural Aviation. The company designs, develops, manufactures and
        markets aircraft and systems, providing Services &amp; Support to customers after-sales.</p>
    <p>Since it was founded in 1969, Embraer has delivered more than 8,000 aircraft. On average, about every 10
        seconds an aircraft manufactured by Embraer takes off somewhere in the world, transporting over 145 million
        passengers a year.</p>
    <p>Embraer is the leading manufacturer of commercial jets up to 150 seats and the main exporter of high value-
        added goods in Brazil. The company maintains industrial units, offices, service and parts distribution centers,
        among other activities, across the Americas, Africa, Asia and Europe.</p>
    <p>In Russia and the CIS the are over 60 Embraer aircraft operating with seven airlines, such as S7 and
        PegasFly. Air Astana is operating Embraer&#39;s new E2, and will soon be joined by Belavia.</p>
</>;

export const SPONSORS = [
    {
        id: "alfa",
        name: "AlfaStrakhovanie",
        role: "general_insurance_partner",
        logo: {
            ru: alfa_ru,
            en: alfa_en
        },
        link: {
            ru: "https://www.alfastrah.ru/",
            en: "https://www.alfastrah.ru/en/company/"
        },
        video: "https://www.youtube.com/embed/-pWc5Ts6Di0",
        presentation: "https://drive.google.com/file/d/1IRDHmPKnF0AsTktCzNr4oLACzGY_W2GY/view?usp=sharing",
        description: alfaDescription,
        contacts: <>
            Denis Kanevskiy<br/>
            General Manager Russia & CIS<br/>
            Lufthansa Technik AG<br/>
            <a href={"mailto:denis.kanevskiy@lht.dlh.de"}>denis.kanevskiy@lht.dlh.de</a><br/>
            Phone: <a href={"tel:+74959375103"}>+7 495 937 51 03 ext. 140</a><br/>
            <a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>
        </>
    },
    {
        id: "lufthansa",
        name: "Lufthansa Technik",
        role: "partner",
        logo: {
            ru: lufthansa,
            en: lufthansa
        },
        link: {
            ru: "https://www.lufthansa-technik.com/",
            en: "https://www.lufthansa-technik.com/"
        },
        video: "https://www.youtube.com/embed/tv6fTh9StOQ",
        presentation: "https://drive.google.com/file/d/1IRDHmPKnF0AsTktCzNr4oLACzGY_W2GY/view?usp=sharing",
        description: lufthansaDescription,
        contacts: <>
            Denis Kanevskiy<br/>
            General Manager Russia & CIS<br/>
            Lufthansa Technik AG<br/>
            <a href={"mailto:denis.kanevskiy@lht.dlh.de"}>denis.kanevskiy@lht.dlh.de</a><br/>
            Phone: <a href={"tel:+74959375103"}>+7 495 937 51 03 ext. 140</a><br/>
            <a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>
        </>
    },
    {
        id: "embraer",
        name: "Embraer",
        role: "partner",
        logo: {
            ru: embraer,
            en: embraer
        },
        link: {
            ru: "https://embraer.com/",
            en: "https://embraer.com/"
        },
        video: "https://www.youtube.com/embed/x3tQelTkTBc",
        presentation: "https://drive.google.com/file/d/1IRDHmPKnF0AsTktCzNr4oLACzGY_W2GY/view?usp=sharing",
        description: embraerDescription,
        contacts: <>
            Denis Kanevskiy<br/>
            General Manager Russia & CIS<br/>
            Lufthansa Technik AG<br/>
            <a href={"mailto:denis.kanevskiy@lht.dlh.de"}>denis.kanevskiy@lht.dlh.de</a><br/>
            Phone: <a href={"tel:+74959375103"}>+7 495 937 51 03 ext. 140</a><br/>
            <a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>
        </>
    },
    {
        id: "whiteNcase",
        name: "White & Case",
        role: "partner",
        logo: {
            ru: whiteNcase,
            en: whiteNcase
        },
        link: {
            ru: "https://www.whitecase.com/",
            en: "https://www.whitecase.com/"
        },
        video: "https://www.youtube.com/embed/x3tQelTkTBc",
        presentation: "https://drive.google.com/file/d/1IRDHmPKnF0AsTktCzNr4oLACzGY_W2GY/view?usp=sharing",
        description: whiteNcaseDescription,
        contacts: <>
            Denis Kanevskiy<br/>
            General Manager Russia & CIS<br/>
            Lufthansa Technik AG<br/>
            <a href={"mailto:denis.kanevskiy@lht.dlh.de"}>denis.kanevskiy@lht.dlh.de</a><br/>
            Phone: <a href={"tel:+74959375103"}>+7 495 937 51 03 ext. 140</a><br/>
            <a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>
        </>
    },
    {
        id: "sita",
        name: "Sita",
        role: "general_award_partner",
        logo: {
            ru: sita,
            en: sita
        },
        link: {
            ru: "https://www.sita.aero/",
            en: "https://www.sita.aero/"
        },
        video: "https://www.youtube.com/embed/x3tQelTkTBc",
        presentation: "https://drive.google.com/file/d/1IRDHmPKnF0AsTktCzNr4oLACzGY_W2GY/view?usp=sharing",
        description: sitaDescription,
        contacts: <>
            Denis Kanevskiy<br/>
            General Manager Russia & CIS<br/>
            Lufthansa Technik AG<br/>
            <a href={"mailto:denis.kanevskiy@lht.dlh.de"}>denis.kanevskiy@lht.dlh.de</a><br/>
            Phone: <a href={"tel:+74959375103"}>+7 495 937 51 03 ext. 140</a><br/>
            <a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>
        </>
    }
];

