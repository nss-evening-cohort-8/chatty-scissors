import ptd from "../helpers/util.js"
import timestamps from "./timestamps.js"
import events from "../helpers/events.js"

const textBox = document.getElementById('text-box');

let chatboxText = [];
let counter = 0;
let isEdit = false;
let message = ""

const getEditValue = () => {
    return isEdit;
};

const setEditValue = (newValue) => {
    isEdit = newValue;
};

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) { 
    newMessage += `<div id="message${counter}"><p class="message-user">${chatboxText[i].user}:</p> `;
    newMessage += `<div id="text${counter}">${chatboxText[i].message}</div> `;
    newMessage += `${chatboxText[i].timestamp}`;
    newMessage += `<button type="button" id="edit${counter}" class="edit btn btn-secondary">Edit</button>`;
    newMessage += `<button type="button" id="delete${counter}" class="btn btn-danger delete">Delete</button>`;
    newMessage += `</div>`;
    counter++;
    }
    ptd.printToDom(newMessage, 'message-div')
    deleteFunct();  
};

const deleteFunct = () => {
    const deleteFunction = document.getElementsByClassName('delete');
    for(let i =0; i<deleteFunction.length;i++){
        deleteFunction[i].addEventListener('click',events.findMsg);
    }
}

const clearMessages = () => {
    document.getElementById('message-div').innerHTML = "";
};

const replaceText = () => {
    if (textBox.value !== "") {
    message.innerHTML = textBox.value;
    }
}

const editText = (e) => {
    textBox.removeEventListener("keyup", replaceText);
    let textMessage = e.target.previousElementSibling.innerHTML;
    let textId = e.target.previousElementSibling.id;
    message = document.getElementById(textId);
    textBox.focus();
    textBox.value = textMessage;
    textBox.addEventListener("keyup", replaceText);
};

const editBlur = () => {
    textBox.blur();
    textBox.value = "";
    setEditValue(false);
}
  
export default {messageBuilder, chatboxText, clearMessages, editText, editBlur, getEditValue, setEditValue, deleteFunct, counter};