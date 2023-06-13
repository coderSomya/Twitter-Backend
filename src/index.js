import express from "express";
import {connect} from "./config/database.js"

const app= express();

app.listen(3000, async()=>{
    connect();
    console.log("app listening");
})