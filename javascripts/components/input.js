import util from "../helpers/util.js";
import chatbox from "./chatbox.js"
import timestamp from "./timestamps.js"

const navBarReturnKey = () => {
    console.log('it works');
     util.printToDom(document.getElementById('text-box').value,'message-div')
     document.getElementById('text-box').value = ''
};

const  chatBoxMessageBuilder = () => {
    let selectedUser = ''
    let user = document.getElementsByClassName('userSelect')
    for (let i = 0; i < user.length; i++) { 
    if(user[i].checked === true) {
    selectedUser = user[i].value
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

// target outertext



