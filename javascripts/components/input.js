import util from "../helpers/util.js";
import chatbox from "./chatbox.js"

const navBarReturnKey = () => {
    console.log('it works');
     util.printToDom(document.getElementById('text-box').value,'message-div')
     document.getElementById('text-box').value = ''
//      if(returnkey === '13')
//      input.navBarReturnKey()
//      else {
//         stringToPrint = ''
// };

};


export default {navBarReturnKey};


const  chatBoxMessageBuilder = () => {
    for (let i = 0; i < users.length; i++) { 
     newString += `<div class = "chat-container">`
     newString += 
}
// things I need in this function
// message builder function in chatbox
// conditional statement to differentiate return keys
//timestamp
// radiobuttons checked


