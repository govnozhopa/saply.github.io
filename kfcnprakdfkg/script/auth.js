document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const calendarLink = document.getElementById('calendarLink');
    const rememberMe = document.getElementById('rememberMe');

    // Проверяем, есть ли сохраненные данные
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedAuth = localStorage.getItem('abyssAuth');
        if (savedAuth) {
            const { username, password } = JSON.parse(savedAuth);
            document.getElementById('username').value = username;
            document.getElementById('password').value = password;
            rememberMe.checked = true;
        }
    }

    // Переключение между вкладками - исправленная версия
    loginTab.addEventListener('click', function(e) {
        e.preventDefault();
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });

    registerTab.addEventListener('click', function(e) {
        e.preventDefault();
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // Проверка входа
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const savedAuth = localStorage.getItem('abyssAuth');

        if (!username || !password) {
            alert('Поля не могут быть пустыми!');
            return;
        }

        if (!savedAuth) {
            alert('Сначала зарегистрируйтесь!');
            registerTab.click();
            return;
        }

        const authData = JSON.parse(savedAuth);
        
        if (username !== authData.username || password !== authData.password) {
            alert('Неверное имя пользователя или пароль!');
            return;
        }

        if (rememberMe.checked) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }

        alert('Добро пожаловать в Бездну!');
        window.location.href = '../other/calendar.html';
    });

    // Регистрация
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов!');
            return;
        }

        localStorage.setItem('abyssAuth', JSON.stringify({ username, password }));
        alert('Регистрация завершена! Теперь войдите.');
        loginTab.click();
        
        document.getElementById('username').value = username;
        document.getElementById('password').value = password;
    });
    
    function checkAuth() {
        const authData = JSON.parse(localStorage.getItem('abyssAuth'));
        if (authData && authData.username && authData.password) {
            document.getElementById('username').value = authData.username || '';
            if (localStorage.getItem('rememberMe') === 'true') {
                document.getElementById('password').value = authData.password || '';
                rememberMe.checked = true;
            }
        }
    }

   // Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

burgerMenu.addEventListener('click', function() {
    // Переключаем класс active
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Блокируем скролл страницы при открытом меню
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
});

// Закрываем меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Проверяем размер экрана при загрузке
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'flex';
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

});

    // Защита календаря
    calendarLink.addEventListener('click', (e) => {
        const authData = localStorage.getItem('abyssAuth');
        if (!authData) {
            e.preventDefault();
            alert('Сначала войдите в систему!');
        }
    });