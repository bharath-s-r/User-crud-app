const mongoose = require("mongoose")

const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
    }
    catch (err) {
        console.log("error for connecting to DB: ", err)
        process.exit(1);
    }
}

module.exports = connectToDB;