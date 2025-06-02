//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"//after creating this as it not mention as now in dotenv documentation so we have to write it in 
// -r dotenv/config -- experimental-json-modules in script of dev in package.json


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";//we can import databse name file

//we use async await for database problem management

//2nd method 1st make file in db folder and write code there

import connectDB from "./db/index.js";// used to connnect indexfile in db and this
dotenv.config({path:'./env'})

connectDB()

//1st method to write code generally not prefferd



/*
import express from "express"
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("errr404",error);
            throw error
        })

        app.listen(process.env.port,()=>{
            console.log(`App is listening on port ${process.env.port}`);
        })

    }
    catch(error){
        console.log("ERROR",error)
        throw error
        //this try catch method use as to resole any error as error encounter it goes to catch then if everything right then go to try method..

    }
})()
    */