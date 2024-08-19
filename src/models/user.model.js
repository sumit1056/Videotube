import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }

},{timestamps: true})

// below we use pre which is used to doo something just before saveing some data inside the mongooose

// pre before saving data in mongoose
userSchema.pre("save" , async function (next){
    if(this.isModified("password")){
        bcrypt.hash(this.password,10,(err,hash) => {
            if(err){
                next(err)
            }else {
                this.password = hash
                next()
            }
        })
        this.password = await bcrypt.hash(this.password,10)
        next()
    }else {
        next();
    }
})

//method to check password is correct or not 
userSchema.methods.isPasswordMatched = async function (password){
    return await bcrypt.compare(password , this.password)
}

// method to generate access token
userSchema.methods.generateAccessToken = function (){
        return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//method to generate refresh token
userSchema.methods.generateRefreshToken = function (){
    return jwt.sign({
        _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User" , userSchema)