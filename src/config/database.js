import mongoose, { Mongoose } from "mongoose"
import Tweet from "../models/tweet.js";

export const connect = async()=>{
    await mongoose.connect('mongodb+srv://isomya13:%23iitAdv2512@cluster0.t49otyp.mongodb.net/');

    Tweet.create({
        content: "second tweet",
        likes: 11,
        noOfRetweets:3
    })
}

