const express = require("express");
const app = express();
const contactRouter = require("./routes/contactRoutes")

app.use('/', contactRouter)
app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})