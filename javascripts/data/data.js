function executeOnError() {
    console.log("ERROR. Please seek immediate assistance");
}

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    for (let i =0; i < data.sampleData.length; i++){ 
    console.log("User:",data.users[i]); // prints the user at the index value to the console
    console.log("Sample data object:", data.sampleData[i]); //prints the sample data object at the current index value to the console
    }
}

// const loadTextArray

const loadData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/data.json");
    myRequest.send();
};

export default {loadData};