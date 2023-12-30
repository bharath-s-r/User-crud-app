const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/contacts', contactRouter);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})