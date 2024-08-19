import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// connectDB code for connect to mongoDB
const connectDB = async () =>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error " , error);
        process.exit(1)
    }
}

export default connectDB