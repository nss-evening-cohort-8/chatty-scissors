import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js";
import input from "../components/input.js";
import color from "./colorpicker.js";
import util from "./util.js";

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById('large-theme');
const clearButton = document.getElementById('clear-buton');
const newHex = document.getElementById("secret-div");


darkButton.addEventListener("change", function () {
  if (this.checked) {
    themes.darkTheme();
  } else {
    themes.darkTheme();
  }
});

largeButton.addEventListener('change', function () {
    if (this.checked) {
        themes.largeTheme()
    } else {
        themes.largeTheme()
    }
});

const modalTheme = () => {
  const modalBack = document.getElementById("modal-background-color");
  const modalText = document.getElementById("modal-text-color");
  const modalSubmit = document.getElementById("modal-save");
  const pageBody = document.getElementsByTagName("body");
  const printColorBox = () => {
    
    util.printToDom(`<div id="color-picker" class="cp-default"></div>`, 'color-box')
    color.ColorPicker(
      document.getElementById('color-picker'),
      function(hex, hsv, rgb) {
          newHex.style.backgroundColor = hex;        // #HEX
    });
  };
  modalBack.addEventListener("click", printColorBox);
  modalSubmit.addEventListener("click", () => {
    
  })
};

modalTheme()

const clearButtonEvent = () => {
  clearButton.addEventListener('click', chatbox.clearInput);
}

const activateEvents = () => {
  clearButtonEvent();
};

const returnKey = document.getElementById('text-box');
returnKey.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      input.navBarReturnKey()
    }
  });
 

  
  

export default { activateEvents };