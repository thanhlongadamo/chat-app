const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
app.listen(port, (req, res) => {
  console.log("Server listening on port", port);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose connected"))
  .catch((error) => console.log("Mongo connection error: ", error.message));
