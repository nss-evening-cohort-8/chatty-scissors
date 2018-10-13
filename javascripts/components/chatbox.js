import ptd from "../helpers/util.js"
import timestamps from "./timestamps.js"
import events from "../helpers/events.js"


let chatboxText = [];
let counter = 0;

console.log(timestamps.currentTime)

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatboxText[i].user}: `;
    newMessage += `${chatboxText[i].message} `;
    newMessage += `${chatboxText[i].timestamp}`;
    newMessage += `<button type="button" id="edit${counter}"class="btn btn-secondary">Edit</button>`;
    newMessage += `<button type="button" id="delete${counter}"class="btn btn-danger delete">Delete</button>`
    newMessage += `</p>`
    counter++;
    }
    ptd.printToDom(newMessage, 'message-div')
    
    const deletefunction = document.getElementsByClassName('delete');
        for(let i =0; i<deletefunction.length;i++){
            deletefunction[i].addEventListener('click',events.findMsg);
        }
    
    
};


const clearInput = (e) => {
    e.preventDefault();
    document.getElementById('message-div').innerHTML = "";
    console.log("CLEAR!!!")
};




export default {messageBuilder, chatboxText, clearInput};