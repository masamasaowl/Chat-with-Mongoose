// ================ BASIC SETUP =================

let express = require ("express");
const app = express();
const port = 8080;
const {v4 : uuidv4} = require ("uuid");
const methodOverride = require ("method-override");
const path = require("path");


// new additions
const mongoose = require('mongoose');

main()
    .then(() => {
    console.log("connnection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};
// require the model
const Chat = require ('./models/chat.js');



app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));


app.listen(port, () => {
    console.log("App is listening on port : 8080")
});

//  =============================================

// ================== Test document =============
// let chat1 = new Chat(
//   {
//   from : 'Ram',
//   to: 'Shyam',
//   message : 'Hi! How are you',
//   // generate a random date
//   created_at : new Date()
//   }
// );

// chat1.save().then((res) => {
//   console.log(res);
// });


// ==================== Index route =============

// we write async before the arrowfunc to use await while fetching the chats from the database as it is an async task
app.get("/chats", async(req,res) => {

  // store the chat
  let chats = await Chat.find();

  res.render("index", {chats});
});