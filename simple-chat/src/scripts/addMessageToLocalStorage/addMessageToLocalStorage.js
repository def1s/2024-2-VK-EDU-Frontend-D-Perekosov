const addMessageToLocalStorage = (message) => {
    try {
        const currentMessagesString = localStorage.getItem('messages');
        const messages = currentMessagesString ? JSON.parse(currentMessagesString) : [];

        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    } catch (e) {
        console.error('Ошибка при работе с localStorage: ', e);
    }
}

module.exports = addMessageToLocalStorage;