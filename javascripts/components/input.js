import util from "../helpers/util.js";

const navBarReturnKey = () => {
    console.log('it works');
     util.printToDom(document.getElementById('text-box').value,'message-div')
     document.getElementById('text-box').value = ''

};

export default {navBarReturnKey};
