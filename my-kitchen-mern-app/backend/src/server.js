import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import cooksRouter from "./routes/cooks";

// Defaults
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Mongoose
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use("/cooks", cooksRouter);

// Adds the react production build to serve react requests
app.use(express.static(path.join(__dirname, "../client")));
// React root path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/index.html"));
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.options("*", cors());

// Listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
