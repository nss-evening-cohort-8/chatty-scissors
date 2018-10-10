let users = [];

const radioButtonsBuilder = () => {
    let domString = '';
    for (let i =0;i<users.length;i++){
        domString +=`<label class="btn btn-secondary active">
        <input type="radio" name="options" id="${users[i]}">${users[i]}
      </label>`};
      return domString
}


export default {radioButtonsBuilder,users};
