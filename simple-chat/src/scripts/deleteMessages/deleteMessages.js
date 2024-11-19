const deleteMessages = () => {
    const deleteBtn = document.querySelector('.deleteMessages');
    const messagesList = document.querySelector('.messages');

    const onDelete = () => {
        messagesList.innerHTML = '';
        localStorage.removeItem('messages');
    }

    deleteBtn.addEventListener('click', onDelete);
}

module.exports = deleteMessages;