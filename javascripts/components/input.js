import util from "../helpers/util.js";
import timestamp from "./timestamps.js";
import events from "../helpers/events.js";
import chatbox from "./chatbox.js";

const messageBox = document.getElementById("message-div");
let counter = 5;
let profaneArray = [];
const charlesArray = [
    "Charles is king",
    "Never forget Charles",
    "Why did Charles have to go!",
    "I wonder what Charles is up to", 
    "Charles' car can carry copious cans of candy", 
    "Charles is my best friend", 
    "Charles is your best friend",
    "Obey Charles at all costs"
]

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
     newString += `<div class = "font-italic">${timestamp.currentTime}</div>`
     newString += `<button type="button" id="edit${counter}" class="edit btn btn-secondary btn-sm">Edit</button>`;
     newString += `<button type="button" id="delete${counter}" class="btn btn-danger btn-sm delete">Delete</button>`;
     newString += `</div>`
     counter++;
      
     util.printToDom(newString, 'message-div')
    }
}

const profaneFilter = (inputValue) => {
    let validity = false;
    for (let i = 0; i < profaneArray.length; i++) {
        if (inputValue.includes(profaneArray[i])) {
            validity = true;
        }
    }
     if (validity === true) {
        let selectedUser = "";
        let user = document.getElementsByClassName('userSelect');
        for (let i = 0; i < user.length; i++) { 
        if(user[i].children[0].checked === true) {
            selectedUser = user[i].children[0].value;
            }
        }
        if (selectedUser === '') {
            alert('Please select a user name!')
        } else {
        let newString = `<div id="message${counter}" class = "chatbox-container">`;
        newString += `<p class="message-user"> ${selectedUser}</p>`
        newString += `<div id="text${counter}">${charlesArray[(Math.floor((Math.random()*charlesArray.length)+1)-1)]}</div>`
        newString += `<div class="font-italic">${timestamp.currentTime}</div>`
        newString += `</div>`
        counter++;
        util.printToDom(newString, 'message-div')
        events.editButtonEvent();
        chatbox.deleteFunct();
    }
    }
    else {
        chatBoxMessageBuilder();
        events.editButtonEvent();
        chatbox.deleteFunct();

    }
    validity = false;
};

export default {chatBoxMessageBuilder, maxMessageLimit, profaneArray, profaneFilter}