const { kStringMaxLength } = require('buffer');
const mongoose = require('mongoose');


const BotSchema = mongoose.Schema({
    fakeNews: Boolean,
    hateSpeech: Boolean,
    subreddit: String,
    name: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    }




});




const Bot = mongoose.model("bot", BotSchema);
module.exports = Bot;