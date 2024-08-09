// Отримуємо посилання на елемент текстового поля за допомогою ID
const input_textarea = document.querySelector("#input-textarea");

// Отримуємо посилання на елемент для відображення кількості слів за допомогою ID
const word_count = document.querySelector("#word-count");

// Отримуємо посилання на елемент для відображення кількості символів за допомогою ID
const charac_count = document.querySelector("#charac-count");

// Функція для підрахунку кількості символів та слів
function count() {
    // Отримуємо значення тексту з текстового поля
    const value_text = input_textarea.value;

    // Визначаємо довжину тексту (кількість символів)
    const text_length = value_text.length;

    // Обрізаємо пробіли з початку і кінця тексту
    let new_value_text = value_text.trim();

    // Видаляємо всі розділові знаки з тексту
    new_value_text = value_text.replace(/[.,!?"'=_`~:—;*%#@$&^*+(){}«»-]/g, "");

    // Розбиваємо текст на масив слів, використовуючи пробіли як роздільники
    let words = new_value_text.trim().split(' ');

    // Видаляємо останній елемент масиву, якщо він порожній (якщо текст закінчується пробілом)
    if (words[words.length - 1] == "") {
        words.splice(words.length - 1, words.length - 1);
    }

    // Визначаємо кількість слів
    const words_count = words.length;

    // Відображаємо кількість символів у відповідному елементі HTML
    charac_count.innerHTML = text_length;

    // Відображаємо кількість слів у відповідному елементі HTML
    word_count.innerHTML = words_count;
}

// Викликаємо функцію count щоразу, коли користувач вводить текст у textarea
input_textarea.oninput = count;
