const messages = [
    "Ты самая красивая 💕",
    "Я так скучаю по тебе 💖",
    "Ты делаешь меня самым счастливым🌟",
    "Ты моя звездочка 🌟",
    "Ты мой котик 🐱",
    "Ты особенная и уникальная! ✨",
    "Прости меня жаным❤️",
    "Ты мой маленький рай на земле 🌈",
    "Ты моя радость и счастье 🌺",
    "Ты моя любовь и моя жизнь 💗",
    "Ты очень нужна мне 💖",
    "Жаным менин келген күнүмдүн эң махабатты күнү болду 🌹",
    "Моя гордость самая лучшая 💖",
    "Ты мой ангелочек 👼",
    "Ты моя сладость 🍭",
    "Ты мой малыш 🍼",
    "Ты моя маленькая принцесса 👸",   
];

function newMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}

function hug() {
    const hugDiv = document.getElementById("hug-animation");
    const audio = document.getElementById("audio");

    hugDiv.style.display = "block";
    hugDiv.innerText = " Обнимаю тебя крепко! 💖";
    audio.play();
    
    setTimeout(() => {
        hugDiv.style.display = "none";
    }, 3000);
}

// Таймер с момента последней встречи (24 февраля 2025)
function lastMeetTimer() {
    const lastMeetDate = new Date("2025-02-24T00:00:00"); // Дата последней встречи
    const now = new Date();
    const diff = now - lastMeetDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText = 
        `Мы не виделись уже: ${days} дней, ${hours} часов, ${minutes} минут и ${seconds} секунд 💔`;
}

// Таймер до следующей встречи (23 июня 2025)
function nextMeetTimer() {
    const nextMeetDate = new Date("2025-06-23T00:00:00"); // Дата следующей встречи
    const now = new Date();
    const diff = nextMeetDate - now;

    if (diff <= 0) {
        document.getElementById("next-meet-timer").innerText = "Ура! Сегодня наша встреча! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("next-meet-timer").innerText = 
        `До нашей встречи осталось: ${days} дней, ${hours} часов, ${minutes} минут и ${seconds} секунд 💕`;
}

// Показываем секретное послание
function showSecret() {
    const secret = document.getElementById("secret-message");
    secret.classList.toggle("hidden");
}

// Обновлять таймеры каждую секунду
setInterval(lastMeetTimer, 1000);
setInterval(nextMeetTimer, 1000);
lastMeetTimer();
nextMeetTimer();