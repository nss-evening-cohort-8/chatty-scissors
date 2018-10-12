import themes from "../components/themes.js";

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById('large-theme')

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

const activateEvents = () => {

};

export default { activateEvents };

