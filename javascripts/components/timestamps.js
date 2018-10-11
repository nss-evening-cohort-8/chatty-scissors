let currentTime = ""

function getTime() {
  let textBox = document.getElementById("textbox");
  textBox.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      //checks whether the pressed key is "Enter"
      let currentTime = moment().format('lll'); // Oct 11, 2018 7:03 AM
      e.preventDefault();
      console.log(currentTime);
      return currentTime;
    }
  });
};

export default { getTime };
