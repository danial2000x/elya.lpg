// Логика для бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active'); // Открытие/закрытие меню
});

// Анимация появления секции при прокрутке
const sections = document.querySelectorAll('.about');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach((section) => observer.observe(section));

const serviceCards = document.querySelectorAll('.service-card');

document.getElementById('year').textContent = new Date().getFullYear();

const questions = document.querySelectorAll('.faq .question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    
    // Скрываем все ответы
    document.querySelectorAll('.faq .answer').forEach(ans => ans.style.display = 'none');
    
    // Показываем текущий ответ, если он еще не открыт
    if (!isVisible) {
      answer.style.display = 'block';
    }
  });
});