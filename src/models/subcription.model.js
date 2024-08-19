import mongoose, {Schema, Types} from "mongoose"

const subcriptionSchema = new Schema({
    subscriber: {
        Type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        Type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

export const Subcription = mongoose.model("Subcription", subcriptionSchema)