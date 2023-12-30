const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: [true, 'Username is mandatory']
        },
        email: {
            type: String,
            required: [true, "email is mandatory"]
        },
        phone: {
            type: String,
            required: [true, "phone number is mandatory"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact", contactsSchema);