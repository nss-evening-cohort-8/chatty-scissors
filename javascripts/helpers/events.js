import themes from "../components/themes.js";

const darkButton = document.getElementById("dark-theme");

darkButton.addEventListener("change", function() {
  if (this.checked) {
    themes.darkTheme();
  } else {
    themes.darkTheme();
  }
});

const activateEvents = () => {
    
};

export default { activateEvents };
