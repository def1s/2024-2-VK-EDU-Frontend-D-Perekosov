import './styles/index.scss';

const renderMessagesFromLocalStorage = require('./scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage');
const sendMessage = require('./scripts/sendMessage/sendMessage');

renderMessagesFromLocalStorage();
sendMessage();