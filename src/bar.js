export default function bar() {
    // Создаем новый элемент div
    const newDiv = document.createElement('div');
    // Устанавливаем текстовое содержимое элемента
    newDiv.textContent = 'Hello World!';
    // Добавляем элемент в тело документа
    document.body.appendChild(newDiv);
}