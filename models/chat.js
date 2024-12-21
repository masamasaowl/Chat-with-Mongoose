const mongoose = require ('mongoose');

// the schema 
const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,
        default : "Anonymous"
    },
    to : {
        type : String,
        required : true,
        default : "to all"
    },
    message : {
        type : String,
    },
     created_at: {
        type : Date,
        required : true,
    }
});

// the model class
const Chat = mongoose.model('Chat',chatSchema);

// export to index.js
module.exports = Chat;