import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

// who is allowed to send the request to this server
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//setting to accept json data
// setting the url data 
// use for storeing the path of public folder
// cookie parser for parsing the cookie in user brower 

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true , limit: '16kb'}))
app.use(express.static("public"))
app.use(cookieParser())



//routes import
import userRouter from "./routes/user.routes.js"

//routes Declaration
//http://localhost:4000/api/v1/users/
app.use("/api/v1/users" , userRouter)


export {app}