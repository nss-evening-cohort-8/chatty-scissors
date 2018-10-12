import themes from "../components/themes.js";

const darkButton = document.getElementById("dark-theme");
const largeButton = document.getElementById('large-theme');



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

const activateEvents = () => {

};

export default { activateEvents };

