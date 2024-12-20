const mongoose = require ('mongoose');

// the schema 
const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
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