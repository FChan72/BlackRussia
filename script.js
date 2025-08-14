// Конфигурация персонажей - легко добавлять новых
const heroes = {
    'fork-chan': {
        name: 'Fork_Chan',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Fork_Chan',
        level: '12',
        status: 'Бомж',
        profession: 'Дальнобойщик',
        service: 'ФСБ (старшина)',
        category: 'main', // Категория персонажа
        basicInfo: [
            { label: 'Никнейм', value: 'Fork_Chan' },
            { label: 'Уровень', value: '12' },
            { label: 'Статус', value: 'Бомж' },
            { label: 'Профессия', value: 'Дальнобойщик' },
            { label: 'Стиль жизни', value: 'Минималистичный' }
        ],
        careerInfo: [
            { label: 'Текущая работа', value: 'Дальнобойщик' },
            { label: 'Служба в ФСБ', value: 'Старшина' },
            { label: 'Прогресс', value: 'Почти дослужился' },
            { label: 'Опыт', value: 'Дорожные перевозки' }
        ],
        traits: [
            { label: 'Настойчивость', value: 'Высокая' },
            { label: 'Цель', value: 'Дослужиться в ФСБ' },
            { label: 'Подход', value: 'Постепенный рост' },
            { label: 'Приоритет', value: 'Карьера' }
        ]
    },
    'vadim': {
        name: 'Дядя Вадим',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Вадим',
        level: 'Высокий',
        status: 'Подполковник',
        profession: 'Армия',
        service: 'Армия',
        category: 'family', // Семья
        relation: 'Дядя',
        basicInfo: [
            { label: 'Имя', value: 'Вадим' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Родство', value: 'Дядя' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Дети', value: 'Блятик Рональдо' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'tima': {
        name: 'Дядя Тима',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Тима',
        level: 'Высокий',
        status: 'Майор',
        profession: 'Армия',
        service: 'Армия',
        category: 'family',
        relation: 'Дядя',
        basicInfo: [
            { label: 'Имя', value: 'Тима' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Родство', value: 'Дядя' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Семья', value: 'Есть сын Арсений' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'unknown-uncle': {
        name: 'Дядя (Неизвестен)',
        avatar: 'https://via.placeholder.com/150/000/fff?text=???',
        level: 'Взрослый',
        status: 'Семейный',
        profession: 'Не указана',
        service: 'Нет',
        category: 'family',
        relation: 'Дядя',
        basicInfo: [
            { label: 'Имя', value: 'Неизвестно' },
            { label: 'Статус', value: 'Семейный' },
            { label: 'Родство', value: 'Дядя' },
            { label: 'Семья', value: 'Женат на тете Ане' },
            { label: 'Характер', value: 'Неизвестен' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Женат' },
            { label: 'Опыт', value: 'Семейная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Неизвестен' },
            { label: 'Подход', value: 'Семейный' },
            { label: 'Цели', value: 'Семейное счастье' },
            { label: 'Приоритет', value: 'Семья' }
        ]
    },
    'anya': {
        name: 'Тетя Аня',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Аня',
        level: 'Высокий',
        status: 'Прапорщик',
        profession: 'ФСБ',
        service: 'ФСБ',
        category: 'family',
        relation: 'Тетя',
        basicInfo: [
            { label: 'Имя', value: 'Аня' },
            { label: 'Звание', value: 'Прапорщик' },
            { label: 'Родство', value: 'Тетя' },
            { label: 'Служба', value: 'ФСБ' },
            { label: 'Семья', value: 'Замужем' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'ФСБ' },
            { label: 'Звание', value: 'Прапорщик' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Служба в ФСБ' }
        ],
        traits: [
            { label: 'Характер', value: 'Эмоциональная' },
            { label: 'Подход', value: 'Прямолинейный' },
            { label: 'Цели', value: 'Служебный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'mira': {
        name: 'Мама Мира',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Мира',
        level: 'Высокий',
        status: 'Майор',
        profession: 'Армия',
        service: 'Армия',
        category: 'family',
        relation: 'Мама',
        basicInfo: [
            { label: 'Имя', value: 'Мира' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Родство', value: 'Мама' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Семья', value: 'Есть дети' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'yarik': {
        name: 'Папа Ярик',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Ярик',
        level: 'Высокий',
        status: 'Подполковник',
        profession: 'УМВД',
        service: 'УМВД',
        category: 'family',
        relation: 'Папа',
        basicInfo: [
            { label: 'Имя', value: 'Ярик' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Родство', value: 'Папа' },
            { label: 'Служба', value: 'УМВД' },
            { label: 'Статус', value: 'Активный' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'УМВД' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Правоохранительная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'kamilla': {
        name: 'Крестная Камилла',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Камилла',
        level: 'Высокий',
        status: 'Майор',
        profession: 'Армия',
        service: 'Армия',
        category: 'family',
        relation: 'Крестная',
        basicInfo: [
            { label: 'Имя', value: 'Камилла' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Родство', value: 'Крестная мама' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Семья', value: 'Есть' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Служебный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'ronaldo': {
        name: 'Блятик Рональдо',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Рональдо',
        level: 'Высокий',
        status: 'Капитан',
        profession: 'Армия',
        service: 'Армия',
        category: 'family',
        relation: 'Блятик',
        basicInfo: [
            { label: 'Имя', value: 'Рональдо' },
            { label: 'Звание', value: 'Капитан' },
            { label: 'Родство', value: 'Блятик' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Отец', value: 'Дядя Вадим' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Капитан' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'arseniy': {
        name: 'Блятик Арсений',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Арсений',
        level: 'Высокий',
        status: 'Подполковник',
        profession: 'Армия',
        service: 'Армия',
        category: 'family',
        relation: 'Блятик',
        basicInfo: [
            { label: 'Имя', value: 'Арсений' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Родство', value: 'Блятик' },
            { label: 'Служба', value: 'Армия' },
            { label: 'Отец', value: 'Дядя Тима' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Подполковник' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Цели', value: 'Карьерный рост' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'asxab': {
        name: 'Дед Асхаб',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Асхаб',
        level: 'Высокий',
        status: 'Неизвестно',
        profession: 'Неизвестно',
        service: 'Армия',
        category: 'family',
        relation: 'Дед',
        basicInfo: [
            { label: 'Имя', value: 'Асхаб' },
            { label: 'Звание', value: 'Неизвестно' },
            { label: 'Родство', value: 'Дед' },
            { label: 'Служба', value: 'Неизвестно' },
            { label: 'Родня', value: 'Неизвестно' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Неизвестно' },
            { label: 'Звание', value: 'Неизвестно' },
            { label: 'Статус', value: 'Неизвестно' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Подход', value: 'Неизвестно' },
            { label: 'Цели', value: 'Неизвестно' },
            { label: 'Приоритет', value: 'Неизвестно' }
        ]
    },
    'andrey': {
        name: 'Андрей',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Андрей',
        level: 'Высокий',
        status: 'Полковник',
        profession: 'Военный',
        service: 'Армия',
        category: 'other', // Другие персонажи
        relation: 'Коллега',
        basicInfo: [
            { label: 'Имя', value: 'Андрей' },
            { label: 'Звание', value: 'Полковник' },
            { label: 'Статус', value: 'Военный' },
            { label: 'Профессия', value: 'Армия' },
            { label: 'Характер', value: 'Злюка' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Полковник' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Характер', value: 'Строгий' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Дисциплина', value: 'Высокая' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },
    'savely': {
        name: 'Савели',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Савели',
        level: 'Высокий',
        status: 'Майор',
        profession: 'Военный',
        service: 'Армия',
        category: 'other', // Другие персонажи
        relation: 'Друг',
        basicInfo: [
            { label: 'Имя', value: 'Савели' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Статус', value: 'Военный' },
            { label: 'Профессия', value: 'Армия' },
            { label: 'Характер', value: 'Добрый' }
        ],
        careerInfo: [
            { label: 'Служба', value: 'Армия' },
            { label: 'Звание', value: 'Майор' },
            { label: 'Статус', value: 'Активный' },
            { label: 'Опыт', value: 'Военная служба' }
        ],
        traits: [
            { label: 'Характер', value: 'Добрый' },
            { label: 'Подход', value: 'Военный' },
            { label: 'Дисциплина', value: 'Средняя' },
            { label: 'Приоритет', value: 'Служба' }
        ]
    },   
};

const UKRF = {
  name: 'УК РФ',
  basicInfo: [
    { label: 'УК РФ 1', value: 'Нанесение телесных повреждений гражданскому лицу: лишение свободы на 1 год.' },
    { label: 'УК РФ 2', value: 'Нанесение телесных повреждений государственному служащему: лишение свободы на 2 года.' },
    { label: 'УК РФ 3', value: 'Убийство гражданского лица: лишение свободы на 4 года.' },
    { label: 'УК РФ 4', value: 'Убийство государственного служащего: лишение свободы на 5 лет.' },
    { label: 'УК РФ 5', value: 'Попытка угона транспортного средства любой категории: лишение свободы на 1 год.' },
  ],
  careerInfo: [
    { label: 'УК РФ 6', value: 'Угон транспортного средства любой категории: лишение свободы на 2 года.' },
    { label: 'УК РФ 7', value: 'Использование наркотических веществ: лишение свободы на 2 года.' },
    { label: 'УК РФ 8', value: 'Приобретение, хранение, передача, сбыт наркотических веществ: лишение свободы на 3 года.' },
    { label: 'УК РФ 9', value: 'Ношение и использование огнестрельного оружия без лицензии: лишение свободы на 2 года.' },
    { label: 'УК РФ 16', value: 'Получение взятки лицом государственного служащего: лишение свободы на 5 лет.' },
    { label: 'УК РФ 17', value: 'Ограбление гражданского либо государственного служащего: лишение свободы на 3 года.' },
  ],
  traits: [
    { label: 'УК РФ 10', value: 'Незаконное приобретение, передача, сбыт огнестрельного оружия: лишение свободы на 3 года.' },
    { label: 'УК РФ 11', value: 'Проникновение на частную территорию: лишение свободы на 2 года.' },
    { label: 'УК РФ 12', value: 'Проникновение на территорию объекта закрытого режима (воинская часть, ФСИН): лишение свободы на 4 года.' },
    { label: 'УК РФ 13', value: 'Помеха работе сотрудникам правоохранительных органов: лишение свободы на 1 год.' },
    { label: 'УК РФ 14', value: 'Неподчинение сотруднику правоохранительных органов: лишение свободы на 2 года.' },
    { label: 'УК РФ 15', value: 'Попытка/дача взятки государственному служащему: лишение свободы на 2 года.' },
    { label: 'УК РФ 18', value: 'Похищение/захват гражданского либо государственного служащего: лишение свободы на 3 года.' },
    { label: 'УК РФ 19', value: 'Деятельность членов организованной преступной группировки: лишение свободы на 4 года.' },
    { label: 'УК РФ 20', value: 'Организация/призыв к совершению/исполнению теракта: лишение свободы на 6 лет.' },
  ]
};

const KOAP = [
  { label: 'КоАП 1', text: 'Нарушение правил дорожного движения, вызвавшее повреждение транспортных средств: штраф 30.000 рублей и изъятие водительского удостоверения.' },
  { label: 'КоАП 2', text: 'Парковка транспортного средства в неположенном месте: штраф 10.000 рублей.' },
  { label: 'КоАП 3', text: 'Движение на транспортном средстве в неположенном месте (тротуар, газон): штраф 15.000 рублей.' },
  { label: 'КоАП 4', text: 'Порча муниципального имущества (скамейки, столбы, остановки): штраф 10.000 рублей.' },
  { label: 'КоАП 5', text: 'Создание аварийной ситуации на дороге (AFK на дороге): штраф 10.000 рублей.' },
  { label: 'КоАП 6', text: 'Передвижение пешком по проезжей части: штраф 10.000 рублей.' },
  { label: 'КоАП 7', text: 'Невыполнение требований сотрудника ДПС: штраф 5.000 рублей.' },
  { label: 'КоАП 8', text: 'Ложный вызов сотрудников (скорая помощь, правоохранительные органы): штраф 5.000 рублей.' },
  { label: 'КоАП 9', text: 'Оскорбление государственного служащего: штраф 5.000 рублей.' },
];

// Функция рендеринга списка в UL с данным id
function renderList(items, containerId, isTrait = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => {
    const value = isTrait ? item.text : item.value;
    return `<li><strong>${item.label}:</strong> ${value}</li>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderList(UKRF.basicInfo, 'ukrf-basic-info');
  renderList(UKRF.careerInfo, 'ukrf-career-info');
  renderList(UKRF.traits, 'ukrf-traits');
  renderList(KOAP, 'koap-articles', true);
});

function deleteHeroDirectly(heroId) {
  const card = document.querySelector(`.podskazka-card[data-hero="${heroId}"]`);
  if (card) card.remove();
}


document.addEventListener('DOMContentLoaded', () => {
  renderList(UKRF.basicInfo, 'ukrf-basic-info');
  renderList(UKRF.careerInfo, 'ukrf-career-info');
  renderList(UKRF.traits, 'ukrf-traits');
});

function deleteHeroDirectly(heroId) {
  const card = document.querySelector(`.contact-card[data-hero="${heroId}"]`);
  if (card) card.remove();
}


// Текущий активный персонаж
let currentHero = 'fork-chan';
let autoSwitchInterval = null;
let isAutoMode = false;

// Функция переключения персонажа
function switchHero(heroId) {
    if (!heroes[heroId]) return;
    
    const hero = heroes[heroId];
    currentHero = heroId;
    
    // Прокручиваем вверх (только если не авторежим)
    scrollToTop();
    
    // Анимация перехода - затемняем страницу
    const overlay = document.createElement('div');
    overlay.className = 'hero-switch-overlay';
    document.body.appendChild(overlay);
    
    // Показываем overlay
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    // Обновляем контент
    setTimeout(() => {
        // Обновляем заголовки
        document.getElementById('current-hero-name').textContent = hero.name;
        document.getElementById('current-hero-title').textContent = hero.name;
        document.getElementById('current-hero-family-name').textContent = hero.name;
        document.getElementById('current-hero-footer').textContent = hero.name;
        
        // Обновляем аватар
        const avatar = document.getElementById('current-hero-avatar');
        avatar.src = hero.avatar;
        avatar.alt = hero.name;
        
        // Обновляем статистику
        const statsContainer = document.getElementById('current-hero-stats');
        statsContainer.innerHTML = `
            <p><strong>Уровень:</strong> ${hero.level}</p>
            <p><strong>Статус:</strong> ${hero.status}</p>
            <p><strong>Профессия:</strong> ${hero.profession}</p>
            <p><strong>Служба:</strong> ${hero.service}</p>
        `;
        
        // Обновляем основную информацию
        const basicInfoContainer = document.getElementById('current-hero-basic-info');
        basicInfoContainer.innerHTML = hero.basicInfo.map(item => 
            `<li><strong>${item.label}:</strong> ${item.value}</li>`
        ).join('');
        
        // Обновляем информацию о карьере
        const careerInfoContainer = document.getElementById('current-hero-career-info');
        careerInfoContainer.innerHTML = hero.careerInfo.map(item => 
            `<li><strong>${item.label}:</strong> ${item.value}</li>`
        ).join('');
        
        // Обновляем характеристики
        const traitsContainer = document.getElementById('current-hero-traits');
        traitsContainer.innerHTML = hero.traits.map(item => 
            `<li><strong>${item.label}:</strong> ${item.value}</li>`
        ).join('');
        
        // Обновляем заголовок страницы
        document.title = `Black Russia - ${hero.name}`;
        
        // Убираем overlay
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        }, 200);
        
    }, 300);
}

// Функция автоматического переключения персонажей
function startAutoSwitch() {
    if (isAutoMode) return;
    
    isAutoMode = true;
    const heroIds = Object.keys(heroes);
    let currentIndex = heroIds.indexOf(currentHero);
    
    // Добавляем эффект авторежима к body
    document.body.classList.add('auto-mode');
    
    autoSwitchInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % heroIds.length;
        switchHero(heroIds[currentIndex]);
        
        // Добавляем эффект перехода
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.animation = 'heroTransition 0.5s ease-in-out';
            setTimeout(() => {
                hero.style.animation = '';
            }, 500);
        }
    }, 5000); // Переключаем каждые 5 секунд
    
    // Обновляем кнопку
    updateAutoButton();
}

// Функция остановки автоматического переключения
function stopAutoSwitch() {
    if (!isAutoMode) return;
    
    isAutoMode = false;
    if (autoSwitchInterval) {
        clearInterval(autoSwitchInterval);
        autoSwitchInterval = null;
    }
    
    // Убираем эффект авторежима
    document.body.classList.remove('auto-mode');
    
    // Обновляем кнопку
    updateAutoButton();
}

// Функция обновления кнопки авторежима
function updateAutoButton() {
    const autoButton = document.getElementById('auto-switch-btn');
    const progressBar = document.getElementById('auto-progress');
    
    if (autoButton) {
        if (isAutoMode) {
            autoButton.textContent = 'Остановить авто';
            autoButton.classList.add('active');
            if (progressBar) {
                progressBar.classList.add('active');
            }
        } else {
            autoButton.textContent = 'Авторежим';
            autoButton.classList.remove('active');
            if (progressBar) {
                progressBar.classList.remove('active');
            }
        }
    }
}

// Функция переключения авторежима
function toggleAutoMode() {
    if (isAutoMode) {
        stopAutoSwitch();
    } else {
        startAutoSwitch();
    }
}

// Функция для легкого добавления нового персонажа
function addNewHero(heroId, heroData) {
    if (heroes[heroId]) {
        console.warn(`Персонаж с ID "${heroId}" уже существует!`);
        return false;
    }
    
    // Проверяем обязательные поля
    const requiredFields = ['name', 'avatar', 'level', 'status', 'profession', 'service', 'category'];
    for (const field of requiredFields) {
        if (!heroData[field]) {
            console.error(`Отсутствует обязательное поле: ${field}`);
            return false;
        }
    }
    
    // Добавляем персонажа
    heroes[heroId] = heroData;
    
    // Сохраняем в localStorage
    saveHeroes();
    
    // Автоматически добавляем карточку в HTML если страница загружена
    if (document.readyState === 'complete') {
        addHeroCardToDOM(heroId, heroData);
    }
    
    console.log(`Персонаж "${heroData.name}" успешно добавлен!`);
    return true;
}

// Функция для добавления карточки персонажа в DOM
function addHeroCardToDOM(heroId, heroData) {
    const container = getHeroContainer(heroData.category);
    if (!container) {
        console.error(`Контейнер для категории "${heroData.category}" не найден`);
        return;
    }
    
    const cardHTML = createHeroCardHTML(heroId, heroData);
    container.insertAdjacentHTML('beforeend', cardHTML);
    
    // Добавляем обработчик клика
    const newCard = container.querySelector(`[data-hero="${heroId}"]`);
    if (newCard) {
        newCard.addEventListener('click', function() {
            if (isAutoMode) {
                stopAutoSwitch();
            }
            switchHero(heroId);
        });
    }
}

// Функция для получения контейнера по категории
function getHeroContainer(category) {
    switch (category) {
        case 'family':
            return document.querySelector('.family-tree');
        case 'other':
            return document.querySelector('.contacts-grid');
        default:
            return null;
    }
}

// Функция для создания HTML карточки персонажа
function createHeroCardHTML(heroId, heroData) {
    const deleteButton = heroId !== 'fork-chan' ? `<button class="delete-hero-btn-small" onclick="deleteHeroDirectly('${heroId}')" title="Удалить персонажа">🗑️</button>` : '';
    
    if (heroData.category === 'family') {
        return `
            <div class="family-member">
                <div class="member-card clickable-hero" data-hero="${heroId}">
                    <div class="card-header">
                        <h3>${heroData.name}</h3>
                        ${deleteButton}
                    </div>
                    <p>${heroData.profession}</p>
                    <span class="relation">${heroData.relation || 'Родственник'}</span>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="contact-card clickable-hero" data-hero="${heroId}">
                <div class="card-header">
                    <h3>${heroData.name}</h3>
                    ${deleteButton}
                </div>
                <p>${heroData.profession}</p>
                <span class="status ${heroData.status === 'Злюка' ? 'bad' : 'neutral'}">${heroData.status}</span>
            </div>
        `;
    }
}

// Функция для удаления персонажа
function removeHero(heroId) {
    if (!heroes[heroId]) {
        console.warn(`Персонаж с ID "${heroId}" не найден!`);
        return false;
    }
    
    // Удаляем из объекта
    delete heroes[heroId];
    
    // Сохраняем в localStorage
    saveHeroes();
    
    // Удаляем карточку из DOM
    const card = document.querySelector(`[data-hero="${heroId}"]`);
    if (card) {
        card.closest('.family-member, .contact-card').remove();
    }
    
    console.log(`Персонаж "${heroId}" успешно удален!`);
    return true;
}

// Функция для получения всех персонажей по категории
function getHeroesByCategory(category) {
    return Object.entries(heroes).filter(([id, hero]) => hero.category === category);
}

// Функция для прокрутки вверх страницы
function scrollToTop() {
    if (!isAutoMode) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Функция прямого удаления персонажа (для кнопок в карточках)
function deleteHeroDirectly(heroId) {
    if (!hasAdminRights()) {
        alert('Требуются права администратора!');
        return;
    }
    
    if (heroId === 'fork-chan') {
        alert('Нельзя удалить главного персонажа!');
        return;
    }
    
    const heroName = heroes[heroId]?.name || heroId;
    const confirmDelete = confirm(`Вы уверены, что хотите удалить персонажа "${heroName}"?`);
    
    if (confirmDelete) {
        if (removeHero(heroId)) {
            alert(`Персонаж "${heroName}" успешно удален!`);
        } else {
            alert('Ошибка при удалении персонажа.');
        }
    }
}

// Система авторизации администратора
let isAdmin = false;
const ADMIN_CODE = '123'; // Код для получения прав администратора

// Система сохранения данных
const STORAGE_KEY = 'blackrussia_heroes';
const ADMIN_STORAGE_KEY = 'blackrussia_admin';
const USER_COUNTER_KEY = 'blackrussia_online_users';

// Загрузка данных при инициализации
function loadSavedData() {
    // Загружаем сохраненных персонажей
    const savedHeroes = localStorage.getItem(STORAGE_KEY);
    if (savedHeroes) {
        const parsedHeroes = JSON.parse(savedHeroes);
        Object.assign(heroes, parsedHeroes);
    }
    
    // Загружаем статус администратора из sessionStorage (сбрасывается при закрытии браузера)
    const savedAdmin = sessionStorage.getItem(ADMIN_STORAGE_KEY);
    if (savedAdmin === 'true') {
        isAdmin = true;
    } else {
        isAdmin = false;
    }
}

// Сохранение данных
function saveHeroes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(heroes));
}

function saveAdminStatus() {
    // Сохраняем статус администратора в sessionStorage (сбрасывается при закрытии браузера)
    sessionStorage.setItem(ADMIN_STORAGE_KEY, isAdmin.toString());
}

// Функции для счетчика пользователей
function generateSessionId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function updateUserCounter() {
    const counterElement = document.getElementById('online-users');
    if (counterElement) {
        counterElement.textContent = onlineUsers;
    }
}

function addUserToCounter() {
    userSessionId = generateSessionId();
    const currentUsers = JSON.parse(localStorage.getItem(USER_COUNTER_KEY) || '{}');
    currentUsers[userSessionId] = Date.now();
    localStorage.setItem(USER_COUNTER_KEY, JSON.stringify(currentUsers));
    
    // Очищаем старые сессии (старше 5 минут)
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    Object.keys(currentUsers).forEach(sessionId => {
        if (now - currentUsers[sessionId] > fiveMinutes) {
            delete currentUsers[sessionId];
        }
    });
    
    onlineUsers = Object.keys(currentUsers).length;
    updateUserCounter();
}

function removeUserFromCounter() {
    if (userSessionId) {
        const currentUsers = JSON.parse(localStorage.getItem(USER_COUNTER_KEY) || '{}');
        delete currentUsers[userSessionId];
        localStorage.setItem(USER_COUNTER_KEY, JSON.stringify(currentUsers));
        onlineUsers = Object.keys(currentUsers).length;
        updateUserCounter();
    }
}

function refreshUserCounter() {
    const currentUsers = JSON.parse(localStorage.getItem(USER_COUNTER_KEY) || '{}');
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    
    // Очищаем старые сессии
    Object.keys(currentUsers).forEach(sessionId => {
        if (now - currentUsers[sessionId] > fiveMinutes) {
            delete currentUsers[sessionId];
        }
    });
    
    localStorage.setItem(USER_COUNTER_KEY, JSON.stringify(currentUsers));
    onlineUsers = Object.keys(currentUsers).length;
    updateUserCounter();
}

// Функция проверки прав администратора
function checkAdminRights() {
    if (!isAdmin) {
        const userCode = prompt('Введите код администратора для добавления персонажей:');
        if (userCode === ADMIN_CODE) {
            isAdmin = true;
            saveAdminStatus();
            alert('Доступ получен! Теперь вы можете добавлять персонажей.');
            updateAdminButton();
            return true;
        } else if (userCode !== null) {
            alert('Неверный код! Попробуйте еще раз.');
        }
        return false;
    }
    return true;
}

// Функция для проверки прав администратора без запроса кода
function hasAdminRights() {
    return isAdmin;
}

// Функция обновления кнопки администратора
function updateAdminButton() {
    const addHeroBtn = document.getElementById('add-hero-btn');
    
    if (addHeroBtn) {
        if (isAdmin) {
            addHeroBtn.textContent = '+ Добавить персонажа';
            addHeroBtn.classList.add('admin-active');
            addHeroBtn.title = 'Добавить нового персонажа';
        } else {
            addHeroBtn.textContent = '🔒 Получить админку';
            addHeroBtn.classList.remove('admin-active');
            addHeroBtn.title = 'Введите код администратора';
        }
    }
    
    // Показываем/скрываем кнопки удаления в карточках
    const deleteButtons = document.querySelectorAll('.delete-hero-btn-small');
    deleteButtons.forEach(btn => {
        if (isAdmin) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
}

// Функция показа формы добавления персонажа (только для админов)
function showAddHeroForm() {
    if (!checkAdminRights()) {
        return;
    }
    
    const formHTML = `
        <div id="add-hero-modal" class="modal-overlay">
            <div class="modal-content">
                <h3>Добавить нового персонажа</h3>
                <form id="add-hero-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>ID персонажа:</label>
                            <input type="text" id="hero-id" required placeholder="например: uncle-pavel">
                        </div>
                        <div class="form-group">
                            <label>Имя:</label>
                            <input type="text" id="hero-name" required placeholder="например: Дядя Павел">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Категория:</label>
                            <select id="hero-category" required>
                                <option value="family">Семья</option>
                                <option value="other">Другие персонажи</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Родство/Статус:</label>
                            <input type="text" id="hero-relation" required placeholder="например: Дядя или Коллега">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Профессия:</label>
                            <input type="text" id="hero-profession" required placeholder="например: Армия">
                        </div>
                        <div class="form-group">
                            <label>Звание:</label>
                            <input type="text" id="hero-status" required placeholder="например: Майор">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Служба:</label>
                            <input type="text" id="hero-service" required placeholder="например: Армия">
                        </div>
                        <div class="form-group">
                            <label>Уровень:</label>
                            <select id="hero-level" required>
                                <option value="Низкий">Низкий</option>
                                <option value="Средний">Средний</option>
                                <option value="Высокий" selected>Высокий</option>
                                <option value="Элитный">Элитный</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>URL аватара:</label>
                        <input type="url" id="hero-avatar" placeholder="https://example.com/avatar.jpg">
                        <small>Оставьте пустым для автоматической генерации</small>
                    </div>
                    
                    <div class="form-group">
                        <label>Описание персонажа:</label>
                        <textarea id="hero-description" rows="3" placeholder="Краткое описание персонажа..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Дополнительная информация:</label>
                        <textarea id="hero-extra-info" rows="2" placeholder="Дополнительные детали..."></textarea>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="submit" class="btn-primary">Добавить персонажа</button>
                        <button type="button" class="btn-secondary" onclick="closeAddHeroForm()">Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
    
    // Обработчик отправки формы
    document.getElementById('add-hero-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const heroId = document.getElementById('hero-id').value;
        const heroName = document.getElementById('hero-name').value;
        const category = document.getElementById('hero-category').value;
        const relation = document.getElementById('hero-relation').value;
        const profession = document.getElementById('hero-profession').value;
        const status = document.getElementById('hero-status').value;
        const service = document.getElementById('hero-service').value;
        const level = document.getElementById('hero-level').value;
        const avatar = document.getElementById('hero-avatar').value;
        const description = document.getElementById('hero-description').value;
        const extraInfo = document.getElementById('hero-extra-info').value;
        
        // Генерируем аватар если не указан
        const avatarUrl = avatar || `https://via.placeholder.com/150/000/fff?text=${encodeURIComponent(heroName.split(' ')[0])}`;
        
        const heroData = {
            name: heroName,
            avatar: avatarUrl,
            level: level,
            status: status,
            profession: profession,
            service: service,
            category: category,
            relation: relation,
            description: description,
            extraInfo: extraInfo,
            basicInfo: [
                { label: 'Имя', value: heroName.split(' ')[0] },
                { label: 'Звание', value: status },
                { label: 'Родство', value: relation },
                { label: 'Служба', value: service },
                { label: 'Уровень', value: level },
                ...(description ? [{ label: 'Описание', value: description }] : []),
                ...(extraInfo ? [{ label: 'Дополнительно', value: extraInfo }] : [])
            ],
            careerInfo: [
                { label: 'Служба', value: service },
                { label: 'Звание', value: status },
                { label: 'Статус', value: 'Активный' },
                { label: 'Опыт', value: 'Служба' },
                { label: 'Профессия', value: profession }
            ],
            traits: [
                { label: 'Дисциплина', value: 'Высокая' },
                { label: 'Подход', value: 'Профессиональный' },
                { label: 'Цели', value: 'Карьерный рост' },
                { label: 'Приоритет', value: 'Служба' }
            ]
        };
        
        if (addNewHero(heroId, heroData)) {
            closeAddHeroForm();
            alert(`Персонаж "${heroName}" успешно добавлен и сохранен!`);
        } else {
            alert('Ошибка при добавлении персонажа. Проверьте консоль для деталей.');
        }
    });
}

// Функция закрытия формы
function closeAddHeroForm() {
    const modal = document.getElementById('add-hero-modal');
    if (modal) {
        modal.remove();
    }
}

// Функция показа формы удаления персонажа
function showDeleteHeroForm() {
    if (!checkAdminRights()) {
        return;
    }
    
    const heroOptions = Object.entries(heroes)
        .filter(([id, hero]) => id !== 'fork-chan') // Нельзя удалить главного персонажа
        .map(([id, hero]) => `<option value="${id}">${hero.name} (${hero.category})</option>`)
        .join('');
    
    if (!heroOptions) {
        alert('Нет персонажей для удаления!');
        return;
    }
    
    const formHTML = `
        <div id="delete-hero-modal" class="modal-overlay">
            <div class="modal-content">
                <h3>Удалить персонажа</h3>
                <form id="delete-hero-form">
                    <div class="form-group">
                        <label>Выберите персонажа для удаления:</label>
                        <select id="hero-to-delete" required>
                            <option value="">Выберите персонажа...</option>
                            ${heroOptions}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Подтверждение:</label>
                        <input type="text" id="confirm-delete" placeholder="Введите 'УДАЛИТЬ' для подтверждения" required>
                        <small>Введите слово "УДАЛИТЬ" для подтверждения удаления</small>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="submit" class="btn-danger">Удалить персонажа</button>
                        <button type="button" class="btn-secondary" onclick="closeDeleteHeroForm()">Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
    
    // Обработчик отправки формы
    document.getElementById('delete-hero-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const heroId = document.getElementById('hero-to-delete').value;
        const confirmText = document.getElementById('confirm-delete').value;
        
        if (confirmText !== 'УДАЛИТЬ') {
            alert('Введите "УДАЛИТЬ" для подтверждения!');
            return;
        }
        
        if (heroId === 'fork-chan') {
            alert('Нельзя удалить главного персонажа!');
            return;
        }
        
        const heroName = heroes[heroId]?.name || heroId;
        
        if (removeHero(heroId)) {
            closeDeleteHeroForm();
            alert(`Персонаж "${heroName}" успешно удален!`);
        } else {
            alert('Ошибка при удалении персонажа. Проверьте консоль для деталей.');
        }
    });
}

// Функция закрытия формы удаления
function closeDeleteHeroForm() {
    const modal = document.getElementById('delete-hero-modal');
    if (modal) {
        modal.remove();
    }
}

// Функция сброса прав администратора
function resetAdminRights() {
    isAdmin = false;
    saveAdminStatus();
    updateAdminButton();
    alert('Права администратора сброшены.');
}

// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигационных ссылок
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми карточками
    const cards = document.querySelectorAll('.profile-card, .member-card, .contact-card, .career-card, .daily-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Анимация для заголовков секций
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(title);
    });

    // Интерактивные эффекты для карточек семьи
    const familyCards = document.querySelectorAll('.member-card');
    familyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });

    // Интерактивные эффекты для карточек карьеры
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Интерактивные эффекты для карточек повседневной жизни
    const dailyCards = document.querySelectorAll('.daily-card');
    dailyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Анимация для профиля игрока
    const playerInfo = document.querySelector('.player-info');
    if (playerInfo) {
        playerInfo.style.opacity = '0';
        playerInfo.style.transform = 'translateY(50px)';
        playerInfo.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            playerInfo.style.opacity = '1';
            playerInfo.style.transform = 'translateY(0)';
        }, 500);
    }

    // Добавляем эффект параллакса для hero секции
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Анимация для логотипа
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Загружаем сохраненные данные при инициализации
    loadSavedData();
    
    // Инициализируем счетчик пользователей
    addUserToCounter();
    refreshUserCounter();
    
    // Обновляем счетчик каждые 30 секунд
    setInterval(refreshUserCounter, 30000);
    
    // Управление кнопкой "Наверх"
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Добавляем анимацию загрузки страницы
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        updateCurrentHeroIndicator();
        updateAdminButton(); // Инициализируем кнопку администратора
    });
    
    // Обработчик закрытия страницы для удаления пользователя из счетчика
    window.addEventListener('beforeunload', function() {
        removeUserFromCounter();
        // Сбрасываем права администратора при закрытии страницы
        isAdmin = false;
    });

    // Добавляем интерактивные подсказки для карточек
    const allCards = document.querySelectorAll('.profile-card, .member-card, .contact-card, .career-card, .daily-card');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#ff6b35';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e9ecef';
        });
    });

    // Добавляем обработчики кликов для переключения персонажей
    const clickableHeroes = document.querySelectorAll('.clickable-hero');
    clickableHeroes.forEach(hero => {
        hero.addEventListener('click', function() {
            const heroId = this.getAttribute('data-hero');
            if (heroId) {
                // Останавливаем авторежим при ручном переключении
                if (isAutoMode) {
                    stopAutoSwitch();
                }
                switchHero(heroId);
            }
        });
    });

    // Добавляем анимацию для карточек при авторежиме
    function addAutoAnimation() {
        const cards = document.querySelectorAll('.member-card, .contact-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('auto-animate');
        });
    }

    // Убираем анимацию авторежима
    function removeAutoAnimation() {
        const cards = document.querySelectorAll('.member-card, .contact-card');
        cards.forEach(card => {
            card.classList.remove('auto-animate');
        });
    }

    // Обновляем функцию авторежима
    const originalStartAutoSwitch = startAutoSwitch;
    startAutoSwitch = function() {
        originalStartAutoSwitch();
        addAutoAnimation();
    };

    const originalStopAutoSwitch = stopAutoSwitch;
    stopAutoSwitch = function() {
        originalStopAutoSwitch();
        removeAutoAnimation();
    };

    // Добавляем индикатор текущего персонажа
    function updateCurrentHeroIndicator() {
        const cards = document.querySelectorAll('.clickable-hero');
        cards.forEach(card => {
            card.classList.remove('current-hero');
            const heroId = card.getAttribute('data-hero');
            if (heroId === currentHero) {
                card.classList.add('current-hero');
            }
        });
    }

    // Обновляем функцию переключения персонажа
    const originalSwitchHero = switchHero;
    switchHero = function(heroId) {
        originalSwitchHero(heroId);
        updateCurrentHeroIndicator();
        
        // Добавляем эффект переключения
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('hero-switch');
            setTimeout(() => {
                heroSection.classList.remove('hero-switch');
            }, 500);
        }
        
        // Добавляем эффект для карточек
        const cards = document.querySelectorAll('.member-card, .contact-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            }, index * 50);
        });
    };
});

// Добавляем CSS для новых элементов
const style = document.createElement('style');
style.textContent = `
    body.loaded .hero-title {
        animation: slideInDown 1s ease;
    }
    
    body.loaded .hero-subtitle {
        animation: slideInUp 1s ease 0.3s both;
    }
    
    @keyframes slideInDown {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideInUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

document.head.appendChild(style);

// Примеры использования функций для добавления персонажей
// Раскомментируйте и измените по необходимости:

/*
// Пример добавления нового члена семьи
addNewHero('new-uncle', {
    name: 'Дядя Петр',
    avatar: 'https://via.placeholder.com/150/000/fff?text=Петр',
    level: 'Высокий',
    status: 'Майор',
    profession: 'Армия',
    service: 'Армия',
    category: 'family',
    relation: 'Дядя',
    basicInfo: [
        { label: 'Имя', value: 'Петр' },
        { label: 'Звание', value: 'Майор' },
        { label: 'Родство', value: 'Дядя' },
        { label: 'Служба', value: 'Армия' },
        { label: 'Семья', value: 'Есть дети' }
    ],
    careerInfo: [
        { label: 'Служба', value: 'Армия' },
        { label: 'Звание', value: 'Майор' },
        { label: 'Статус', value: 'Активный' },
        { label: 'Опыт', value: 'Военная служба' }
    ],
    traits: [
        { label: 'Дисциплина', value: 'Высокая' },
        { label: 'Подход', value: 'Военный' },
        { label: 'Цели', value: 'Карьерный рост' },
        { label: 'Приоритет', value: 'Служба' }
    ]
});

// Пример добавления другого персонажа
addNewHero('new-colleague', {
    name: 'Сергей',
    avatar: 'https://via.placeholder.com/150/000/fff?text=Сергей',
    level: 'Высокий',
    status: 'Подполковник',
    profession: 'ФСБ',
    service: 'ФСБ',
    category: 'other',
    relation: 'Коллега',
    basicInfo: [
        { label: 'Имя', value: 'Сергей' },
        { label: 'Звание', value: 'Подполковник' },
        { label: 'Служба', value: 'ФСБ' },
        { label: 'Статус', value: 'Активный' },
        { label: 'Опыт', value: 'Служба в ФСБ' }
    ],
    careerInfo: [
        { label: 'Служба', value: 'ФСБ' },
        { label: 'Звание', value: 'Подполковник' },
        { label: 'Статус', value: 'Активный' },
        { label: 'Опыт', value: 'Служба в ФСБ' }
    ],
    traits: [
        { label: 'Дисциплина', value: 'Высокая' },
        { label: 'Подход', value: 'Профессиональный' },
        { label: 'Цели', value: 'Служебный рост' },
        { label: 'Приоритет', value: 'Служба' }
    ]
});
*/

// Глобальные функции для использования в консоли браузера
window.addNewHero = addNewHero;
window.removeHero = removeHero;
window.getHeroesByCategory = getHeroesByCategory;
window.switchHero = switchHero;
window.toggleAutoMode = toggleAutoMode;
window.showAddHeroForm = showAddHeroForm;
window.closeAddHeroForm = closeAddHeroForm;
window.showDeleteHeroForm = showDeleteHeroForm;
window.closeDeleteHeroForm = closeDeleteHeroForm;
window.deleteHeroDirectly = deleteHeroDirectly;
window.resetAdminRights = resetAdminRights;
window.checkAdminRights = checkAdminRights;
window.hasAdminRights = hasAdminRights;
window.loadSavedData = loadSavedData;
window.saveHeroes = saveHeroes;
window.scrollToTop = scrollToTop;
window.refreshUserCounter = refreshUserCounter;

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  let isOpen = false;

  function openMenu() {
    nav.classList.add('active');
    // Сбрасываем inline стили закрытого состояния и ставим открытые
    nav.style.opacity = '1';
    nav.style.padding = '1rem 20px';
    nav.style.pointerEvents = 'auto';
    isOpen = true;
  }

  function closeMenu() {
    // Начинаем анимацию закрытия (opacity и padding плавно уменьшаем)
    nav.style.opacity = '0';
    nav.style.padding = '0 20px';
    nav.style.pointerEvents = 'none';
    isOpen = false;
  }

  navToggle.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) {
        closeMenu();
      }
    });
  });

  nav.addEventListener('transitionend', (e) => {
    // Следим за окончанием анимации opacity при закрытии
    if (e.propertyName === 'opacity' && !isOpen) {
      nav.classList.remove('active');
      // Убираем все inline стили, чтобы меню сбросилось в исходное состояние
      nav.style.opacity = '';
      nav.style.padding = '';
      nav.style.pointerEvents = '';
    }
  });
});

