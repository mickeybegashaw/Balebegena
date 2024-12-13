import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import musicianRoutes from "./Routes/musicianRouter.js"
import cors from "cors"
dotenv.config();


const app = express();
app.use(express.json()); 

app.use((req, res, next) => {
 console.log(req.path,req.method)
  next(); 
});

app.use(cors()); 
app.use("/musician/api", musicianRoutes)



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {

    app.listen(process.env.PORT, () => {
      console.log("Server is connected to DB and running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Cannot connect to the database:", error.message);
  });
