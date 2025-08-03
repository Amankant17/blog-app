require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

// db connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in DB connection", err));


// middlewares
app.use(express.json());
app.use(cors());


const router = require("./routes")
app.use("/api", router);


const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT)
})