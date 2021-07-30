// TODO LIST
// Проверить код на ковычки, привести к однообразию
// функции, везде юзать стрелочные
// const с большой
const KEYBOARD = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  EVENTHANDLERS: {
    oninput: null,
    onclose: null
  },

  PROPERTIES: {
    value: '',
    capsLock: false
  },

  init() {
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "space"
    ];

    const createIconHTML = (icon_name) => {
      return `<i class ="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
    });
  },

  _triggerEvent(handlerName) {

  },

  _toggleCapsLock() {

  },

  open(initialValue, oninput, onclose) {

  }
};