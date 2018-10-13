import data from "./data/data.js"
import events from "./helpers/events.js"
import timestamps from "./components/timestamps.js"


const executeApp = () => {
    data.loadData();
    // events.enterButtonEvent();
};

executeApp();