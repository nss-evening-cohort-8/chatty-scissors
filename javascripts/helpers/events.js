import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js";
import input from "../components/input.js";
import color from "./colorpicker.js";
import util from "./util.js";

const darkButton = document.getElementById("dark-theme");
<<<<<<< HEAD
const largeButton = document.getElementById('large-theme');
const clearButton = document.getElementById('clear-buton');
const newHex = document.getElementById("secret-div");

=======
const largeButton = document.getElementById("large-theme");
const clearButton = document.getElementById("clear-buton");
>>>>>>> master

darkButton.addEventListener("change", function () {
  if (this.checked) {
    themes.darkTheme();
  } else {
    themes.darkTheme();
  }
});

largeButton.addEventListener("change", function() {
  if (this.checked) {
    themes.largeTheme();
  } else {
    themes.largeTheme();
  }
});

const modalTheme = () => {
  const modalBack = document.getElementById("modal-background-color");
  const modalText = document.getElementById("modal-text-color");
  const modalSubmit = document.getElementById("modal-save");
<<<<<<< HEAD
  const modalDefault = document.getElementById("modal-default")
  const backgroundChanger = () => {
    document.getElementById('color-box').innerHTML = "";
    util.printToDom(`<div id="color-picker" class="cp-default"></div>`, 'color-box')
    color.ColorPicker(
      document.getElementById('color-picker'),
      function(hex, hsv, rgb) {
        newHex.style.backgroundColor = hex;
    });
  };
  const textChanger = () => {
    document.getElementById('color-box').innerHTML = "";
    util.printToDom(`<div id="color-picker" class="cp-default"></div>`, 'color-box')
    color.ColorPicker(
      document.getElementById('color-picker'),
      function(hex, hsv, rgb) {
        newHex.style.color = hex;
    });
  };
  modalBack.addEventListener("click", backgroundChanger);
  modalText.addEventListener("click", textChanger);
  modalSubmit.addEventListener("click", () => {
    document.getElementById('color-box').innerHTML = "";
    document.body.style.backgroundColor = newHex.style.backgroundColor;
    document.getElementById("message-div").style.color = newHex.style.color;
  })
  modalDefault.addEventListener("click", () => {
    document.getElementById('color-box').innerHTML = "";
    document.body.style.backgroundColor = "lightgray";
    document.getElementById("message-div").style.color ="#fff";
  })
=======
  const pageBody = document.getElementsByTagName("body");

  modalSubmit.addEventListener("click", () => {
    if (modalBack.checked === true) {
      pageBody[0].style.backgroundColor = "#bcddff";
      console.log("i worked");
    } else {
      pageBody[0].style.backgroundColor = "lightgray";
    }
    if (modalText.checked === true) {
      document.getElementById("message-div").style.color = "lightsalmon";
    } else {
      document.getElementById("message-div").style.color = "#fff";
    }
  });
>>>>>>> master
};

modalTheme();

const clearButtonEvent = () => {
  clearButton.addEventListener("click", chatbox.clearMessages);
};

const editButtonEvent = () => {
  let editButtons = document.getElementsByClassName("edit");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", (e) => {
      chatbox.setEditValue(true);
      chatbox.editText(e);
    });
  }
};

const findMsg = (e) => {
  console.log(e.target);
  e.target.parentNode.remove();
}

const returnKey = document.getElementById('text-box');
returnKey.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && !chatbox.getEditValue()) {
      input.navBarReturnKey()
    } else if (event.keyCode === 13 && chatbox.getEditValue()){
      chatbox.editBlur(event);
chatbox.deleteFunct();
    }
  });

const activateEvents = () => {
  clearButtonEvent();
  editButtonEvent();
};
 
export default { activateEvents,findMsg };