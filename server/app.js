const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

//routes Import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

const error = require("./middleware/error");

app.use("/api/v1", product);
app.use("/api/v1", user);

//middleware for errors
app.use(error);

module.exports = app;
