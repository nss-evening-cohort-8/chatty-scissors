import ptd from "../helpers/util.js"
import timestamps from "./timestamps.js"
import events from "../helpers/events.js"

const textBox = document.getElementById('text-box');
let chatboxText = [];
let counter = 0;

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatboxText[i].user}: `;
    newMessage += `<div id="text${counter}">${chatboxText[i].message}</div> `;
    newMessage += `${chatboxText[i].timestamp}`;
    newMessage += `<button type="button" id="edit${counter}" class="edit btn btn-secondary">Edit</button>`;
    newMessage += `<button type="button" id="delete${counter}" class="btn btn-danger">Delete</button>`;
    newMessage += `</p>`;
    counter++;
    }
    ptd.printToDom(newMessage, 'message-div')
};

const clearMessages = () => {
    document.getElementById('message-div').innerHTML = "";
};

const editText = (e) => {
    let textMessage = e.target.previousElementSibling.innerHTML;
    console.log(textMessage);
    let textId = e.target.previousElementSibling.id;
    console.log(textId);
    let message = document.getElementById(textId);
    console.log(message);
    textBox.focus();
    textBox.value = textMessage;
    textBox.addEventListener("keyup", function() {
        message.innerHTML = event.target.value;
    })
};

const editBlur = () => {
    textBox.blur();
    textBox.value = "";
}
  
export default {messageBuilder, chatboxText, clearMessages, editText, editBlur};