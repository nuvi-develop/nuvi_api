var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

import api from "./routes/api";
import { secret } from "./config";

const cors = require("cors");

const corsOptions = {
  origin: [/localhost:*/]
};

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("jwt-token-secret", secret);

app.use("/api", api);

//error handling
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.log("err.message", err.message);
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

module.exports = app;
