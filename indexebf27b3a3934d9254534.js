/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar renderMessagesFromLocalStorage = __webpack_require__(/*! ./scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage */ \"./src/scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage.js\");\nvar sendMessage = __webpack_require__(/*! ./scripts/sendMessage/sendMessage */ \"./src/scripts/sendMessage/sendMessage.js\");\nrenderMessagesFromLocalStorage();\nsendMessage();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/addMessageToLocalStorage/addMessageToLocalStorage.js":
/*!**************************************************************************!*\
  !*** ./src/scripts/addMessageToLocalStorage/addMessageToLocalStorage.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("var addMessageToLocalStorage = function addMessageToLocalStorage(message) {\n  try {\n    var currentChatListString = localStorage.getItem('messages');\n    var chatList = currentChatListString ? JSON.parse(currentChatListString) : [];\n    chatList.push(message);\n    localStorage.setItem('messages', JSON.stringify(chatList));\n  } catch (e) {\n    console.error('Ошибка при работе с localStorage: ', e);\n  }\n};\nmodule.exports = addMessageToLocalStorage;\n\n//# sourceURL=webpack:///./src/scripts/addMessageToLocalStorage/addMessageToLocalStorage.js?");

/***/ }),

/***/ "./src/scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage.js":
/*!**************************************************************************************!*\
  !*** ./src/scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("var renderMessagesFromLocalStorage = function renderMessagesFromLocalStorage() {\n  var chatList = document.querySelector('.chat_list');\n  try {\n    var messagesString = localStorage.getItem('messages');\n    var messages = messagesString ? JSON.parse(messagesString) : [];\n    if (!messages.length) {\n      return;\n    }\n    messages.forEach(function (message) {\n      var messageElement = document.createElement('div');\n      messageElement.classList.add('messageItem');\n      messageElement.innerHTML = \"\\n                <div class=\\\"sender\\\">\".concat(message.author, \"</div>\\n                <div class=\\\"text\\\">\").concat(message.text, \"</div>\\n                <div class=\\\"time\\\">\").concat(message.timestamp, \"</div>\\n            \");\n      chatList.append(messageElement);\n    });\n    chatList.scrollTop = chatList.scrollHeight;\n  } catch (e) {\n    console.error('Ошибка при чтении из localStorage: ', e);\n  }\n};\nmodule.exports = renderMessagesFromLocalStorage;\n\n//# sourceURL=webpack:///./src/scripts/renderMessagesFromLocalStorage/renderMessagesFromLocalStorage.js?");

/***/ }),

/***/ "./src/scripts/sendMessage/sendMessage.js":
/*!************************************************!*\
  !*** ./src/scripts/sendMessage/sendMessage.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var addMessageToLocalStorage = __webpack_require__(/*! ../addMessageToLocalStorage/addMessageToLocalStorage */ \"./src/scripts/addMessageToLocalStorage/addMessageToLocalStorage.js\");\nvar sendMessage = function sendMessage() {\n  var chat = document.querySelector('.chat');\n  var input = document.querySelector('.chat_input');\n  var chatList = document.querySelector('.chat_list');\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    if (!input.value || !input.value.trim().length) {\n      return;\n    }\n    var messageText = input.value.trim();\n    var message = {\n      author: 'Я',\n      text: messageText,\n      timestamp: new Date().toLocaleTimeString([], {\n        hour: '2-digit',\n        minute: '2-digit'\n      })\n    };\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('messageItem');\n    messageElement.innerHTML = \"\\n            <div class=\\\"sender\\\">\".concat(message.author, \"</div>\\n            <div class=\\\"text\\\">\").concat(message.text, \"</div>\\n            <div class=\\\"time\\\">\").concat(message.timestamp, \"</div>\\n        \");\n    chatList.append(messageElement);\n    chatList.scrollTop = chatList.scrollHeight;\n    addMessageToLocalStorage(message);\n    input.value = '';\n  };\n  chat.addEventListener('submit', handleSubmit);\n};\nmodule.exports = sendMessage;\n\n//# sourceURL=webpack:///./src/scripts/sendMessage/sendMessage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \":root {\\n  --message-input-height: 50px;\\n  --background: #f5f5f7;\\n  --text-color: #1c1c1e;\\n  --message-bg: #fff;\\n  --sender-color: #007aff;\\n  --time-color: #8e8e93;\\n  --message-padding: 10px;\\n  --border-radius: 20px;\\n  --border-color: #e5e5ea;\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--background);\\n  color: var(--text-color);\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 15px;\\n  font-weight: 400;\\n  line-height: 20px;\\n}\\n\\n.container {\\n  margin: 0 auto;\\n  max-width: 1000px;\\n  height: 100vh;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\\n  border-radius: 8px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.main {\\n  display: flex;\\n  align-items: center;\\n  flex: 1;\\n  overflow: scroll;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  padding: 16px;\\n  background-color: #f5f5f5;\\n  border-bottom: 1px solid #ddd;\\n}\\n\\n.arrow {\\n  margin-right: 5px;\\n}\\n\\n.user {\\n  display: flex;\\n  align-items: center;\\n}\\n.user_name {\\n  font-weight: bold;\\n}\\n.user_avatar {\\n  font-size: 40px;\\n  margin-right: 5px;\\n}\\n.user_status {\\n  font-size: 12px;\\n  color: #888;\\n}\\n\\n.chat {\\n  height: 100%;\\n  width: 100%;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n  background-color: #fff;\\n  padding-bottom: 70px;\\n}\\n.chat_list {\\n  overflow-y: auto;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n.chat .messageItem {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: var(--message-bg);\\n  border: 1px solid var(--border-color);\\n  border-radius: var(--border-radius);\\n  padding: var(--message-padding);\\n  max-width: 80%;\\n  min-width: 10%;\\n  align-self: flex-end;\\n}\\n.chat .messageItem .sender {\\n  font-size: 14px;\\n  color: var(--sender-color);\\n  margin-bottom: 5px;\\n}\\n.chat .messageItem .text {\\n  font-size: 15px;\\n  color: var(--text-color);\\n  margin-bottom: 5px;\\n}\\n.chat .messageItem .time {\\n  font-size: 12px;\\n  color: var(--time-color);\\n  text-align: right;\\n}\\n.chat_input {\\n  height: var(--message-input-height);\\n  width: 95%;\\n  bottom: 20px;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  position: absolute;\\n  background-color: var(--message-bg);\\n  padding: 10px;\\n  font-size: 15px;\\n  outline: none;\\n  border: solid 1px #e2e2e4;\\n  border-radius: 20px;\\n}\\n\\n@media (max-width: 600px) {\\n  .chat {\\n    max-width: 100%;\\n  }\\n  .messageItem {\\n    max-width: 90%;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;