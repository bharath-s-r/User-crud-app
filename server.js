const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRoutes");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectToDB = require("./config/connectToDatabase");
require('dotenv').config();

const port = process.env.PORT || 5000;

connectToDB();
app.use(express.json());
app.use('/contacts', contactRouter);
app.use('/user', userRouter);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})