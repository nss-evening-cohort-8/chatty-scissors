import {printToDom} from "../helpers/util";

let chatBoxText = [];
let counter = 0;

const messageBuilder = () => {
    let newMessage = "";
    for (let i = 0; i < chatBoxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatBoxText[i].userName}: `;
    newMessage += `${chatBoxText[i].message} `;
    newMessage += `${chatBoxText[i].timestamp}`
    newMessage += `</p>`
    }
    counter++;
    printToDom(newMessage, 'message-div')
}

export {messageBuilder};