import mongoose, { Mongoose } from "mongoose"
import Tweet from "../models/tweet.js";
import Hashtag from "../models/hashtag.js";

export const connect = async()=>{
    await mongoose.connect('mongodb+srv://isomya13:%23iitAdv2512@cluster0.t49otyp.mongodb.net/');

}

