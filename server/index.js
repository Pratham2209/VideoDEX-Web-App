import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

dotenv.config();

const app=express();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };


  app.use(cookieParser())
  app.use(express.json())
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/videos", videoRoutes);
  app.use("/api/comments", commentRoutes);

  app.use((err, req, res, next) => {  // error handling middleware
    const errorStatus = err.status || 500; // if there is error send that error , if not specific error send 500
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack, // gives more details of errors 
    });
  });

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
  