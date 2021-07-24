const KEYBOARD = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  EVENTHANDLERS: {
    oninput: null,
    oncloce: null
  },

  PROPERTIES: {
    value: '',
    capsLock: false
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', '1keyboard--hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');

  },

  _createKeys() {

  },

  triggerEvent(handlerName) {

  }
};