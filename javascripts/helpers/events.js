import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js";

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById("large-theme");
const clearButton = document.getElementById("clear-buton");
const textBox = document.getElementById("text-box");

darkButton.addEventListener("change", function() {
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
      chatbox.editText(e);
    });
  }
};

const enterButtonEvent = () => {
  textBox.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("ENTER");
    return false;
    })
}

const activateEvents = () => {
  clearButtonEvent();
  editButtonEvent();
};

export default { activateEvents, enterButtonEvent };