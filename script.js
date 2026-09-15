// Комментарий 1: Массив объектов с терминологией распределенных систем (Hajusrakendused)
const vocabulary = [
    { est: "hajusrakendus", ru: "распределенное приложение" },
    { est: "mikroteenus", ru: "микросервис" },
    { est: "koormustasaaja", ru: "балансировщик нагрузки" },
    { est: "sõnumijärjekord", ru: "очередь сообщений" },
    { est: "andmebaas", ru: "база данных" },
    { est: "päring", ru: "запрос" },
    { est: "vastus", ru: "ответ" },
    { est: "autentimine", ru: "аутентификация" }
];

// Глобальные переменные для хранения текущих выбранных слов
let currentEstWordObj = null;
let currentRuWordObj = null;

// Комментарий 2: Функция получения случайного элемента из массива
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
}

// Комментарий 3: Функция генерации случайных слов для обеих колонок при загрузке
function initQuiz() {
    currentEstWordObj = getRandomWord();
    currentRuWordObj = getRandomWord();

    document.getElementById("est-word").textContent = currentEstWordObj.est;
    document.getElementById("ru-word").textContent = currentRuWordObj.ru;
}

// Комментарий 4: Функция проверки перевода с эстонского на русский (Колонка 1)
function checkEstToRu() {
    const userInput = document.getElementById("ru-input").value.trim().toLowerCase();
    const resultElement = document.getElementById("ru-result");

    // Комментарий 5: Сравнение введенного значения с правильным ответом
    if (userInput === currentEstWordObj.ru.toLowerCase()) {
        resultElement.textContent = "Õige! (Правильно!)";
        resultElement.className = "result correct";
    } else {
        resultElement.textContent = `Vale! Õige vastus: ${currentEstWordObj.ru}`;
        resultElement.className = "result incorrect";
    }
}

// Комментарий 6: Функция проверки перевода с русского на эстонский (Колонка 2)
function checkRuToEst() {
    const userInput = document.getElementById("est-input").value.trim().toLowerCase();
    const resultElement = document.getElementById("est-result");

    // Комментарий 7: Проверка корректности введенного слова на эстонском
    if (userInput === currentEstWordObj.est.toLowerCase()) {
        resultElement.textContent = "Õige! (Правильно!)";
        resultElement.className = "result correct";
    } else {
        resultElement.textContent = `Vale! Õige vastus: ${currentRuWordObj.est}`;
        resultElement.className = "result incorrect";
    }
}

// Комментарий 8: Инициализация игры при первом запуске скрипта
initQuiz();