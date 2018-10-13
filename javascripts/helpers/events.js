import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js";
import input from "../components/input.js";


const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById('large-theme');
const clearButton = document.getElementById('clear-buton');
// const deleteButton = document.getElementsByClassName('btn btn-danger');



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
  const pageBody = document.getElementsByTagName("body")


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
  })
};

modalTheme()

const clearButtonEvent = () => {
  clearButton.addEventListener('click', chatbox.clearInput);
}

const findMsg = (e) => {
  e.target.parentNode.remove();
}

const activateEvents = () => {
  clearButtonEvent();
};


const returnKey = document.getElementById('text-box');
returnKey.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      input.navBarReturnKey()

chatbox.deleteFunct();
    }
  });
 

  
  

export default { activateEvents,findMsg };

