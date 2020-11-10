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
    <p>Global law firm White &amp; Case advises major airlines, financial institutions, lessors, as well as regional and
        cargo airlines, engine and aircraft manufacturers, export credit agencies, insurance companies and industry
        consultants on a wide range of legal issues, including restructuring of cross-border operating lease
        agreements, financing with the support of export credit agencies, maintenance contracts, repossession
        matters, tax and customs issues and many more. White &amp; Case also actively participates in the Executive
        Committee of the Aviation Working Group established in connection with the ratification of the Cape Town
        Convention in Russia and worldwide.</p>
</>;

let sitaDescription = <>
    <p>About SITA</p>
    <p>SITA is the IT provider for the air transport industry, delivering solutions for airlines, airports, aircraft
        and governments. Our technology powers more seamless, safe and sustainable air travel.</p>
    <p>Today, SITA’s solutions drive operational efficiencies at more than 1,000 airports while delivering the
        promise of the connected aircraft to more than 400 customers on 18,000 aircraft globally.</p>
    <p>SITA also provides the technology solutions that help more than 40 governments strike the balance of
        secure borders and seamless travel. Our communications network connects every corner of the globe
        and bridges 60% of the air transport community’s data exchange.</p>
    <p>SITA is 100% owned by the industry and driven by its needs. It is one of the most internationally
        diverse companies, with a presence in 200 countries and territories.</p>
    <p>SITA’s subsidiaries and joint ventures include SITA Switzerland Sàrl, branded SITA FOR AIRCRAFT,
        CHAMP Cargosystems and Aviareto. For further information, go to www.sita.aero</p>
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
        video: "https://www.youtube.com/embed/-pWc5Ts6Di0?autoplay=1",
        presentation: "https://drive.google.com/file/d/1zeicNtGOMSy6poPNKgKkUTLx8thvEfH5/view?usp=sharing",
        description: alfaDescription,
        contacts: <>
            Nikolay Manizer<br/>
            Head of Airline Management<br/>
            <a href={"tel:+79031864208"}>+7 (903) 186-42-08</a><br/>
            <a href={"mailto:manizernp@alfastrah.ru"}>manizernp@alfastrah.ru</a><br/>
            {/*<a href={"www.lufthansa-technik.com"} target={"_blank"}>www.lufthansa-technik.com</a>*/}
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
        video: "https://www.youtube.com/embed/tv6fTh9StOQ?autoplay=1",
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
        video: "https://www.youtube.com/embed/x3tQelTkTBc?autoplay=1",
        presentation: "https://drive.google.com/file/d/1dZv171uM28_c9Kq8xblITP8IiNn7fAG-/view?usp=sharing",
        description: embraerDescription,
        contacts: <>
            Pawel Skuteli<br/>
            Airline Marketing Manager<br/>
            <a href={"tel:+31202158306"}>+31 20 215 8306</a><br/>
            <a href={"mailto:pawel.skuteli@nl.embraer.com"}>pawel.skuteli@nl.embraer.com</a><br/>
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
        video: "https://www.youtube.com/embed/zcbgBB6VSqA?autoplay=1",
        presentation: "https://drive.google.com/file/d/1o1gjydrzfsNTJyGJ4x-NQnSXsOGq4UW5/view?usp=sharing",
        description: whiteNcaseDescription,
        contacts: <>
            Natalya Nikitina<br/>
            Partner, Head of Aviation Practice, Moscow Office, White & Case<br/>
            Lufthansa Technik AG<br/>
            <a href={"tel:+74957873027"}>+7 495 787 3027</a><br/>
            <a href={"mailto:nnikitina@whitecase.com"}>nnikitina@whitecase.com</a><br/>
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
        video: "https://www.youtube.com/embed/1Zrn5cPget4?autoplay=1",
        presentation: "https://drive.google.com/file/d/1FOV7mqTVMU9EQ1m7YLheL4gvH-5VEMH0/view",
        description: sitaDescription,
        contacts: <>
            Dmitry Krasnov<br/>
            Vice President Russia & CIS<br/>
            <a href={"tel:+79104068630"}>+7 (910) 406-8630</a><br/>
            <a href={"mailto:dmitry.krasnov@sita.aero"}>dmitry.krasnov@sita.aero</a><br/>
        </>
    }
];

