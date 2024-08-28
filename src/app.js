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
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes Declaration
//http://localhost:4000/api/v1/users/
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

export {app}