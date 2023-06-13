import express from "express";
import {connect} from "./config/database.js"
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";

const app= express();

app.listen(3000, async()=>{
    connect();
    console.log("app listening");

    
})