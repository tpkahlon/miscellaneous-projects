import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import exercisesRouter from "./routes/exercises";
import usersRouter from "./routes/users";

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
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
