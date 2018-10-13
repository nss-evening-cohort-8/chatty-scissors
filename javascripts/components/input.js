import util from "../helpers/util.js";

const messageBox = document.getElementById("message-div");

const navBarReturnKey = () => {
    let newString = `<div>${document.getElementById('text-box').value}</div>`;
    

     util.printToDom(newString,'message-div')
     document.getElementById('text-box').value = ''

};

const maxMessageLimit = () => {
    if (messageBox.children.length > 20){
        messageBox.removeChild(messageBox.children[0]);
    }
}

export default {navBarReturnKey, maxMessageLimit};
