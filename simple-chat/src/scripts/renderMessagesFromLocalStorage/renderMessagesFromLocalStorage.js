const renderMessage = require('../renderMessage/renderMessage');

const renderMessagesFromLocalStorage = () => {
    const messagesList = document.querySelector('.messages');

    try {
        const messagesString = localStorage.getItem('messages');
        const messages = messagesString ? JSON.parse(messagesString) : [];

        if (!messages.length) {
            return;
        }

        messages.forEach((message) => {
            renderMessage(message);
        });

        messagesList.scrollTop = messagesList.scrollHeight;
    } catch (e) {
        console.error('Ошибка при чтении из localStorage: ', e);
    }
}

module.exports = renderMessagesFromLocalStorage;
