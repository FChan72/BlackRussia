const heroes = {
    'fork-chan': {
        name: 'Fork_Chan',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Fork_Chan',
        level: '12',
        status: 'Бомж',
        profession: 'Дальнобойщик',
        service: 'ФСБ (старшина)',
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
        level: 'Взрослый',
        status: 'Семейный',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Вадим' },
            { label: 'Статус', value: 'Семейный' },
            { label: 'Родство', value: 'Дядя' },
            { label: 'Дети', value: 'Блятик Рональдо' },
            { label: 'Характер', value: 'Семейный' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Есть дети' },
            { label: 'Опыт', value: 'Семейная жизнь' }
        ],
        traits: [
            { label: 'Ответственность', value: 'Высокая' },
            { label: 'Подход', value: 'Семейный' },
            { label: 'Цели', value: 'Забота о семье' },
            { label: 'Приоритет', value: 'Семья' }
        ]
    },
    'tima': {
        name: 'Дядя Тима',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Тима',
        level: 'Взрослый',
        status: 'Семейный',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Тима' },
            { label: 'Статус', value: 'Семейный' },
            { label: 'Родство', value: 'Дядя' },
            { label: 'Семья', value: 'Есть' },
            { label: 'Характер', value: 'Спокойный' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Есть' },
            { label: 'Опыт', value: 'Обычная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Спокойный' },
            { label: 'Подход', value: 'Стабильный' },
            { label: 'Цели', value: 'Семейное благополучие' },
            { label: 'Приоритет', value: 'Семья' }
        ]
    },
    'unknown-uncle': {
        name: 'Дядя (Неизвестен)',
        avatar: 'https://via.placeholder.com/150/000/fff?text=???',
        level: 'Взрослый',
        status: 'Семейный',
        profession: 'Не указана',
        service: 'Нет',
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
        level: 'Взрослая',
        status: 'Семейная',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Аня' },
            { label: 'Статус', value: 'Семейная' },
            { label: 'Родство', value: 'Тетя' },
            { label: 'Семья', value: 'Замужем' },
            { label: 'Характер', value: 'Эмоциональная' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Замужем' },
            { label: 'Опыт', value: 'Семейная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Эмоциональная' },
            { label: 'Подход', value: 'Прямолинейный' },
            { label: 'Цели', value: 'Семейное благополучие' },
            { label: 'Приоритет', value: 'Семья' }
        ]
    },
    'mira': {
        name: 'Мама Мира',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Мира',
        level: 'Взрослая',
        status: 'Семейная',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Мира' },
            { label: 'Статус', value: 'Семейная' },
            { label: 'Родство', value: 'Мама' },
            { label: 'Семья', value: 'Есть дети' },
            { label: 'Характер', value: 'Независимая' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Есть дети' },
            { label: 'Опыт', value: 'Семейная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Независимая' },
            { label: 'Подход', value: 'Самостоятельный' },
            { label: 'Цели', value: 'Личное счастье' },
            { label: 'Приоритет', value: 'Дети' }
        ]
    },
    'yarik': {
        name: 'Папа Ярик',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Ярик',
        level: 'Высокий',
        status: 'Подполковник',
        profession: 'УМВД',
        service: 'УМВД',
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
        level: 'Взрослая',
        status: 'Крестная',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Камилла' },
            { label: 'Статус', value: 'Крестная' },
            { label: 'Родство', value: 'Крестная мама' },
            { label: 'Семья', value: 'Есть' },
            { label: 'Характер', value: 'Заботливая' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Работает' },
            { label: 'Семья', value: 'Есть' },
            { label: 'Опыт', value: 'Семейная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Заботливая' },
            { label: 'Подход', value: 'Духовный' },
            { label: 'Цели', value: 'Духовное развитие' },
            { label: 'Приоритет', value: 'Вера' }
        ]
    },
    'ronaldo': {
        name: 'Блятик Рональдо',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Рональдо',
        level: 'Молодой',
        status: 'Сын',
        profession: 'Не указана',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Рональдо' },
            { label: 'Статус', value: 'Сын' },
            { label: 'Родство', value: 'Блятик' },
            { label: 'Отец', value: 'Дядя Вадим' },
            { label: 'Характер', value: 'Футбольный фанат' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Не указана' },
            { label: 'Статус', value: 'Учится/работает' },
            { label: 'Семья', value: 'Есть' },
            { label: 'Опыт', value: 'Молодой' }
        ],
        traits: [
            { label: 'Характер', value: 'Активный' },
            { label: 'Подход', value: 'Спортивный' },
            { label: 'Цели', value: 'Развитие' },
            { label: 'Приоритет', value: 'Спорт' }
        ]
    },
    'andrey': {
        name: 'Андрей',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Андрей',
        level: 'Высокий',
        status: 'Полковник',
        profession: 'Военный',
        service: 'Армия',
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
    'arseniy': {
        name: 'Арсений',
        avatar: 'https://via.placeholder.com/150/000/fff?text=Арсений',
        level: 'Обычный',
        status: 'Гражданский',
        profession: 'Обычный человек',
        service: 'Нет',
        basicInfo: [
            { label: 'Имя', value: 'Арсений' },
            { label: 'Статус', value: 'Гражданский' },
            { label: 'Профессия', value: 'Обычный человек' },
            { label: 'Уровень', value: 'Обычный' },
            { label: 'Характер', value: 'Нейтральный' }
        ],
        careerInfo: [
            { label: 'Работа', value: 'Обычная' },
            { label: 'Статус', value: 'Гражданский' },
            { label: 'Профессия', value: 'Не указана' },
            { label: 'Опыт', value: 'Обычная жизнь' }
        ],
        traits: [
            { label: 'Характер', value: 'Спокойный' },
            { label: 'Подход', value: 'Обычный' },
            { label: 'Цели', value: 'Простые' },
            { label: 'Приоритет', value: 'Семья' }
        ]
    }
};

// Текущий активный персонаж
let currentHero = 'fork-chan';

// Функция переключения персонажа
function switchHero(heroId) {
    if (!heroes[heroId]) return;
    
    const hero = heroes[heroId];
    currentHero = heroId;
    
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

    // Добавляем анимацию загрузки страницы
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
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
                switchHero(heroId);
            }
        });
    });
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
