const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"]
        },
        email: {
            type: String,
            required: [true, "Email Id is required"],
            unique: [true, "Email Id already taken"]
        },
        password: {
            type: String,
            required: [true, "password is required"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)