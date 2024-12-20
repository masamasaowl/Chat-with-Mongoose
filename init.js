// this is a pseudo file responsible for creating random users and chats
// it would run only once using node init.js

const mongoose = require('mongoose');
const Chat = require ('./models/chat.js');

main()
    .then(() => {
    console.log("connnection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};


let allChats = [
    {
        from : 'Ram',
        to: 'Shyam',
        message : 'Hi! How are you',
        created_at : new Date()
    },
    {
        from : 'Mohan',
        to: 'Radha',
        message : 'Hi!',
        created_at : new Date()
    },
    {
        from : 'Sita',
        to: 'Supriya',
        message : 'Hello!',
        created_at : new Date()
    },
    {
        from : 'Ratnagar',
        to: 'Suhas',
        message : 'How are you',
        created_at : new Date()
    },
    {
        from : 'Arya',
        to: 'Suhani',
        message : 'Im good',
        created_at : new Date()
    },
    {
        from : 'Meena',
        to: 'Reena',
        message : 'how is everything going',
        created_at : new Date()
    },

];

Chat.insertMany(allChats);