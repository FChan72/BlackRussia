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
