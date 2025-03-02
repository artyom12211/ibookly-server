import { Studio } from "./entities/studio.entity";

export const mockStudios: Studio[] = [
  {
    id: 1,
    createdAt: new Date('2025-01-31T18:43:51.446Z'),
    updatedAt: new Date('2025-01-31T18:43:51.446Z'),
    title: 'Six Gemini Studio',
    description:
      'Фотостудия Six Gemini Studio не похожа на других, мы умеем очаровывать и удивлять не масштабами, просторами и чрезмерной функциональностью, но своим собственным стилем, смелым сочетанием цветовых решений, фактур, текстур и мебели. Атмосфера и интерьер каждого из залов уникальны, количество декора, мобильная мебель и различные цвета дают возможности каждой локации с приходом нового гостя становится совершенно новым, другим помещением. Приоритетами, заложенными в основу концепции фотостудии, являются высокий уровень сервиса, эстетика, разнообразность и внимание к мелочам. Мы как никто другой понимаем, как тяжело порой бывает добираться до фотостудий, поэтому считаем одним из наших преимуществ — удобную транспортную доступность. Мы находимся в 7 минутах ходьбы от метро Багратионовская и в 10 минутах от метро Парк Победы в ЖК «Матч Поинт». На протяжении всей улицы, где находится наша фотостудия, расположена бесплатная городская парковка. В ЖК «Матч Поинт» также есть подземная платная парковка, забронировать и оплатить машиноместо вы можете на сайте.',
    address: 'Ул. Василисы Кожиной, 13',
    metro: 'Багратионовская',
    workhours: [10, 20],
    total_square: 142,
    shooting_square: 75,
    price_range: [1800, 5000],
    rooms: 3,
    height: 4,
    phone: '+7 (999) 821-23-62',
    telegram_channel: 'https://t.me/SixGeminiStudio',
    telegram_contact: null,
    ref: 'https://www.studiorent.ru/studios/157702/157746/',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/1.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/2.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/3.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/4.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/5.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/6.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/2/7.jpg',
    ],
    activated: true,
  },

  {
    id: 2,
    createdAt: new Date('2025-01-31T18:56:30.105Z'),
    updatedAt: new Date('2025-01-31T18:56:30.105Z'),
    title: 'One Take Studio',
    description:
      'Стильная светлая студия.\n\nУ метро Нагатинская:\n\n— Четыре уютных зала у метро Нагатинская с большим количеством естественного света.\n\n— Два зала с циклорамой, оборудование Profoto, доступен в аренду Aputure LS 300X, Godox, большой выбор бумажных, тканевых фонов и художественных холстов для ваших съемок.\n\n— В залах есть кондиционеры. :)',
    address: 'Варшавское шоссе 33 стр 13',
    metro: 'Нагатинская',
    workhours: [0, 24],
    total_square: 258,
    shooting_square: 400,
    price_range: [2300, 2700],
    rooms: 4,
    height: 4,
    phone: '+7 958 636 74 97',
    telegram_channel: 'https://t.me/onetakestudio_moscow',
    telegram_contact: null,
    ref: 'https://www.studiorent.ru/studios/116725/116741/',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upld0L5wvO.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upld2rTM6V.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upld3dMsp2.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upld4ejYYN.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upld29ujTO.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldAkJulr.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/uplddKgI2N.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldDT8KBM.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldT2l0nU.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldU5951R.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldV97bxT.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/3/upldXIPhj7.jpg',
    ],
    activated: true,
  },
  
  {
    id: 3,
    createdAt: new Date('2025-02-01T12:37:35.933Z'),
    updatedAt: new Date('2025-02-01T12:37:35.933Z'),
    title: 'Studio 3XL',
    description:
      'STUDIO 3XL — это профессиональная киностудия под любые задачи!\n700 кв.м. в Вашем распоряжении.\nВ нашей киностудии на 700кв.м. во время съёмки находится исключительно одна съёмочная группа!\n\nбольшая площадь студии и сосредоточение только на вашем съёмочном процессе\nзапись чистого звука !\n\nРазрешается:\n— музыкальное сопровождение\n— работа дым. машин\n— строительство декораций\n— временное хранение декораций\n\nУ нас:\n— 3 больших кино-зоны\n— Гримёрная на 15 человек\n— Душевая\n— Электричество 220v / 380v\n— Опускающиеся фермы\n— Своя парковка\n\nСтудия имеет 3 больших кино-зоны:\n\n1. Чёрный павильон 300 кв.м, высота 8м.\nХарактеристики:\n\nПлощадь: 300 кв.м.\nВысота: 8м.\nПол: ровный бетон, краска антипыль\nФермы опускающиеся, нагрузка до 1т.\nРозетки 220(В) и 380 (В)\n\n2. Зелёная и белая циклорама.\nОдна из самых больших циклорам в Москве.\nХарактеристики:\n\nРазмеры циклорамы: 8м. х 16м. х 8м.\nРазмеры каждой циклорамы: 8м. х 8м.\nВысота: 5,5м.\nФермы опускающиеся, нагрузка до 1т.\nРозетки 220(В) и 380 (В)\nОсвещение: RedDevil 4x4 (KinoFlo 4x4)\n\nГримёрная комната.\nХарактеристики:\n\nПлощадь: 27 кв.м.\nВместительность: 15 человек\nИмеется: 3 зеркала, 3х метровый раскладной диван, большой комфортный офисный стол, кулер, микроволновая печь, две примерочные.',
    address: 'шоссе Энтузиастов, 31с50',
    metro: 'Шоссе Энтузиастов',
    workhours: [0, 24],
    total_square: 455,
    shooting_square: 700,
    price_range: [1500, 5000],
    rooms: 5,
    height: 3,
    phone: '+79228778033',
    telegram_channel: 'https://t.me/+79228778033',
    telegram_contact: null,
    ref: 'https://www.studiorent.ru/studios/155024',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldCJo21p.jpeg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldFdeFqf.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldhl69q8.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldinleKA.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldQcihb7.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldR6QPqn.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/4/upldWeFwkA.jpeg',
    ],
    activated: true,
  },
  
  {
    id: 4,
    createdAt: new Date('2025-02-01T12:40:56.623Z'),
    updatedAt: new Date('2025-02-01T12:40:56.623Z'),
    title: 'Фотостудия Москва',
    description:
      'Описание фотостудии Москва\n\nФотостудия «Москва» — арт-пространство площадью 2 600 квадратных метров, состоящее из 27 съемочных локаций.\nВсе залы фотостудии выполнены в различных интерьерных концепциях и стилистиках с использованием многообразия предметов интерьера.\nВ нашей студии присутствуют залы как с прямыми солнечными лучами, так и с обилием рассеянного естественного света, предоставляя выбор на любой вкус и под любой формат.\nЦиклорамы, профессиональные источники Profoto и Hensel, постоянный свет Aputure, стойки и флаги на колесиках, разнообразие светоформирующих насадок и отражателей оказывают предельно благоприятное воздействие на рабочий процесс.\nФотостудия обладает огромной коллекцией цветных бумажных и тканевых фонов, основная часть которой размещена в студии на Кристалле. Фактурные дизайнерские стены залов оформлены по собственным наработкам и стали фирменным атрибутом нашего проекта.\nВсе предметы интерьера легко передвигаются, благодаря чему вы можете трансформировать пространство в интересах проводимой фото- или видеосъемки.\nПомимо фотосъемок в наших залах представлены студии для видеосъёмок, которые также прекрасно подходят для проведения различного рода мероприятий, ивентов и событий.\nВ зонах ресепшн расположены гримерные столики и просторные зоны ожидания с диванами. Ожидание съемки можно скрасить зерновым кофе. В помещениях студии действует бесплатный Wi-Fi.',
    address: 'ул. Электрозаводская, 21, 3-й этаж, пом. 355',
    metro: 'Электрозаводская',
    workhours: [0, 24],
    total_square: 1995,
    shooting_square: 2600,
    price_range: [1200, 3800],
    rooms: 4,
    height: 24,
    phone: '+7 495 117 97 61',
    telegram_channel: 'https://t.me/moscowphotostudios',
    telegram_contact: null,
    ref: 'https://www.studiorent.ru/studios/38247',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upld4kRN5R.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upld5uJsiw.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upld5YEx9s.jpeg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldevElQv.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldHIxuop.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldj9ULZp.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldJdyteR.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldjh7Ivx.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldKPmGHB.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldNsUPMR.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/5/upldPKuhYq.jpg',
    ],
    activated: true,
  },

  {
    id: 5,
    createdAt: new Date('2025-02-02T08:53:20.488Z'),
    updatedAt: new Date('2025-02-02T08:53:20.488Z'),
    title: 'PHOTO ZALL',
    description: `Описание фотостудии PHOTO ZALL
Фотостудия «PHOTO ZALL» — это 3 интерьерных зала с панорамными окнами, циклорамой, профессиональным оборудованием Godox и минималистичным интерьером.
Солнечная сторона, солнечный свет с 10:00 до 16:00 во всех залах. Трендовая мебель из букле и в стиле лофт. Тканевые и цветные фоны в аренду!
Импульсный и постоянный свет godox + маски Гобо. Бесплатная парковка. Грузовой лифт. Wi-Fi. Ближайшее метро: м.ВДНХ, м.Марьина Роща. Оплата картой / по QR-коду. ПОСЛЕ 18:00 СТОИМОСТЬ АРЕНДЫ ЗАЛОВ -20%
WhatsApp 8 9251976532. ВХОД В ЗДАНИЕ СТРОГО ПО ОРИГИНАЛУ ПАСПОРТА (По фото с телефона не пустят)`,
    activated: true,
    address: 'улица Академика Королева 13 стр1',
    metro: 'Марьина Роща',
    phone: '+79251976532',
    price_range: [1700, 2600],
    ref: 'https://www.studiorent.ru/studios/163425',
    telegram_channel: 'https://t.me/Photo_zall_studio',
    telegram_contact: 'https://t.me/Photo_zall_studio', // Предположение, так как в данных одна ссылка
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldKIPmel.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldr2QMMO.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldSdzXVa.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldYD8lVf.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld2K8Qqe.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld4JkMWb.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld5vWGst.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld9u9Lq9.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldD61yFv.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldgJ0uXi.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldI3Rinf.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldi6lUDo.jpg',
    ],
    height: 3,           // Интерпретирую как рейтинг
    rooms: 3,            // Интерпретирую как количество отзывов
    shooting_square: 158,
    total_square: 103,
    workhours: [9, 24],
  },

  {
    id: 6,
    createdAt: new Date('2025-02-02T08:56:11.453Z'),
    updatedAt: new Date('2025-02-02T08:56:11.453Z'),
    title: 'Upline Studio',
    description: `Описание фотостудии Upline Studio
Upline Space — двухэтажная неоновая фотостудия
Добро пожаловать в современную фотостудию с уникальным стилем! 
Наша студия — это идеальное пространство для создания профессиональных фото- и видеоматериалов. Большие окна наполняют помещение естественным светом, а уникальная неоновая подсветка добавляет стиль и атмосферу вашим съемкам.
Что мы предлагаем:
Простор и свет: Высокие потолки (6 метров) и панорамные окна создают яркое и комфортное пространство для любых задумок.
Креативные решения: Современная неоновая подсветка добавит вашим кадрам индивидуальность и характер.
Комфорт: Уютная зона для отдыха и подготовки, где можно расслабиться или обсудить идеи.
Удобное расположение: Легкий доступ для вашей команды и клиентов и парковка.
Блэк-аут шторы: Полный контроль над освещением для идеальных результатов съемки
Наша студия подходит для фотосессий, видеосъемок, предметок, подкастов, рекламных проектов и творческих экспериментов.
Забронируйте время заранее и воплотите свои идеи в жизнь! Мы создадим все условия для вашего комфорта и вдохновения.
С нами каждый кадр становится шедевром!`,
    activated: true,
    address: 'ул. Правды, д. 24, стр. 3, офис 11',
    metro: 'Савеловская',
    phone: '',
    price_range: [2500, 3000],
    ref: 'https://www.studiorent.ru/studios/186359',
    telegram_channel: 'https://t.me/uplinespace',
    telegram_contact: 'https://t.me/uplinespace', // Одна ссылка в данных
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upld4MwBH9.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldaJJxeq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldmjh3we.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldmNvOcq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldow6IOp.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldrfGPtC.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldU80JvY.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldUcVnND.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldVnyeXm.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldX16y7c.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldYPqO8X.jpg',
    ],
    height: 6,           // Рейтинг
    rooms: 1,            // Количество отзывов
    shooting_square: 105,
    total_square: 105,
    workhours: [0, 24],
  },

  {
    id: 7,
    createdAt: new Date('2025-02-02T09:03:49.772Z'),
    updatedAt: new Date('2025-02-02T09:03:49.772Z'),
    title: 'WAVE studio',
    description: `Описание фотостудии WAVE studio
Фотостудия Wave — пространство, где можно снять зал на несколько часов или на день под фотосессию, видео съёмки, мастер-классы, тренинги. Это целый мир для творчества, раскинувшийся на обширной площади в 630 м2. 7 разнообразных залов и уютной гримерки на 5 мест, доступных для аренды, студия предлагает уникальную возможность реализовать самые смелые фото и видео проекты. Одно из ключевых преимуществ аренды фотостудии Wave — это естественный свет. Благодаря тому, что студия занимает весь этаж, солнце освещает различные залы в течение всего дня. Это идеально подходит для фотосессий с использованием естественного света. Для тех, кто предпочитает контролируемый искусственный свет, залы оборудованы профессиональными источниками импульсного света Profoto d1, дополнительно можно арендовать постоянный свет Aputure-300, Amaran-300, Godox-150. Все это делает фотостудию Wave идеальным местом как для фотографий с естественным освещением, так и для работы со светом.
Цены указаны от 2 х. часов бронирования зала — цена только одного часа может отличаться и происходит через администратора студии.`,
    activated: true,
    address: '2-я улица Измайловского Зверинца, д. 2',
    metro: 'Измайлово (МЦК)',
    phone: '+79150127722',
    price_range: [800, 2400],
    ref: 'https://www.studiorent.ru/studios/174157',
    telegram_channel: 'https://t.me/wavephotostudios',
    telegram_contact: 'https://t.me/wavephoto',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upld6rbgAU.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upld55AaTS.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldduyvkx.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldE1GpXr.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldElKwNK.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldjsOvoS.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldO9NAKu.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldOGLQTs.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldX68nqM.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldxJH5CA.jpg',
    ],
    height: 3,
    rooms: 7,
    shooting_square: 491,
    total_square: 630,
    workhours: [0, 24],
  },

  {
    id: 8,
    createdAt: new Date('2025-02-03T19:04:36.043Z'),
    updatedAt: new Date('2025-02-03T19:04:36.043Z'),
    title: 'Unicorn Studios',
    description: `Описание фотостудии Unicorn Studios
Фотостудия Unicorn Studios это пространство из 6х залов
Наша студия подойдет под каждую задачу и идею настоящего творческого человека! Идеально подходит для: портретной и контентной съёмки. Для съёмки каталогов одежды и аксессуаров для выхода на маркетплейсы. Креативной съёмки с использованием проектора и неоновых ламп. интерьерной и семейной съёмки.
Посмотрите каждый зал и выберете подходящий под вашу идею!`,
    activated: true,
    address: 'Дмитровское шоссе, д. 62к2, Svet',
    metro: 'Верхние Лихоборы',
    phone: '+74951084290',
    price_range: [700, 2800],
    ref: 'https://www.studiorent.ru/studios/158022',
    telegram_channel: 'https://t.me/studios_unicorn',
    telegram_contact: 'https://t.me/studios_unicorn', // Одна ссылка в данных
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld4oW1k1.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld5dh0qO.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld5IPOk6.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/uplda8N1UL.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldCEvyoE.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldDbBYPx.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldeYKZQw.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldh1sLud.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldIlYxEq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldoPNgdv.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldsXuGN2.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/uplduBprCA.jpeg',
    ],
    height: 3,
    rooms: 6,
    shooting_square: 340,
    total_square: 500,
    workhours: [6, 24],
  },

  {
    id: 9,
    createdAt: new Date('2025-02-03T19:08:48.539Z'),
    updatedAt: new Date('2025-02-03T19:08:48.539Z'),
    title: 'Sunside',
    description: `— Семь светлых залов
— 3 циклорамы 6.5х4.5м, 4х6м, 4х7.5м
— Потолочные анкера (выдерживает нагрузку до 50кг на каждый) над циклорамой в зале Milk, Stone
— Трехфазная нагрузка 380 V (16/32) залы Milk, Stone
— Кондиционер в каждом зале
— Современный минимализм
— Контепорари, ваби саби
— Аренда от 1 часа
— Естественный свет, панорамные окна
— Оборудование Profoto D2, Aputure, Godox
— Автоматизированная, платная система хранения вещей
Стоимость аренды:
Зал Nude – 2 200р./час
Зал Brash – 2 300р./час
Зал MILK – 2 500р./час
Зал STONE – 2 700р./час
Зал SHELL – 2 700р./час
Зал JAZZ – 3 200р./час
Зал WOOD — 2700р./час
Дополнительно:
— вентилятор
— постоянные источники света
— отпариватель
— проектор
— генератор дыма
— бумажные фоны
— синхронизатор
— кольцевая лампа
— гибкое зеркало
— штатив для телефона
— музыкальная колонка
— гримёрное место, отдельная гримерная с кондиционером
— кофе/чай, прохладительные напитки, снеки, шоколад
— много реквизита (вазы, журналы, бокалы, постельное белье, матрас и проч.)
— на территории есть платная охраняемая парковка
— pet friendly`,
    activated: true,
    address: 'Большой Саввинский переулок, дом 9 строение 3, этаж 10, №1006 (залы BRASH и NUDE), этаж 9, №901 (залы JAZZ и SHELL) и этаж 7, №17 (залы MILK и STONE)',
    metro: 'Киевская',
    phone: '+7(925)858-24-94',
    price_range: [2200, 3600],
    ref: 'https://www.studiorent.ru/studios/161878',
    telegram_channel: 'https://t.me/sunsidephotostudio',
    telegram_contact: 'https://t.me/sunsidestudio',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/IMG_6428.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 17.58.25.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 17.59.45.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.07.20.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.08.14.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.08.56.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upld7osfak.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upldoeC6Em.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upldUQ9cAZ.jpg',
    ],
    height: 4,
    rooms: 7,
    shooting_square: 416,
    total_square: 458,
    workhours: [9, 21],
  },

  {
    id: 10,
    createdAt: new Date('2025-02-02T08:53:20.488Z'),
    updatedAt: new Date('2025-02-02T08:53:20.488Z'),
    title: 'PHOTO ZALL',
    description: `Описание фотостудии PHOTO ZALL
Фотостудия «PHOTO ZALL» — это 3 интерьерных зала с панорамными окнами, циклорамой, профессиональным оборудованием Godox и минималистичным интерьером.
Солнечная сторона, солнечный свет с 10:00 до 16:00 во всех залах. Трендовая мебель из букле и в стиле лофт. Тканевые и цветные фоны в аренду!
Импульсный и постоянный свет godox + маски Гобо. Бесплатная парковка. Грузовой лифт. Wi-Fi. Ближайшее метро: м.ВДНХ, м.Марьина Роща. Оплата картой / по QR-коду. ПОСЛЕ 18:00 СТОИМОСТЬ АРЕНДЫ ЗАЛОВ -20%
WhatsApp 8 9251976532. ВХОД В ЗДАНИЕ СТРОГО ПО ОРИГИНАЛУ ПАСПОРТА (По фото с телефона не пустят)`,
    activated: true,
    address: 'улица Академика Королева 13 стр1',
    metro: 'Марьина Роща',
    phone: '+79251976532',
    price_range: [1700, 2600],
    ref: 'https://www.studiorent.ru/studios/163425',
    telegram_channel: 'https://t.me/Photo_zall_studio',
    telegram_contact: 'https://t.me/Photo_zall_studio', // Предположение, так как в данных одна ссылка
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldKIPmel.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldr2QMMO.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldSdzXVa.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldYD8lVf.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld2K8Qqe.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld4JkMWb.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld5vWGst.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upld9u9Lq9.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldD61yFv.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldgJ0uXi.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldI3Rinf.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/6/upldi6lUDo.jpg',
    ],
    height: 3,           // Интерпретирую как рейтинг
    rooms: 3,            // Интерпретирую как количество отзывов
    shooting_square: 158,
    total_square: 103,
    workhours: [9, 24],
  },

  {
    id: 11,
    createdAt: new Date('2025-02-02T08:56:11.453Z'),
    updatedAt: new Date('2025-02-02T08:56:11.453Z'),
    title: 'Upline Studio',
    description: `Описание фотостудии Upline Studio
Upline Space — двухэтажная неоновая фотостудия
Добро пожаловать в современную фотостудию с уникальным стилем! 
Наша студия — это идеальное пространство для создания профессиональных фото- и видеоматериалов. Большие окна наполняют помещение естественным светом, а уникальная неоновая подсветка добавляет стиль и атмосферу вашим съемкам.
Что мы предлагаем:
Простор и свет: Высокие потолки (6 метров) и панорамные окна создают яркое и комфортное пространство для любых задумок.
Креативные решения: Современная неоновая подсветка добавит вашим кадрам индивидуальность и характер.
Комфорт: Уютная зона для отдыха и подготовки, где можно расслабиться или обсудить идеи.
Удобное расположение: Легкий доступ для вашей команды и клиентов и парковка.
Блэк-аут шторы: Полный контроль над освещением для идеальных результатов съемки
Наша студия подходит для фотосессий, видеосъемок, предметок, подкастов, рекламных проектов и творческих экспериментов.
Забронируйте время заранее и воплотите свои идеи в жизнь! Мы создадим все условия для вашего комфорта и вдохновения.
С нами каждый кадр становится шедевром!`,
    activated: true,
    address: 'ул. Правды, д. 24, стр. 3, офис 11',
    metro: 'Савеловская',
    phone: '',
    price_range: [2500, 3000],
    ref: 'https://www.studiorent.ru/studios/186359',
    telegram_channel: 'https://t.me/uplinespace',
    telegram_contact: 'https://t.me/uplinespace', // Одна ссылка в данных
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upld4MwBH9.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldaJJxeq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldmjh3we.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldmNvOcq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldow6IOp.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldrfGPtC.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldU80JvY.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldUcVnND.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldVnyeXm.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldX16y7c.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/7/upldYPqO8X.jpg',
    ],
    height: 6,           // Рейтинг
    rooms: 1,            // Количество отзывов
    shooting_square: 105,
    total_square: 105,
    workhours: [0, 24],
  },

  {
    id: 12,
    createdAt: new Date('2025-02-02T09:03:49.772Z'),
    updatedAt: new Date('2025-02-02T09:03:49.772Z'),
    title: 'WAVE studio',
    description: `Описание фотостудии WAVE studio
Фотостудия Wave — пространство, где можно снять зал на несколько часов или на день под фотосессию, видео съёмки, мастер-классы, тренинги. Это целый мир для творчества, раскинувшийся на обширной площади в 630 м2. 7 разнообразных залов и уютной гримерки на 5 мест, доступных для аренды, студия предлагает уникальную возможность реализовать самые смелые фото и видео проекты. Одно из ключевых преимуществ аренды фотостудии Wave — это естественный свет. Благодаря тому, что студия занимает весь этаж, солнце освещает различные залы в течение всего дня. Это идеально подходит для фотосессий с использованием естественного света. Для тех, кто предпочитает контролируемый искусственный свет, залы оборудованы профессиональными источниками импульсного света Profoto d1, дополнительно можно арендовать постоянный свет Aputure-300, Amaran-300, Godox-150. Все это делает фотостудию Wave идеальным местом как для фотографий с естественным освещением, так и для работы со светом.
Цены указаны от 2 х. часов бронирования зала — цена только одного часа может отличаться и происходит через администратора студии.`,
    activated: true,
    address: '2-я улица Измайловского Зверинца, д. 2',
    metro: 'Измайлово (МЦК)',
    phone: '+79150127722',
    price_range: [800, 2400],
    ref: 'https://www.studiorent.ru/studios/174157',
    telegram_channel: 'https://t.me/wavephotostudios',
    telegram_contact: 'https://t.me/wavephoto',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upld6rbgAU.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upld55AaTS.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldduyvkx.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldE1GpXr.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldElKwNK.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldjsOvoS.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldO9NAKu.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldOGLQTs.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldX68nqM.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/8/upldxJH5CA.jpg',
    ],
    height: 3,
    rooms: 7,
    shooting_square: 491,
    total_square: 630,
    workhours: [0, 24],
  },

  {
    id: 13,
    createdAt: new Date('2025-02-03T19:04:36.043Z'),
    updatedAt: new Date('2025-02-03T19:04:36.043Z'),
    title: 'Unicorn Studios',
    description: `Описание фотостудии Unicorn Studios
Фотостудия Unicorn Studios это пространство из 6х залов
Наша студия подойдет под каждую задачу и идею настоящего творческого человека! Идеально подходит для: портретной и контентной съёмки. Для съёмки каталогов одежды и аксессуаров для выхода на маркетплейсы. Креативной съёмки с использованием проектора и неоновых ламп. интерьерной и семейной съёмки.
Посмотрите каждый зал и выберете подходящий под вашу идею!`,
    activated: true,
    address: 'Дмитровское шоссе, д. 62к2, Svet',
    metro: 'Верхние Лихоборы',
    phone: '+74951084290',
    price_range: [700, 2800],
    ref: 'https://www.studiorent.ru/studios/158022',
    telegram_channel: 'https://t.me/studios_unicorn',
    telegram_contact: 'https://t.me/studios_unicorn', // Одна ссылка в данных
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld4oW1k1.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld5dh0qO.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upld5IPOk6.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/uplda8N1UL.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldCEvyoE.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldDbBYPx.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldeYKZQw.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldh1sLud.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldIlYxEq.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldoPNgdv.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/upldsXuGN2.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/9/uplduBprCA.jpeg',
    ],
    height: 3,
    rooms: 6,
    shooting_square: 340,
    total_square: 500,
    workhours: [6, 24],
  },

  {
    id: 14,
    createdAt: new Date('2025-02-03T19:08:48.539Z'),
    updatedAt: new Date('2025-02-03T19:08:48.539Z'),
    title: 'Sunside',
    description: `— Семь светлых залов
— 3 циклорамы 6.5х4.5м, 4х6м, 4х7.5м
— Потолочные анкера (выдерживает нагрузку до 50кг на каждый) над циклорамой в зале Milk, Stone
— Трехфазная нагрузка 380 V (16/32) залы Milk, Stone
— Кондиционер в каждом зале
— Современный минимализм
— Контепорари, ваби саби
— Аренда от 1 часа
— Естественный свет, панорамные окна
— Оборудование Profoto D2, Aputure, Godox
— Автоматизированная, платная система хранения вещей
Стоимость аренды:
Зал Nude – 2 200р./час
Зал Brash – 2 300р./час
Зал MILK – 2 500р./час
Зал STONE – 2 700р./час
Зал SHELL – 2 700р./час
Зал JAZZ – 3 200р./час
Зал WOOD — 2700р./час
Дополнительно:
— вентилятор
— постоянные источники света
— отпариватель
— проектор
— генератор дыма
— бумажные фоны
— синхронизатор
— кольцевая лампа
— гибкое зеркало
— штатив для телефона
— музыкальная колонка
— гримёрное место, отдельная гримерная с кондиционером
— кофе/чай, прохладительные напитки, снеки, шоколад
— много реквизита (вазы, журналы, бокалы, постельное белье, матрас и проч.)
— на территории есть платная охраняемая парковка
— pet friendly`,
    activated: true,
    address: 'Большой Саввинский переулок, дом 9 строение 3, этаж 10, №1006 (залы BRASH и NUDE), этаж 9, №901 (залы JAZZ и SHELL) и этаж 7, №17 (залы MILK и STONE)',
    metro: 'Киевская',
    phone: '+7(925)858-24-94',
    price_range: [2200, 3600],
    ref: 'https://www.studiorent.ru/studios/161878',
    telegram_channel: 'https://t.me/sunsidephotostudio',
    telegram_contact: 'https://t.me/sunsidestudio',
    images_urls: [
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/IMG_6428.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 17.58.25.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 17.59.45.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.07.20.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.08.14.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/Snimok ekrana 2024-08-05 v 18.08.56.png',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upld7osfak.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upldoeC6Em.jpg',
      'https://6b2c36aa-5e03-455c-a401-e4bbf2541379.selstorage.ru/studios/10/upldUQ9cAZ.jpg',
    ],
    height: 4,
    rooms: 7,
    shooting_square: 416,
    total_square: 458,
    workhours: [9, 21],
  },
];