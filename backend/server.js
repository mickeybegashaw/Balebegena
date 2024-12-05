import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import musicianroutes from "./Routes/musicianRouter.js"
dotenv.config();

const app = express();
app.use(express.json()); 


app.use("/musician/api", musicianroutes)


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log("Server is connected to DB and running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Cannot connect to the database:", error.message);
  });
