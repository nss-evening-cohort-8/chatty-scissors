import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js";
import input from "../components/input.js";

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById("large-theme");
const clearButton = document.getElementById("clear-buton");

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