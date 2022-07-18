//load modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { dbConnect } = require("./util/dbConnect");

//Create the Express App
const app = express();

app.use(express.json());
//Enable All CORS Requests
app.use(cors());

//routes
app.get("/", (request, response) => {
  response.send("<h3>Welcome to new Project</h3>");
});

app.use("/api/book", require("./routes/book.routes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  dbConnect();
  console.log(`Server runs on : ${port}`);
});
