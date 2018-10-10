import {printToDom} from "../helpers/util";

let messagesArray = [];
let counter = 0;

const messageBuilder = () => {
    let newMessage = "";
    for (let i = 0; i < messagesArray.length; i++) {
    newMessage += `<p id="message${counter}">${messagesArray[i].userName}: `;
    newMessage += `${messagesArray[i].message} `;
    newMessage += `${messagesArray[i].timestamp}`
    newMessage += `</p>`
    }
    counter++;
    printToDom(newMessage, 'message-div')
}

export {messageBuilder};