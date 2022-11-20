let mongoose = require('mongoose');
// create a schedule
let scheduleModel = mongoose.Schema({
    assessment: String,
    deadline: String,
    description: String,
    class: String
    },
    {
        collection: "scheduler"
    }

)
module.exports = mongoose.model('Schedule', scheduleModel);