function getTime(e) {
  let textBox = document.getElementById("textbox");
  textBox.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      //checks whether the pressed key is "Enter"
      let currentTime = moment().format(); // Oct 11, 2018 7:03 AM
      alert(currentTime);
      e.preventDefault();
    }
  });
}

export default { getTime };
