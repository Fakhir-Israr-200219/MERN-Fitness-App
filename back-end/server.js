const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDB()

const app = express();
const port = process.env.PORT ||3000;
app.use(express.json());

app.use("/book", require("./Routes/contect.Route"))
app.use("/user" , require("./Routes/user.Route"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`app running in port ${port}`);
})