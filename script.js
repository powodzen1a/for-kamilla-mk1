document.getElementById("startButton").addEventListener("click", function() {
    // Исчезновение кнопки
    this.style.display = "none";

    // Запуск анимации цветка
    let flower = document.getElementById("flower");
    flower.style.display = "block"; // Показываем SVG
    flower.classList.add("animate"); // Добавляем класс анимации

    // Запускаем вибрацию на 5 секунд (вибрация в цикле)
    if (navigator.vibrate) {
        navigator.vibrate([500, 100, 500, 100, 500, 100, 500, 100, 500]); 
    }

    // Показываем текст через 3 секунды (после анимации цветка)
    setTimeout(() => {
        let message = document.getElementById("message");
        message.classList.add("animate-text"); // Плавное появление текста
    }, 3000);
});