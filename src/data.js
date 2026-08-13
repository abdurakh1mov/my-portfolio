/**
 * Single source of truth for all site content.
 *
 * Text lives under `content.en` / `content.ru` so the whole site is bilingual.
 * Language-agnostic bits (name, email, links, gradients) live once and are
 * shared across both languages.
 */

import aiacademyLogo from './assets/aiacademy-logo.png'

/* ---- Language-agnostic profile & links ---- */
export const profile = {
  name: 'Qobil Abduraximov',
  brand: 'qobil',
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
  rentaBusiness: 'linear-gradient(135deg, #38bdf8, #5eead4)',
  topmaster: 'linear-gradient(135deg, #c084fc, #5eead4)',
  dachaturizm: 'linear-gradient(135deg, #5eead4, #38bdf8)',
  posox: 'linear-gradient(135deg, #5eead4, #c084fc)',
}

/* Real app-icon logos, keyed by project id. Cards fall back to the gradient above. */
export const appLogos = {
  aiacademy: aiacademyLogo,
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
    // Per-app star ratings aren't on the résumé — kept as mock/placeholder values.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Car marketplace',
        rating: '4.8',
        description:
          'Marketplace where dealers and private sellers post listings; buyers search, filter, favorite and compare up to 20 cars.',
      },
      {
        id: 'aiacademy',
        name: 'AI Academy',
        category: 'Education / LMS',
        rating: '4.8',
        description:
          'LMS app for AI Academy (Tashkent) serving four roles — admin, mentor, student and annotator — with a student voice-recording flow that builds an Uzbek TTS/STT speech corpus.',
      },
      {
        id: 'rentaBusiness',
        name: 'Renta Business',
        category: 'Fleet management',
        rating: '4.6',
        description:
          'For car owners: add vehicles, approve or reject requests, manage trips and track a balance dashboard.',
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Barber booking',
        rating: '4.9',
        description:
          'Book barbers in real time, view services and portfolios, and schedule with a calendar-based flow.',
      },
      {
        id: 'dachaturizm',
        name: 'DachaTurizm',
        category: 'Cottage rentals',
        rating: '4.7',
        description:
          'Owners publish summer cottages with photos, pricing and availability; renters search and browse detailed pages.',
      },
      {
        id: 'posox',
        name: 'Posox',
        category: 'Store management',
        rating: '4.6',
        description:
          'Business tool to track inventory, manage orders and monitor sales — with barcode scanning and dashboards.',
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
    // Рейтинги приложений отсутствуют в резюме — оставлены как заглушки.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Маркетплейс авто',
        rating: '4.8',
        description:
          'Дилеры и частные продавцы публикуют объявления; покупателям — поиск, фильтры, избранное и сравнение до 20 автомобилей.',
      },
      {
        id: 'aiacademy',
        name: 'AI Academy',
        category: 'Образование / LMS',
        rating: '4.8',
        description:
          'LMS-приложение AI Academy (Ташкент) с четырьмя ролями — админ, ментор, студент и аннотатор — и записью голоса студентами для узбекского TTS/STT-корпуса.',
      },
      {
        id: 'rentaBusiness',
        name: 'Renta Business',
        category: 'Управление автопарком',
        rating: '4.6',
        description:
          'Для владельцев авто: добавление машин, приём и отклонение заявок, управление поездками и панель баланса.',
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Запись к барберам',
        rating: '4.9',
        description:
          'Онлайн-запись к барберам, просмотр услуг и портфолио, удобное расписание на основе календаря.',
      },
      {
        id: 'dachaturizm',
        name: 'DachaTurizm',
        category: 'Аренда дач',
        rating: '4.7',
        description:
          'Хозяева публикуют дачи с фото, ценой и доступностью; арендаторам — поиск и детальные карточки объектов.',
      },
      {
        id: 'posox',
        name: 'Posox',
        category: 'Управление магазином',
        rating: '4.6',
        description:
          'Бизнес-инструмент для учёта товаров, управления заказами и аналитики продаж — со сканированием штрихкодов и дашбордами.',
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
