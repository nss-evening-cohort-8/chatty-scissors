import ptd from "../helpers/util.js"
import timestamps from "./timestamps.js"
import events from "../helpers/events.js"

const textBox = document.getElementById('text-box');
let chatboxText = [];
let counter = 0;

console.log(timestamps.currentTime)

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatboxText[i].user}: `;
    newMessage += `<div>${chatboxText[i].message}</div> `;
    newMessage += `${chatboxText[i].timestamp}`;
    newMessage += `<button type="button" id="edit${counter}" class="edit btn btn-secondary">Edit</button>`;
    newMessage += `<button type="button" id="delete${counter}" class="btn btn-danger">Delete</button>`;
    newMessage += `</p>`;
    counter++;
    }
    ptd.printToDom(newMessage, 'message-div')
};

const clearInput = (e) => {
    e.preventDefault();
    document.getElementById('message-div').innerHTML = "";
};

const editText = (e) => {
    let textMessage = e.target.previousElementSibling.innerHTML;
    textBox.value = textMessage;
};

export default {messageBuilder, chatboxText, clearInput, editText};