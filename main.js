/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 77:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/components/game/game.js
class Game {
  constructor(playground) {
    this.playground = playground;
    this.bumpGoblin = this.bumpGoblin.bind(this);
    this.count = 0;
    // Добавляем обработчик событий в конструкторе
    document.addEventListener('click', this.bumpGoblin);
  }
  bumpGoblin(e) {
    const goblin = document.querySelector('.playground-img');
    if (e) {
      if (goblin && e.target.classList.contains('playground-img')) {
        this.updateScore();
        const element = e.target.closest('li');
        if (element && element.firstElementChild) {
          element.firstElementChild.remove(); // удаляем гоблина при попадании
        }
      }
    }
    return this.count;
  }
  updateScore() {
    // Обновляем счет
    this.count = this.scoring(this.count);
  }
  scoring(count) {
    count++;
    return count;
  }
}
;// CONCATENATED MODULE: ./src/components/playground/playground.js


let countGoblin = 0;
class PlayGround {
  constructor() {
    // Привязываем методы к текущему экземпляру класса
    this.moveGoblin = this.moveGoblin.bind(this);
  }
  moveGoblin() {
    let goblin = document.querySelector('.playground-img');
    if (goblin === null) {
      goblin = this.createGoblin();
    }
    const collectionElements = document.querySelectorAll('.playground-item');
    let positionRandom = Math.floor(Math.random() * collectionElements.length);
    for (let i = 0; i <= collectionElements.length - 1; i++) {
      if (collectionElements[i].firstElementChild) {
        if (i === positionRandom) {
          while (i === positionRandom) {
            positionRandom = Math.floor(Math.random() * collectionElements.length);
          }
        }
        collectionElements[i].firstElementChild.remove();
      }
    }
    collectionElements[positionRandom].append(goblin);
    countGoblin++;
    return countGoblin;
  }
  createGoblin() {
    const newElem = document.createElement('img');
    newElem.src = __webpack_require__(77);
    newElem.classList.add('playground-img');
    return newElem;
  }
}
;// CONCATENATED MODULE: ./src/components/cursor/cursor.js
class Cursor {
  constructor() {
    this.cursor = document.querySelector('.custom-cursor');
    this.moveMouse = this.moveMouse.bind(this);
    document.addEventListener('mousemove', this.moveMouse);
  }
  moveMouse(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



let point = 0;
const cursor = new Cursor();
document.addEventListener('DOMContentLoaded', () => {
  const goblin = new PlayGround(document.querySelector('.playground'));
  const game = new Game(goblin);
  let count = 0;
  const intervalId = setInterval(() => {
    goblin.moveGoblin();
    point = game.bumpGoblin();
    count++;
    const myVariable = `количество попаданий в гоблина: ${point}`;
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = myVariable;
    if (point === 5) {
      clearInterval(intervalId); // Останавливаем выполнение setInterval
      alert('Игра завершена. Вы поймали 5 гоблинов.');
      window.location.reload();
    } else if (count === 6) {
      clearInterval(intervalId); // Останавливаем выполнение setInterval
      alert('Игра завершена. Вы пропустили 5 гоблинов.');
      window.location.reload();
    }
  }, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;