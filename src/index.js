// This is the one type of loading
// require("dotenv").config({ path: '.env' }) // This is used to load the environment variables from the .env file into the process.env object.;
// Other way of loading the environment variables is by using the below code
import dotenv from "dotenv";
dotenv.config({ path: '.env' }); // This is used to load the environment variables from the .env file into the process.env object.;

import connectDB from "./db/index.js";
connectDB() // This is the second approach of connecting to the db by defining the function in the db folder and importing it here and calling it here.




/* 
THIS IS THE FIRST TYPE OF THE APPROACH 
import express from "express"
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
const app=express()
(async () =>{
    try {
        await mongoose.connect(`${process.env.MONOGODB_URL}/${DB_NAME}`)
        app.on("error" ,(error)=>{//This sets up an error event listener on the Express application instance (app). If an error occurs within the Express app, the listener logs the error to the console and then throws it. Throwing the error ensures that it can be caught and handled properly elsewhere in the code.
            console.log('Error: ',error);
            throw error
        })
        app.listen(processs.env.PORT,()=>{
            console.log(`THE APP IS LISTENING ON THE PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error : ",error)
        throw error
    }
})() // This is an  Immediately Invoked Function Expression (IIFE) is a function that runs immediately after it's defined and this is made as async because it needs time to connect the database.
 */