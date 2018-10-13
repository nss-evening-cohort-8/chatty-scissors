import util from "../helpers/util.js"

let users = [];

const radioButtonsBuilder = () => {
    let domString = '';
    for (let i =0;i<users.length;i++){
        domString +=`<label class="btn btn-secondary active userSelect">
        <input type="radio" name="options" id="${users[i]}" value="${users[i]}"> ${users[i]}
      </label>`};
      util.printToDom(domString, 'user');      
}


export default {radioButtonsBuilder,users};
