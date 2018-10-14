import util from "../helpers/util.js";
import timestamp from "./timestamps.js"

const messageBox = document.getElementById("message-div");
let counter = 5;

const maxMessageLimit = () => {
    if (messageBox.children.length > 20){
        messageBox.removeChild(messageBox.children[0]);
    }
}

const  chatBoxMessageBuilder = () => {
    let selectedUser = ''
    let user = document.getElementsByClassName('userSelect')
    for (let i = 0; i < user.length; i++) { 
    if(user[i].children[0].checked === true) {
    selectedUser = user[i].children[0].value
    }
    } if (selectedUser === '') {
        alert('Please select a user name!')
    } else { 
     let newString = `<div id="message${counter}" class = "chatbox-container">`
     newString += `<p class= "font-weight-bold">${selectedUser}:</p>`
     newString += `<div id="text${counter}">${document.getElementById('text-box').value} </div>`
     newString += `${timestamp.currentTime}`
     newString += `<button type="button" id="edit${counter}" class="edit btn btn-secondary">Edit</button>`;
     newString += `<button type="button" id="delete${counter}" class="btn btn-danger delete">Delete</button>`;
     newString += `</div>`
     counter++;
      
     util.printToDom(newString, 'message-div')
    }
}

export default {chatBoxMessageBuilder, maxMessageLimit}