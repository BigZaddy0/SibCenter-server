import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    phone: {
        type:  String,
        required: true,
        min: 11,
        max: 11,
    },
    bio: {
        type: String,
        required: true,
        min: 20,
        max: 50,
    },
    profilePhoto: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    occupation: String,
    location: String,
    viewedProfile: Number,
    impressions: Number,
    otp: Number,
}, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;