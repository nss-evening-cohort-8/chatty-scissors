import themes from "../components/themes.js";
import chatbox from "../components/chatbox.js"

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById('large-theme');
const clearButton = document.getElementById('clear-buton')

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

const clearButtonEvent = () => {
  clearButton.addEventListener('click', chatbox.clearInput);
}

const activateEvents = () => {
  clearButtonEvent();
};

export default { activateEvents };

