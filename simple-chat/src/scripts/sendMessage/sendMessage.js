const addMessageToLocalStorage = require('../addMessageToLocalStorage/addMessageToLocalStorage');

const sendMessage = () => {
    const chat = document.querySelector('.chat');
    const input = document.querySelector('.chat_input');
    const chatList = document.querySelector('.chat_list');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.value || !input.value.trim().length) {
            return;
        }

        const messageText = input.value.trim();
        const message = {
            author: 'Я',
            text: messageText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const messageElement = document.createElement('div');
        messageElement.classList.add('messageItem');
        messageElement.innerHTML = `
            <div class="sender">${message.author}</div>
            <div class="text">${message.text}</div>
            <div class="time">${message.timestamp}</div>
        `;
        chatList.append(messageElement);

        chatList.scrollTop = chatList.scrollHeight;

        addMessageToLocalStorage(message);

        input.value = '';
    }

    chat.addEventListener('submit', handleSubmit);
}

module.exports = sendMessage;
