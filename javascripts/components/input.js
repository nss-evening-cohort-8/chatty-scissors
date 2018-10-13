import util from "../helpers/util.js";

const navBarReturnKey = () => {
    document.getElementById('text-box').value
    console.log('it works');
     util.printToDom(document.getElementById('text-box').value,'message-div')

};

export default {navBarReturnKey};
