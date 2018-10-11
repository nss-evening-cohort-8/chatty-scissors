import ptd from "../helpers/util.js"
import timestamps from "./timestamps.js"

let chatboxText = [];
let counter = 0;

console.log(timestamps.currentTime)

const messageBuilder = () => {
    let newMessage = ""; 
    for (let i = 0; i < chatboxText.length; i++) {
    newMessage += `<p id="message${counter}">${chatboxText[i].user}: `;
    newMessage += `${chatboxText[i].message} `;
    newMessage += `${chatboxText[i].timestamp}`
    newMessage += `</p>`
    }
    ptd.printToDom(newMessage, 'message-div')
    counter++;
};

export default {messageBuilder, chatboxText};