import data from "./data/data.js"
import events from "./helpers/events.js"

const executeApp = () => {
    data.loadData();
    events.activateEvents();
};

executeApp();