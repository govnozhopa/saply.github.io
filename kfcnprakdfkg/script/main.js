document.addEventListener('DOMContentLoaded', function() {
    

    const learnMoreBtn = document.getElementById('learnMore');
    
    learnMoreBtn.addEventListener('click', function() {
        alert('Событие "Tides of the Abyss" начнется 1 июля и продлится 30 дней. Ежедневные награды и задания будут доступны после входа в систему.');
    });
    
    // Simple carousel functionality
    const carousel = document.querySelector('.rewards-carousel');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const rewardItems = document.querySelectorAll('.reward-item');
    let currentIndex = 0;
    
    function updateCarousel() {
        const itemWidth = rewardItems[0].offsetWidth + 32; // width + gap
        carousel.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < rewardItems.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.style.display = 'none';
    mobileMenuToggle.style.fontSize = '2rem';
    mobileMenuToggle.style.cursor = 'pointer';
    mobileMenuToggle.style.color = '#c9a66b';
    document.querySelector('.main-header').prepend(mobileMenuToggle);
    
    const mainNav = document.querySelector('.main-nav');
    
    function toggleMobileMenu() {
        if (mainNav.style.display === 'none' || mainNav.style.display === '') {
            mainNav.style.display = 'block';
            mobileMenuToggle.innerHTML = '✕';
        } else {
            mainNav.style.display = 'none';
            mobileMenuToggle.innerHTML = '☰';
        }
    }
    
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
            mainNav.style.display = 'none';
        } else {
            mobileMenuToggle.style.display = 'none';
            mainNav.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});