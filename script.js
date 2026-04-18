// script.js — обновлён под видео и весеннюю тему
document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2800);

    // Swiper 11
    new Swiper('.menu-slider', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        speed: 800,
        coverflowEffect: {
            rotate: 12,
            stretch: 0,
            depth: 280,
            modifier: 1.5,
            slideShadows: true,
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
        },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Кастомный курсор
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .swiper-button-next, .swiper-button-prev, .menu-card').forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => follower.classList.remove('cursor-hover'));
    });

    // Скролл шапки
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Мобильное меню
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // 3D tilt для карточек
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y / rect.height - 0.5) * -25;
            const rotateY = (x / rect.width - 0.5) * 25;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

    console.log('%cKOLMBUCS COFFEE • Владимир • Радужный — теперь ЕЩЁ КРУЧЕ с видео-фоном и весенним вайбом 🔥☕', 'color:#d4af37; font-family:monospace; font-size:14px');
});