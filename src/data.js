/**
 * Single source of truth for all site content.
 *
 * Text lives under `content.en` / `content.ru` so the whole site is bilingual.
 * Language-agnostic bits (name, email, links, gradients) live once and are
 * shared across both languages.
 */

import autouzIcon from './assets/autouz-icon.jpg'
import aiacademyIcon from './assets/aiacademy-icon.jpg'
import csogboardIcon from './assets/csogboard-icon.jpg'
import himayaIcon from './assets/himaya-icon.jpg'
import topmasterIcon from './assets/topmaster-icon.jpg'
import yuktashishIcon from './assets/yuktashish-icon.jpg'
import yuktashishproIcon from './assets/yuktashishpro-icon.jpg'
import shukronaIcon from './assets/shukrona-icon.jpg'
import olbiletIcon from './assets/olbilet-icon.png'

/* ---- Language-agnostic profile & links ---- */
export const profile = {
  name: 'Qobil Abduraximov',
  brand: 'Abduraximov Qobil',
  available: true,
  year: 2026,
  email: 'abduraximovqobil@mail.ru',
  phone: '+998 99 830 89 40',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/abdurakh1mov' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qobil-abduraximov' },
  { label: 'Telegram', href: 'https://t.me/abduraximovqobil' },
]

/**
 * Visual identity for each project, keyed by id and shared across languages.
 * Only the copy (name/category/description) is translated below.
 */
export const appVisuals = {
  autouz: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
  aiacademy: 'linear-gradient(135deg, #34d399, #5eead4)',
  csogboard: 'linear-gradient(135deg, #6366f1, #38bdf8)',
  himaya: 'linear-gradient(135deg, #c59a5f, #0f2130)',
  topmaster: 'linear-gradient(135deg, #c084fc, #5eead4)',
  yuktashish: 'linear-gradient(135deg, #fbbf24, #f97316)',
  yuktashishpro: 'linear-gradient(135deg, #f97316, #0f2130)',
  shukrona: 'linear-gradient(135deg, #a78bfa, #f472b6)',
  olbilet: 'linear-gradient(135deg, #f43f5e, #a78bfa)',
}

/*
 * Real app-icon logos, keyed by project id. Cards fall back to the gradient
 * above. `padded` puts the mark on a white tile (for transparent logos that
 * would vanish on the dark card); full-bleed icons render edge to edge.
 */
export const appLogos = {
  autouz: { src: autouzIcon },
  aiacademy: { src: aiacademyIcon },
  csogboard: { src: csogboardIcon },
  himaya: { src: himayaIcon },
  topmaster: { src: topmasterIcon },
  yuktashish: { src: yuktashishIcon },
  yuktashishpro: { src: yuktashishproIcon },
  shukrona: { src: shukronaIcon },
  olbilet: { src: olbiletIcon },
}

/* App Store links, keyed by project id. */
export const appLinks = {
  autouz: 'https://apps.apple.com/uz/app/auto-uz-avtomobillar-olami/id1670951057',
  aiacademy: 'https://apps.apple.com/us/app/ovoz-ai-academy/id6795569313',
  csogboard: 'https://apps.apple.com/us/app/csog-board/id6795915735',
  himaya: 'https://apps.apple.com/uz/app/himaya/id6796583412',
  topmaster: 'https://apps.apple.com/uz/app/topmaster/id6502838564',
  yuktashish: 'https://apps.apple.com/uz/app/yuktashish/id6768605504',
  yuktashishpro: 'https://apps.apple.com/uz/app/yuktashish-pro/id6768605769',
  shukrona: 'https://apps.apple.com/us/app/shukrona-academy-app/id6786992462',
  // Not on the stores yet — link to the platform's website.
  olbilet: 'https://olbilet.uz',
}

/* Tech stack — names are the same in every language. */
export const stack = [
  'Flutter',
  'Dart',
  'Bloc / Cubit',
  'Provider',
  'freezed',
  'Clean Architecture',
  'DDD',
  'Chopper',
  'Retrofit',
  'REST APIs',
  'Hive',
  'Firebase',
  'Android',
  'Kotlin',
  'Java',
  'Jetpack Compose',
  'Room',
  'Dagger Hilt',
  'Git',
]

/* Phone mock-ups shown in the hero (project ids). */
export const heroPhones = ['autouz', 'aiacademy', 'topmaster']

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export const defaultLang = 'en'

/* ---- Translated content ---- */
export const content = {
  en: {
    nav: [
      { label: 'Apps', href: '#apps' },
      { label: 'About', href: '#about' },
      { label: 'Stack', href: '#stack' },
      { label: 'Work', href: '#work' },
    ],
    ui: {
      hireMe: 'Hire me',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      available: 'Available for work',
      exploreApps: 'Explore apps',
      getInTouch: 'Get in touch',
      viewOnStore: 'View on the App Store',
      visitSite: 'Visit website',
    },
    hero: {
      lead: 'I build',
      accent: 'Flutter',
      trail: 'apps',
      tagline:
        'Flutter & Android developer crafting scalable, production-ready mobile apps with Clean Architecture, DDD and reactive state management. Booking systems, rental platforms and management tools — shipped and in production.',
    },
    // NOTE: download count & average rating aren't on the résumé — kept as mock/placeholder values.
    stats: [
      { value: '6+', label: 'years' },
      { value: '14', label: 'apps' },
      { value: '2M+', label: 'downloads' },
      { value: '4.8', label: 'avg rating' },
    ],
    appsSection: {
      title: 'Featured apps',
      subtitle: "A selection of what I've shipped.",
    },
    // Ratings come from the App Store; apps without enough reviews yet show none.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Car marketplace',
        rating: '4.6',
        description:
          "Uzbekistan's car marketplace: search, filter and compare up to 20 cars, post and promote listings, browse dealers — plus insurance, EV-charging and fuel-station services and a vertical video feed.",
      },
      {
        id: 'aiacademy',
        name: 'Ovoz — AI Academy',
        category: 'Education / LMS',
        description:
          'LMS app for AI Academy (Tashkent) serving four roles — admin, mentor, student and annotator — with a student voice-recording flow that builds an Uzbek TTS/STT speech corpus.',
      },
      {
        id: 'csogboard',
        name: 'CSOG Board',
        category: 'Team task board',
        description:
          'Mobile kanban for teams: boards with WIP limits and drag-and-drop cards, checklists, @mention comments and attachments, manager statistics — plus SMS notifications for assignments, deadlines and daily digests.',
      },
      {
        id: 'himaya',
        name: 'Himaya',
        category: 'Device insurance',
        description:
          'Device-insurance platform for the Uzbek market: agents register phones with IMEI checks and photo/video condition capture, while service staff assess claims and trigger payouts.',
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Barber booking',
        rating: '4.6',
        description:
          'Two-sided barber booking marketplace: clients find barbershops on the map and book appointments, while barbers manage schedules, client records, SMS reminders and revenue stats.',
      },
      {
        id: 'yuktashish',
        name: 'YukTashish',
        category: 'Logistics / delivery',
        description:
          'Cargo delivery app for Uzbekistan: set pickup and drop-off points on the map, choose vehicle and cargo type, then track the driver live and chat in real time.',
      },
      {
        id: 'yuktashishpro',
        name: 'YukTashish Pro',
        category: 'Logistics / driver app',
        description:
          'Driver side of the YukTashish platform: accept orders, run a step-by-step delivery flow, stream live location, manage wallet and payout cards, and chat with customers.',
      },
      {
        id: 'shukrona',
        name: 'Shukrona Academy',
        category: 'Education / e-learning',
        description:
          'Closed e-learning platform for specialists working with autism (ASD): video courses with lessons, knowledge tests, progress tracking and certificates.',
      },
      {
        id: 'olbilet',
        name: 'OlBilet',
        category: 'Event ticketing',
        description:
          'Ticketing app for olbilet.uz — concerts, theater, sports and cinema in Uzbekistan: pick exact seats on an interactive venue map with realtime holds, pay by card and get QR + PDF tickets.',
      },
    ],
    about: {
      title: 'About me',
      paragraphs: [
        "I'm Qobil — a Flutter & Android developer focused on scalable architecture, clean code and reliable API integration.",
        'I build cross-platform mobile products end to end: Clean Architecture and DDD, reactive state management with Bloc/Cubit and Provider, REST integration via Chopper and Retrofit, and local storage with Hive and Room. I have shipped multiple commercial apps — booking systems, rental platforms and management tools — and I care about performance, teamwork and continuous improvement.',
      ],
    },
    stackSection: {
      title: 'My stack',
    },
    experienceSection: {
      title: 'Experience',
    },
    experience: [
      {
        period: '2024 — Now',
        role: 'Flutter Developer',
        company: 'Auto.uz',
        summary:
          'Migrated comparison & home modules to v2 API with typed errors and post-login bulk-merge; Bloc/Cubit + freezed, Firebase, push and Yandex Maps with uz/ru/en localization.',
      },
      {
        period: '2023',
        role: 'Flutter Developer',
        company: 'Ubarber',
        summary:
          'Built scalable architecture with Domain-Driven Design, managed state with Bloc and Provider, and integrated APIs with Chopper and Retrofit.',
      },
      {
        period: '2022 — 23',
        role: 'Software Engineer',
        company: 'DataSite Technology',
        summary:
          'Android + Flutter: shared large datasets with backend, dependency injection with Dagger Hilt, optimized Room storage and built Jetpack Compose UI modules.',
      },
    ],
    contact: {
      title: "Let's build something",
      subtitle: 'Available for Flutter / Android roles and freelance projects.',
      copyright: 'Built with React.',
    },
  },

  ru: {
    nav: [
      { label: 'Приложения', href: '#apps' },
      { label: 'Обо мне', href: '#about' },
      { label: 'Стек', href: '#stack' },
      { label: 'Опыт', href: '#work' },
    ],
    ui: {
      hireMe: 'Нанять меня',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      available: 'Открыт к работе',
      exploreApps: 'Смотреть приложения',
      getInTouch: 'Связаться',
      viewOnStore: 'Открыть в App Store',
      visitSite: 'Открыть сайт',
    },
    hero: {
      lead: 'Я создаю',
      accent: 'Flutter',
      trail: 'приложения',
      tagline:
        'Flutter и Android разработчик. Создаю масштабируемые продакшн-приложения на Clean Architecture, DDD и реактивном управлении состоянием. Системы бронирования, платформы аренды и инструменты управления — в продакшене.',
    },
    // ПРИМ.: загрузки и средний рейтинг отсутствуют в резюме — оставлены как заглушки.
    stats: [
      { value: '6+', label: 'лет опыта' },
      { value: '14', label: 'приложений' },
      { value: '2M+', label: 'загрузок' },
      { value: '4.8', label: 'ср. рейтинг' },
    ],
    appsSection: {
      title: 'Проекты',
      subtitle: 'Подборка того, что я выпустил.',
    },
    // Рейтинги взяты из App Store; у приложений без отзывов рейтинг не показывается.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Маркетплейс авто',
        rating: '4.6',
        description:
          'Автомаркетплейс Узбекистана: поиск, фильтры и сравнение до 20 автомобилей, публикация и продвижение объявлений, каталог дилеров — плюс страхование, зарядки для электромобилей и вертикальная видеолента.',
      },
      {
        id: 'aiacademy',
        name: 'Ovoz — AI Academy',
        category: 'Образование / LMS',
        description:
          'LMS-приложение AI Academy (Ташкент) с четырьмя ролями — админ, ментор, студент и аннотатор — и записью голоса студентами для узбекского TTS/STT-корпуса.',
      },
      {
        id: 'csogboard',
        name: 'CSOG Board',
        category: 'Канбан для команд',
        description:
          'Мобильный канбан для команд: доски с WIP-лимитами и перетаскиванием карточек, чек-листы, комментарии с @упоминаниями и вложения, статистика для руководителя — плюс SMS-уведомления о назначениях, сроках и ежедневный дайджест.',
      },
      {
        id: 'himaya',
        name: 'Himaya',
        category: 'Страхование устройств',
        description:
          'Платформа страхования смартфонов для Узбекистана: агенты регистрируют устройства с проверкой IMEI и фото/видеофиксацией состояния, сервисные сотрудники оценивают страховые случаи и запускают выплаты.',
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Запись к барберам',
        rating: '4.6',
        description:
          'Двусторонний маркетплейс барбер-записи: клиенты находят барбершопы на карте и записываются, а барберы управляют расписанием, клиентской базой, SMS-напоминаниями и статистикой дохода.',
      },
      {
        id: 'yuktashish',
        name: 'YukTashish',
        category: 'Логистика / доставка',
        description:
          'Приложение грузоперевозок для Узбекистана: точки погрузки и доставки на карте, выбор транспорта и типа груза, живое отслеживание водителя и чат в реальном времени.',
      },
      {
        id: 'yuktashishpro',
        name: 'YukTashish Pro',
        category: 'Логистика / для водителей',
        description:
          'Приложение водителя платформы YukTashish: приём заказов, пошаговый процесс доставки, трансляция геопозиции, кошелёк и карты для выплат, чат с клиентами.',
      },
      {
        id: 'shukrona',
        name: 'Shukrona Academy',
        category: 'Образование / e-learning',
        description:
          'Закрытая образовательная платформа для специалистов по РАС: видеокурсы с уроками, тесты знаний, отслеживание прогресса и сертификаты.',
      },
      {
        id: 'olbilet',
        name: 'OlBilet',
        category: 'Билеты на события',
        description:
          'Приложение платформы olbilet.uz — концерты, театр, спорт и кино в Узбекистане: выбор мест на интерактивной карте зала с бронированием в реальном времени, оплата картой и QR + PDF билеты.',
      },
    ],
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Я Qobil — Flutter и Android разработчик. Фокус на масштабируемой архитектуре, чистом коде и надёжной интеграции API.',
        'Создаю кроссплатформенные мобильные продукты от и до: Clean Architecture и DDD, реактивное управление состоянием через Bloc/Cubit и Provider, интеграция REST через Chopper и Retrofit, локальное хранение на Hive и Room. Выпустил несколько коммерческих приложений — системы бронирования, платформы аренды и инструменты управления. Ценю производительность, командную работу и постоянное развитие.',
      ],
    },
    stackSection: {
      title: 'Мой стек',
    },
    experienceSection: {
      title: 'Опыт',
    },
    experience: [
      {
        period: '2024 — сейчас',
        role: 'Flutter разработчик',
        company: 'Auto.uz',
        summary:
          'Мигрировал модули сравнения и главного экрана на v2 API с типизированными ошибками и bulk-merge после логина; Bloc/Cubit + freezed, Firebase, push и Yandex Maps с локализацией uz/ru/en.',
      },
      {
        period: '2023',
        role: 'Flutter разработчик',
        company: 'Ubarber',
        summary:
          'Масштабируемая архитектура на Domain-Driven Design, управление состоянием через Bloc и Provider, интеграция API через Chopper и Retrofit.',
      },
      {
        period: '2022 — 23',
        role: 'Software Engineer',
        company: 'DataSite Technology',
        summary:
          'Android + Flutter: работа с большими датасетами и backend, dependency injection через Dagger Hilt, оптимизация Room и UI-модули на Jetpack Compose.',
      },
    ],
    contact: {
      title: 'Давайте что-нибудь построим',
      subtitle: 'Открыт к позициям Flutter / Android и фриланс-проектам.',
      copyright: 'Сделано на React.',
    },
  },
}
