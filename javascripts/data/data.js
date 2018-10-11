import chatbox from "../components/chatbox.js";
import timestamps from "../components/timestamps.js";

function executeOnError() {
    console.log("ERROR. Please seek immediate assistance");
}

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    for (let i =0; i < data.sampleData.length; i++){ 
        chatbox.chatboxText.push(data.sampleData[i])
    }
    chatbox.messageBuilder();
}

const loadData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/data.json");
    myRequest.send();
};

export default {loadData};