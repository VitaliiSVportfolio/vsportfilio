// Показ приветственного сообщения
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to My Website!");
});
// Обработчик для кнопки
document.getElementById("actionButton").addEventListener("click", () => {
    alert("You clicked the button!");
});// Обработчик отправки формы
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения полей формы
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Выводим сообщение об успешной отправке
    alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
    
    // Очищаем форму после отправки
    document.getElementById("contactForm").reset();
});
