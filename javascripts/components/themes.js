const darkTheme = () => {
  let chatContainer = document.getElementById("chat-container");
  chatContainer.classList.toggle("darkTheme");
};

const largeTheme = () => {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("largeTheme");
  };

export default { darkTheme, largeTheme };
