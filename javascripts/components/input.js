import util from "../helpers/util.js";
import timestamp from "./timestamps.js"

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
     newString += `<p> ${selectedUser}</p>`
     newString += `<div id="text${counter}">${document.getElementById('text-box').value} </div>`
     newString += `${timestamp.currentTime}`
     newString += `<button type="button" id="edit${counter}" class="edit btn btn-secondary">Edit</button>`;
     newString += `<button type="button" id="delete${counter}" class="btn btn-danger delete">Delete</button>`;
     newString += `</div>`
     counter++;
      
     util.printToDom(newString, 'message-div')
    }
}

const profaneFilter = (inputValue) => {
    if (profaneArray.indexOf(inputValue) > -1) {
        let selectedUser = "";
        let user = document.getElementsByClassName('userSelect')
        for (let i = 0; i < user.length; i++) { 
        if(user[i].children[0].checked === true) {
            selectedUser = user[i].children[0].value
            }
        }
        console.log("swear filter works");
        let newString = `<div id="message${counter}" class = "chatbox-container">`
        newString += `<p class="message-user"> ${selectedUser}</>`
        newString += `<div id="text${counter}">${charlesArray[(Math.floor((Math.random()*charlesArray.length)+1)-1)]}</div>`
        newString += `${timestamp.currentTime}`
        newString += `</div>`
        counter++;
        util.printToDom(newString, 'message-div')
    } else {
        chatBoxMessageBuilder();
    }
};

export default {chatBoxMessageBuilder, maxMessageLimit, profaneArray, profaneFilter}