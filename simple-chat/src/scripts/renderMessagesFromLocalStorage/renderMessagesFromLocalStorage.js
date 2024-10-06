const renderMessagesFromLocalStorage = () => {
    const chatList = document.querySelector('.chat_list');

    try {
        const messagesString = localStorage.getItem('messages');
        const messages = messagesString ? JSON.parse(messagesString) : [];

        if (!messages.length) {
            return;
        }

        messages.forEach((message) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('messageItem');
            messageElement.innerHTML = `
                <div class="sender">${message.author}</div>
                <div class="text">${message.text}</div>
                <div class="time">${message.timestamp}</div>
            `;
            chatList.append(messageElement);
        });

        chatList.scrollTop = chatList.scrollHeight;
    } catch (e) {
        console.error('Ошибка при чтении из localStorage: ', e);
    }
}

module.exports = renderMessagesFromLocalStorage;
