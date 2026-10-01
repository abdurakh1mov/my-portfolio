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
  // Résumé PDF lives in `public/`; vite.config.js sets __RESUME_FILE__ to its
  // filename when the file exists, so the download buttons never point at a 404.
  resume: __RESUME_FILE__
    ? `${import.meta.env.BASE_URL}${__RESUME_FILE__}`
    : null,
  resumeFileName: __RESUME_FILE__,
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

/*
 * Store / web links, keyed by project id. Each entry may have `ios`,
 * `android` and/or `web` — cards render a badge per available link.
 * Missing `ios` = the app is still in App Store review.
 */
export const appLinks = {
  autouz: {
    ios: 'https://apps.apple.com/uz/app/auto-uz-avtomobillar-olami/id1670951057',
    android: 'https://play.google.com/store/apps/details?id=uz.auto.autouzapp',
  },
  aiacademy: {
    ios: 'https://apps.apple.com/us/app/ovoz-ai-academy/id6795569313',
    android: 'https://play.google.com/store/apps/details?id=uz.aiacademy.csog',
  },
  csogboard: {
    ios: 'https://apps.apple.com/us/app/csog-board/id6795915735',
    android: 'https://play.google.com/store/apps/details?id=uz.board.csog',
  },
  himaya: {
    ios: 'https://apps.apple.com/uz/app/himaya/id6796583412',
    android: 'https://play.google.com/store/apps/details?id=himayaapp.uz',
  },
  topmaster: {
    ios: 'https://apps.apple.com/uz/app/topmaster/id6502838564',
    android:
      'https://play.google.com/store/apps/details?id=com.nest_app.ubarber',
  },
  yuktashish: {
    ios: 'https://apps.apple.com/uz/app/yuktashish/id6768605504',
    android: 'https://play.google.com/store/apps/details?id=uz.yuktashi.csog',
  },
  yuktashishpro: {
    ios: 'https://apps.apple.com/uz/app/yuktashish-pro/id6768605769',
    android:
      'https://play.google.com/store/apps/details?id=uz.yuktashipro.csog',
  },
  shukrona: {
    ios: 'https://apps.apple.com/us/app/shukrona-academy-app/id6786992462',
    android:
      'https://play.google.com/store/apps/details?id=uz.shukrona.academy',
  },
  olbilet: {
    android: 'https://play.google.com/store/apps/details?id=uz.olbilet.mobile',
  },
}

/*
 * Tech stack, grouped. Group titles are translated under
 * `stackSection.groups` (keyed by id). Items are plain strings when the name
 * is the same in every language, or `{ en, ru }` when it differs.
 */
export const stack = [
  {
    id: 'mobile',
    items: ['Flutter', 'Dart', 'Android', 'Kotlin', 'Java', 'Jetpack Compose'],
  },
  {
    id: 'architecture',
    items: [
      'Clean Architecture',
      'Domain-Driven Design (DDD)',
      'MVVM',
      'BLoC',
      'Cubit',
      'Provider',
      'freezed',
    ],
  },
  {
    id: 'networking',
    items: ['REST APIs', 'Chopper', 'Retrofit', 'WebSocket'],
  },
  {
    id: 'di',
    items: ['get_it', 'injectable', 'Dagger Hilt', 'go_router'],
  },
  {
    id: 'data',
    items: [
      'Hive',
      'Room',
      'Firebase',
      'Yandex Maps',
      { en: 'Push Notifications', ru: 'Push-уведомления' },
    ],
  },
  {
    id: 'engineering',
    items: [
      'Git',
      'GitHub',
      { en: 'Code Reviews', ru: 'Код-ревью' },
      { en: 'API Migrations', ru: 'Миграции API' },
      { en: 'Localization', ru: 'Локализация' },
      { en: 'Debugging', ru: 'Отладка' },
      { en: 'Responsive UI', ru: 'Адаптивный UI' },
    ],
  },
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
      available: 'Available for remote opportunities worldwide',
      exploreApps: 'Explore apps',
      downloadResume: 'Download resume',
      getInTouch: 'Get in touch',
      linkAppStore: 'App Store',
      linkGooglePlay: 'Google Play',
      linkWebsite: 'Website',
    },
    // Rendered as "{lead}<br />{accent}{trail}" — `trail` carries its own
    // leading space / hyphen.
    hero: {
      lead: 'I build production',
      accent: 'Flutter',
      trail: ' apps',
      tagline:
        'Flutter & Android developer with 4+ years of software development experience, shipping production mobile apps for Android and iOS. Clean Architecture, DDD, BLoC/Cubit, REST APIs, realtime workflows, Firebase and native Android.',
    },
    // Only numbers the content below backs up: the featured apps listed here
    // and the product domains they cover.
    stats: [
      { value: '4+', label: 'years of experience' },
      { value: '9', label: 'production apps' },
      { value: '7', label: 'product domains' },
    ],
    appsSection: {
      title: 'Featured production apps',
      subtitle: "A selection of what I've shipped.",
    },
    // Ratings come from the App Store; apps without enough reviews yet show none.
    // `highlight` is the engineering note, `tags` the compact stack / concept chips.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Automotive Marketplace',
        rating: '4.6',
        description:
          "Uzbekistan's automotive marketplace for searching, filtering and comparing cars, publishing listings and browsing dealers, with additional insurance, EV-charging, fuel-station and vertical-video experiences.",
        highlight:
          'Migrated the comparison and home modules to REST API v2 with updated data models, typed errors and a post-login bulk merge, alongside push notifications and Uzbek/Russian/English localization.',
        tags: ['Flutter', 'BLoC/Cubit', 'freezed', 'Firebase', 'Yandex Maps'],
      },
      {
        id: 'aiacademy',
        name: 'Ovoz — AI Academy',
        category: 'Education / LMS',
        description:
          'LMS application for AI Academy supporting admin, mentor, student and annotator roles, including a student voice-recording workflow used to build an Uzbek TTS/STT speech corpus.',
        highlight:
          'Role-based flows for four user types, plus an in-app voice-recording workflow that feeds the speech corpus.',
        tags: ['Flutter', 'BLoC/Cubit', 'Firebase', 'REST APIs'],
      },
      {
        id: 'csogboard',
        name: 'CSOG Board',
        category: 'Team Task Board',
        description:
          'Mobile Kanban platform for teams with WIP limits, drag-and-drop cards, checklists, @mention comments, attachments, manager statistics and SMS notifications for assignments, deadlines and daily digests.',
        tags: ['Flutter', 'Kanban', 'Drag & drop', 'SMS notifications'],
      },
      {
        id: 'himaya',
        name: 'Himaya',
        category: 'Device Insurance',
        description:
          'Device-insurance platform for the Uzbek market with IMEI verification, photo/video device-condition capture, claim assessment and payout workflows.',
        tags: ['IMEI verification', 'Photo/video capture', 'Claims & payouts'],
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Barber Booking',
        rating: '4.6',
        description:
          'Two-sided barber booking marketplace where clients discover barbershops on a map and book appointments while barbers manage schedules, client records, SMS reminders and revenue statistics.',
        tags: ['Flutter', 'DDD', 'BLoC', 'Provider', 'Chopper', 'Retrofit'],
      },
      {
        id: 'yuktashish',
        name: 'YukTashish',
        category: 'Logistics / Delivery',
        description:
          'Cargo delivery application where customers select pickup and drop-off points on a map, choose vehicle and cargo types, track drivers live and communicate through realtime chat.',
        highlight:
          'Map-based pickup and drop-off selection with realtime flows over WebSocket: live driver tracking and in-app chat.',
        tags: [
          'Flutter',
          'Maps',
          'Live location',
          'WebSocket',
          'Realtime chat',
        ],
      },
      {
        id: 'yuktashishpro',
        name: 'YukTashish Pro',
        category: 'Logistics / Driver App',
        description:
          'Driver application for accepting delivery orders, completing a step-by-step delivery lifecycle, streaming live location, managing wallet and payout cards, and chatting with customers.',
        tags: ['Flutter', 'Live location', 'Delivery lifecycle', 'Wallet'],
      },
      {
        id: 'shukrona',
        name: 'Shukrona Academy',
        category: 'Education / E-learning',
        description:
          'Closed e-learning platform for specialists working with autism (ASD), including video courses, lessons, knowledge tests, progress tracking and certificates.',
        tags: ['Flutter', 'Video courses', 'Knowledge tests', 'Certificates'],
      },
      {
        id: 'olbilet',
        name: 'OlBilet',
        category: 'Event Ticketing',
        description:
          'Mobile ticketing application for concerts, theater, sports and cinema in Uzbekistan, with interactive venue seat selection, realtime seat holds, card payments and QR/PDF tickets.',
        highlight:
          'Custom interactive seat map: exact-seat selection on the venue plan, with seat holds kept in sync in realtime.',
        tags: [
          'Flutter',
          'Custom seat map',
          'Realtime seat holds',
          'QR/PDF tickets',
        ],
      },
    ],
    about: {
      title: 'About me',
      paragraphs: [
        'Flutter Developer with 4+ years of software development experience building and shipping production mobile applications for Android and iOS. Experienced with BLoC/Cubit, Clean Architecture, Domain-Driven Design, REST APIs, realtime WebSocket workflows, Firebase, local persistence, and native Android development.',
        'Built commercial products across automotive marketplaces, logistics, education, ticketing, booking, insurance, and team-management domains. Comfortable collaborating with backend engineers, evolving API contracts and data models, debugging production features, and delivering maintainable cross-platform experiences.',
      ],
    },
    stackSection: {
      title: 'Tech stack',
      groups: {
        mobile: 'Mobile Development',
        architecture: 'Architecture & State Management',
        networking: 'Networking & APIs',
        di: 'Dependency Injection & Navigation',
        data: 'Data & Platform Services',
        engineering: 'Engineering',
      },
    },
    experienceSection: {
      title: 'Experience',
    },
    experience: [
      {
        period: 'March 2026 – Present',
        role: 'Flutter Developer',
        company: 'CSOG',
        highlights: [
          'Build production mobile products end to end across education, logistics, team collaboration, and ticketing.',
          'Use BLoC/Cubit, go_router, get_it/injectable, WebSocket realtime flows, and Firebase across multiple applications.',
          'Delivered Ovoz — AI Academy, CSOG Board, YukTashish / YukTashish Pro, Shukrona Academy, and OlBilet, including a custom interactive seat-map flow.',
        ],
      },
      {
        period: 'February 2026 – Present',
        role: 'Flutter Developer',
        company: 'Auto.uz',
        highlights: [
          'Migrated comparison and home modules to API v2 with updated data models, typed errors, and post-login bulk merge.',
          'Build and maintain marketplace features using BLoC/Cubit + freezed, Firebase, push notifications, Yandex Maps, and Uzbek/Russian/English localization.',
        ],
      },
      {
        period: 'June 2024 – May 2025',
        role: 'Flutter Developer',
        company: 'TopMaster Tech',
        highlights: [
          'Built scalable architecture using Domain-Driven Design.',
          'Managed application state with BLoC and Provider.',
          'Integrated backend APIs using Chopper and Retrofit for a two-sided barber booking marketplace.',
        ],
      },
      {
        period: 'October 2022 – May 2024',
        role: 'Android Developer',
        company: 'DataSite Technology',
        highlights: [
          'Developed native Android functionality using Kotlin.',
          'Built Jetpack Compose UI modules.',
          'Handled large data flows between Android clients and backend services.',
          'Used Dagger Hilt for dependency injection.',
          'Optimized local persistence using Room.',
        ],
      },
    ],
    contact: {
      title: "Let's build something",
      subtitle:
        'Available for remote Flutter / Mobile Engineer roles worldwide and freelance projects.',
      location: 'Tashkent, Uzbekistan',
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
      available: 'Открыт к удалённой работе по всему миру',
      exploreApps: 'Смотреть приложения',
      downloadResume: 'Скачать резюме',
      getInTouch: 'Связаться',
      linkAppStore: 'App Store',
      linkGooglePlay: 'Google Play',
      linkWebsite: 'Сайт',
    },
    hero: {
      lead: 'Я создаю продакшн',
      accent: 'Flutter',
      trail: '-приложения',
      tagline:
        'Flutter- и Android-разработчик с опытом разработки ПО более 4 лет: выпускаю продакшн-приложения для Android и iOS. Clean Architecture, DDD, BLoC/Cubit, REST API, realtime-сценарии, Firebase и нативная Android-разработка.',
    },
    // Только цифры, подтверждённые контентом ниже: приложения из списка
    // и продуктовые направления, которые они покрывают.
    stats: [
      { value: '4+', label: 'лет опыта' },
      { value: '9', label: 'приложений в продакшене' },
      { value: '7', label: 'продуктовых направлений' },
    ],
    appsSection: {
      title: 'Приложения в продакшене',
      subtitle: 'Подборка того, что я выпустил.',
    },
    // Рейтинги взяты из App Store; у приложений без отзывов рейтинг не показывается.
    apps: [
      {
        id: 'autouz',
        name: 'Auto.uz',
        category: 'Автомобильный маркетплейс',
        rating: '4.6',
        description:
          'Автомобильный маркетплейс Узбекистана: поиск, фильтрация и сравнение автомобилей, публикация объявлений и каталог дилеров, а также страхование, зарядные станции для электромобилей, АЗС и вертикальные видео.',
        highlight:
          'Перевёл модули сравнения и главного экрана на REST API v2: обновлённые модели данных, типизированные ошибки и bulk-merge после входа, а также push-уведомления и локализация на узбекский, русский и английский.',
        tags: ['Flutter', 'BLoC/Cubit', 'freezed', 'Firebase', 'Yandex Maps'],
      },
      {
        id: 'aiacademy',
        name: 'Ovoz — AI Academy',
        category: 'Образование / LMS',
        description:
          'LMS-приложение AI Academy с ролями администратора, ментора, студента и аннотатора, включая запись голоса студентами для формирования узбекского речевого корпуса TTS/STT.',
        highlight:
          'Ролевые сценарии для четырёх типов пользователей и запись голоса в приложении, пополняющая речевой корпус.',
        tags: ['Flutter', 'BLoC/Cubit', 'Firebase', 'REST API'],
      },
      {
        id: 'csogboard',
        name: 'CSOG Board',
        category: 'Канбан-доска для команд',
        description:
          'Мобильная канбан-платформа для команд: WIP-лимиты, перетаскивание карточек, чек-листы, комментарии с @упоминаниями, вложения, статистика для руководителей и SMS-уведомления о назначениях, дедлайнах и ежедневных дайджестах.',
        tags: ['Flutter', 'Канбан', 'Drag & drop', 'SMS-уведомления'],
      },
      {
        id: 'himaya',
        name: 'Himaya',
        category: 'Страхование устройств',
        description:
          'Платформа страхования устройств для рынка Узбекистана: проверка IMEI, фото- и видеофиксация состояния устройства, оценка страховых случаев и выплаты.',
        tags: ['Проверка IMEI', 'Фото- и видеофиксация', 'Страховые выплаты'],
      },
      {
        id: 'topmaster',
        name: 'TopMaster',
        category: 'Запись к барберам',
        rating: '4.6',
        description:
          'Двусторонний маркетплейс записи к барберам: клиенты находят барбершопы на карте и записываются на приём, а барберы управляют расписанием, клиентской базой, SMS-напоминаниями и статистикой доходов.',
        tags: ['Flutter', 'DDD', 'BLoC', 'Provider', 'Chopper', 'Retrofit'],
      },
      {
        id: 'yuktashish',
        name: 'YukTashish',
        category: 'Логистика / доставка',
        description:
          'Приложение для грузоперевозок: клиенты выбирают точки погрузки и выгрузки на карте, тип транспорта и груза, отслеживают водителя в реальном времени и общаются в realtime-чате.',
        highlight:
          'Выбор точек погрузки и выгрузки на карте и realtime-сценарии через WebSocket: живое отслеживание водителя и чат в приложении.',
        tags: [
          'Flutter',
          'Карты',
          'Живая геолокация',
          'WebSocket',
          'Realtime-чат',
        ],
      },
      {
        id: 'yuktashishpro',
        name: 'YukTashish Pro',
        category: 'Логистика / приложение водителя',
        description:
          'Приложение для водителей: приём заказов на доставку, пошаговый цикл доставки, трансляция геопозиции в реальном времени, управление кошельком и картами для выплат, чат с клиентами.',
        tags: ['Flutter', 'Живая геолокация', 'Цикл доставки', 'Кошелёк'],
      },
      {
        id: 'shukrona',
        name: 'Shukrona Academy',
        category: 'Образование / e-learning',
        description:
          'Закрытая e-learning-платформа для специалистов, работающих с аутизмом (РАС): видеокурсы, уроки, тесты знаний, отслеживание прогресса и сертификаты.',
        tags: ['Flutter', 'Видеокурсы', 'Тесты знаний', 'Сертификаты'],
      },
      {
        id: 'olbilet',
        name: 'OlBilet',
        category: 'Билеты на мероприятия',
        description:
          'Мобильное приложение для покупки билетов на концерты, в театр, на спорт и в кино в Узбекистане: интерактивный выбор мест на схеме зала, удержание мест в реальном времени, оплата картой и билеты в формате QR/PDF.',
        highlight:
          'Собственная интерактивная схема зала: выбор конкретных мест на плане площадки с синхронизацией удержания мест в реальном времени.',
        tags: ['Flutter', 'Схема зала', 'Удержание мест', 'QR/PDF-билеты'],
      },
    ],
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Flutter-разработчик с опытом разработки ПО более 4 лет: создаю и выпускаю продакшн-приложения для Android и iOS. Работаю с BLoC/Cubit, Clean Architecture, Domain-Driven Design, REST API, realtime-сценариями на WebSocket, Firebase, локальным хранением данных и нативной Android-разработкой.',
        'Создавал коммерческие продукты в сферах автомобильных маркетплейсов, логистики, образования, продажи билетов, бронирования, страхования и управления командами. Уверенно взаимодействую с backend-инженерами, развиваю API-контракты и модели данных, отлаживаю продакшн-функциональность и создаю поддерживаемые кроссплатформенные решения.',
      ],
    },
    stackSection: {
      title: 'Технологический стек',
      groups: {
        mobile: 'Мобильная разработка',
        architecture: 'Архитектура и управление состоянием',
        networking: 'Сеть и API',
        di: 'Внедрение зависимостей и навигация',
        data: 'Данные и платформенные сервисы',
        engineering: 'Инженерные практики',
      },
    },
    experienceSection: {
      title: 'Опыт',
    },
    experience: [
      {
        period: 'Март 2026 – настоящее время',
        role: 'Flutter-разработчик',
        company: 'CSOG',
        highlights: [
          'Создаю продакшн мобильные продукты от и до в сферах образования, логистики, командной работы и продажи билетов.',
          'Использую BLoC/Cubit, go_router, get_it/injectable, realtime-сценарии на WebSocket и Firebase в нескольких приложениях.',
          'Выпустил Ovoz — AI Academy, CSOG Board, YukTashish / YukTashish Pro, Shukrona Academy и OlBilet, включая собственный сценарий с интерактивной схемой зала.',
        ],
      },
      {
        period: 'Февраль 2026 – настоящее время',
        role: 'Flutter-разработчик',
        company: 'Auto.uz',
        highlights: [
          'Перевёл модули сравнения и главного экрана на API v2: обновлённые модели данных, типизированные ошибки и bulk-merge после входа.',
          'Разрабатываю и поддерживаю функциональность маркетплейса: BLoC/Cubit + freezed, Firebase, push-уведомления, Yandex Maps и локализация на узбекский, русский и английский.',
        ],
      },
      {
        period: 'Июнь 2024 – май 2025',
        role: 'Flutter-разработчик',
        company: 'TopMaster Tech',
        highlights: [
          'Построил масштабируемую архитектуру на основе Domain-Driven Design.',
          'Управлял состоянием приложения с помощью BLoC и Provider.',
          'Интегрировал backend API через Chopper и Retrofit для двустороннего маркетплейса записи к барберам.',
        ],
      },
      {
        period: 'Октябрь 2022 – май 2024',
        role: 'Android-разработчик',
        company: 'DataSite Technology',
        highlights: [
          'Разрабатывал нативную Android-функциональность на Kotlin.',
          'Создавал UI-модули на Jetpack Compose.',
          'Работал с большими потоками данных между Android-клиентами и backend-сервисами.',
          'Использовал Dagger Hilt для внедрения зависимостей.',
          'Оптимизировал локальное хранение данных с помощью Room.',
        ],
      },
    ],
    contact: {
      title: 'Давайте что-нибудь построим',
      subtitle:
        'Открыт к удалённым позициям Flutter / Mobile Engineer по всему миру и фриланс-проектам.',
      location: 'Ташкент, Узбекистан',
      copyright: 'Сделано на React.',
    },
  },
}
