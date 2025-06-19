document.addEventListener('DOMContentLoaded', function() {
    // Проверка авторизации
    const auth = JSON.parse(localStorage.getItem('abyssAuth'));
    if (!auth) {
        alert('Доступ запрещен! Сначала войдите в систему.');
        window.location.href = '../other/sign.html';
        return;
    }

    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Таймер обратного отсчета
    function updateTimer() {
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    setInterval(updateTimer, 1000);
    updateTimer();

    // Обработка получения подарков
    document.querySelectorAll('.claim-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const dayCard = this.closest('.calendar-day');
            
            if (dayCard.classList.contains('claimed')) {
                alert('Вы уже получили этот подарок!');
                return;
            }
            
            dayCard.classList.add('claimed');
            this.textContent = 'Получено';
            this.style.background = '#2a4a3a';
            this.style.cursor = 'not-allowed';
            
            const prizeName = dayCard.querySelector('h3').textContent;
            alert(`Вы получили: ${prizeName}`);
            
            // Сохранение в localStorage
            const claimedDays = JSON.parse(localStorage.getItem('claimedDays')) || [];
            const dayNumber = dayCard.querySelector('.day-number').textContent;
            if (!claimedDays.includes(dayNumber)) {
                claimedDays.push(dayNumber);
                localStorage.setItem('claimedDays', JSON.stringify(claimedDays));
            }
        });
    });
    
    // Восстановление полученных подарков
    const claimedDays = JSON.parse(localStorage.getItem('claimedDays')) || [];
    claimedDays.forEach(day => {
        const dayCard = document.querySelector(`.day-number:contains("${day}")`)?.closest('.calendar-day');
        if (dayCard) {
            dayCard.classList.add('claimed');
            const btn = dayCard.querySelector('.claim-btn');
            btn.textContent = 'Получено';
            btn.style.background = '#2a4a3a';
            btn.style.cursor = 'not-allowed';
        }
    });
});