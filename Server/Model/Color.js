const mongoose = require('mongoose');

const Color = new mongoose.Schema({
    name:{
        type:String
    },
    votes:{
        type:Number
    }
});

module.exports = mongoose.model("Colors", Color);
