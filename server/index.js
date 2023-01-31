
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors')


dotenv.config();


mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});


const postSchema = mongoose.Schema({
  title: String,
  message: String
});

const Post = mongoose.model("Post",postSchema);
app.use(cors())

app.get("/home", (req, res)=>{

    Post.find({},(err,posts)=>{
        if(err) return res.status(500).send(err);
        res.send(posts)
    });
});


app.listen(3001, ()=>{
    console.log("Listening")
})