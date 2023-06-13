import express from "express";
import {connect} from "./config/database.js"
import TweetRepository from "./repository/tweet_repository.js";

const app= express();

app.listen(3000, async()=>{
    connect();
    console.log("app listening");

    const tweetRepo = new TweetRepository();
    let tweets= await tweetRepo.getAllTweets();
    console.log(tweets);
})