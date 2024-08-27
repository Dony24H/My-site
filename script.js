document.addEventListener('DOMContentLoaded', function() {
    // Создаем кнопку для вставки изображения
    const button = document.createElement('button');
    button.textContent = 'Вставить картинку';
    document.body.appendChild(button);

    // Обработчик нажатия на кнопку
    button.addEventListener('click', function() {
        const imageUrl = prompt('https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg');
        if (imageUrl) {
            // Создаем элемент img
            const img = document.createElement('img');
            img.src = imageUrl;
            img.style.width = '100%'; // Вы можете изменить размер изображения
            img.style.filter = 'blur(40px)'; // Размытие на 40%
            
            // Вставляем изображение в тело документа
            document.body.appendChild(img);
        }
    });
});

