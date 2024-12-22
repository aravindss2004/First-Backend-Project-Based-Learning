import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB =async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONOGODB_URL}/${DB_NAME}`)
        console.log(`Mongo DB connected successfully DB host is ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Error in connecting the database and the error is:',error);
        process.exit(1)
    }
}
export default connectDB