// Función para crear corazones animados
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// Actualizar el contador de tiempo juntos
function updateCounter() {
    const startDate = new Date('2024-08-23T00:00:00');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let message = '';
    if (years > 0) {
        message += `${years} año${years > 1 ? 's' : ''}, `;
    }
    message += `${months} mes${months !== 1 ? 'es' : ''}, ${days} día${days !== 1 ? 's' : ''}, `;
    message += `${hours} hora${hours !== 1 ? 's' : ''}, ${minutes} minuto${minutes !== 1 ? 's' : ''} y ${seconds} segundo${seconds !== 1 ? 's' : ''} ❤️`;

    document.getElementById('timeTogether').textContent = message;
}
setInterval(updateCounter, 1000);
updateCounter();

// Rotación de citas de amor
const quotes = [
    "Eres la razón de mi sonrisa.",
    "Cada momento contigo es un tesoro.",
    "Nuestro amor es infinito y hermoso.",
    "Haces mis días más brillantes.",
    "Tu amor llena mi vida de alegría."
];
let currentQuoteIndex = 0;
function updateQuote() {
    const quoteElement = document.getElementById('quoteText');
    quoteElement.classList.remove('fade');
    void quoteElement.offsetWidth; // Forzar reflow para reiniciar la transición
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = `"${quotes[currentQuoteIndex]}"`;
    quoteElement.classList.add('fade');
}
setInterval(updateQuote, 3000);

// Lógica para el modal de la galería
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Lógica para el modal de la carta de amor
const loveLetterModal = document.getElementById('loveLetterModal');
const openLoveLetter = document.getElementById('openLoveLetter');
const closeLoveLetter = document.getElementById('closeLoveLetter');

openLoveLetter.addEventListener('click', () => {
    loveLetterModal.style.display = 'flex';
});
closeLoveLetter.addEventListener('click', () => {
    loveLetterModal.style.display = 'none';
});
loveLetterModal.addEventListener('click', (e) => {
    if (e.target === loveLetterModal) {
        loveLetterModal.style.display = 'none';
    }
});

// Animación secuencial al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const loadElements = document.querySelectorAll('.animate-on-load');
    loadElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('in-view');
        }, index * 800); // Cada elemento aparece 1 segundo después que el anterior
    });
});
