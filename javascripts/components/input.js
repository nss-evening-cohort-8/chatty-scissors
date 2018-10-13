import util from "../helpers/util.js";
import chatbox from "./chatbox.js"
import timestamp from "./timestamps.js"

const messageBox = document.getElementById("message-div");

const navBarReturnKey = () => {
    let newString = `<div>${document.getElementById('text-box').value}</div>`;
    

     util.printToDom(newString,'message-div')
     document.getElementById('text-box').value = ''
};

<<<<<<< HEAD
const maxMessageLimit = () => {
    if (messageBox.children.length > 20){
        messageBox.removeChild(messageBox.children[0]);
    }
}

export default {navBarReturnKey, maxMessageLimit};
=======
const  chatBoxMessageBuilder = () => {
    let selectedUser = ''
    let user = document.getElementsByClassName('userSelect')
    for (let i = 0; i < user.length; i++) { 
    if(user[i].children[0].checked === true) {
    selectedUser = user[i].children[0].value
    }
    }    
     let newString = `<div class = "chatbox-container">`
     newString += `<p> ${document.getElementById('text-box').value} </p>`
     newString += `<p> ${selectedUser}</p>`
     newString += `<p> ${timestamp.currentTime}</p>`
     newString += `</div>`
      
     util.printToDom(newString, 'message-div')
}

export default {chatBoxMessageBuilder}



>>>>>>> master
