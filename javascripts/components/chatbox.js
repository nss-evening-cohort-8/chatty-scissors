import ptd from "../helpers/util.js"

let chatboxText = [];
let counter = 0;

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatboxText[i].user}: `;
    newMessage += `${chatboxText[i].message} `;
    newMessage += `${chatboxText[i].timestamp}`;
    newMessage += `<button type="button" id="edit${counter}"class="btn btn-secondary">Edit</button>`;
    newMessage += `<button type="button" id="delete${counter}"class="btn btn-danger">Delete</button>`
    newMessage += `</p>`
    }
    ptd.printToDom(newMessage, 'message-div')
    counter++;
};

export default {messageBuilder, chatboxText};