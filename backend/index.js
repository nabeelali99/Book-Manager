import dotenv from "dotenv";
import express from "express";
// import { PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const mongoDBURL = process.env.MONGODB_URL;

const app = express();

//Middleware for parsing request body

app.use(express.json());

//Middleware for handling CORS Policy

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World!");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
