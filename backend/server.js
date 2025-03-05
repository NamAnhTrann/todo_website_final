const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const allowedOrigins = ["http://localhost:4200"];
const port_no = process.env.PORT_NO;
const mongodb_url = process.env.MONGOD_URL;

//router imports
const kanbanRouter = require("./router/kanbanRouter");

//use routers
app.use(kanbanRouter);

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    credential: true,
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.listen(port_no, function (err) {
  if (!port_no) {
    console.log("Error with port nnumber", err);
  } else {
    console.log(`port on: ${port_no}`);
  }
});

async function mongodb_connect() {
  try {
    await mongoose.connect(mongodb_url);
    console.log("Connected to db");
  } catch (err) {
    console.log(`Error occured : ${err}`);
  }
}
mongodb_connect();
