const addMessageToLocalStorage = require('../addMessageToLocalStorage/addMessageToLocalStorage');
const renderMessage = require('../renderMessage/renderMessage');

const sendMessage = () => {
    const input = document.querySelector('.chat_input');
    const messages = document.querySelector('.messages');
    const fileInput = document.querySelector('.chat_file');
    const addFileBtn = document.querySelector('.addFile');

    const onSendMessage = (message) => {
        renderMessage(message);

        messages.scrollTop = messages.scrollHeight;

        addMessageToLocalStorage(message);

        input.value = '';
        fileInput.value = '';
    }

    const textMessageHandler = () => {
        if (!input.value || !input.value.trim().length) {
            return;
        }

        const messageText = input.value.trim();
        const message = {
            type: 'text',
            author: 'Я',
            text: messageText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        onSendMessage(message);
    }

    const imageMessageHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function() {
                const message = {
                    type: 'image',
                    author: 'Я',
                    image: reader.result,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };

                onSendMessage(message);
            };

            reader.onerror = function(error) {
                console.log('Error: ', error);
            };
        }
    }

    const onEnter = (e) => {
        // если shift нажат, то будет работать как перенос строки
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            textMessageHandler();
        }
    }

    const handleFile = () => {
        fileInput.click();
    }

    input.addEventListener('keydown', onEnter);
    addFileBtn.addEventListener('click', handleFile);
    fileInput.addEventListener('change', imageMessageHandler);
}

module.exports = sendMessage;
