const renderMessage = (message) => {
    const messagesList = document.querySelector('.messages');
    const messageElement = document.createElement('div');

    messageElement.innerHTML += `<div class="sender">${message.author}</div>`;

    if (message?.type === 'text') {
        messageElement.innerHTML += `<div class="text">${message.text.replace(/\n/g, '<br>')}</div>`;
    } else if (message?.type === 'image') {
        messageElement.innerHTML += `<img class="image" src=${message.image} alt="message image"/>`;
    } else {
        messageElement.innerHTML += `<div class="text error">Не удалось загрузить сообщение!</div>`;
    }

    messageElement.classList.add('messages_item');
    messageElement.innerHTML += `<div class="time">${message.timestamp}</div>`;

    messagesList.append(messageElement);
}

module.exports = renderMessage;