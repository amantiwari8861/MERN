const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//     userId: String,
//     name: String,
//     password: String,
//     isMarried: Boolean,
//     mobileNo: Number
// });
const userSchema = new mongoose.Schema({
    userId: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isMarried: {
        type: Boolean,
        default: false
    },
    mobileNo: {
        type: Number,
        required: true
    }
});

userSchema.statics.validateUser = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    if (user.password !== password) {
        throw new Error("Invalid password");
    }
    return user;
};

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

// Model -> interact with Database (or store data that is received/sent from/to backend )
