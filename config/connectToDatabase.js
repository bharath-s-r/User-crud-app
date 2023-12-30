const mongoose = require("mongoose")

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
        console.log("Connected to Database");
    }
    catch (err) {
        console.log("error for connecting to DB: ", err)
        process.exit(1);
    }
}

module.exports = connectToDB;