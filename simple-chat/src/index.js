import './styles/index.scss';

const renderMessagesFromLocalStorage = require('./scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage');
const sendMessage = require('./scripts/sendMessage/sendMessage');
const deleteMessages = require('./scripts/deleteMessages/deleteMessages');

renderMessagesFromLocalStorage();
sendMessage();
deleteMessages();