const addMessageToLocalStorage = (message) => {
    try {
        const currentChatListString = localStorage.getItem('messages');
        const chatList = currentChatListString ? JSON.parse(currentChatListString) : [];

        chatList.push(message);
        localStorage.setItem('messages', JSON.stringify(chatList));
    } catch (e) {
        console.error('Ошибка при работе с localStorage: ', e);
    }
}

module.exports = addMessageToLocalStorage;