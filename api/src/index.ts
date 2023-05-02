import express from "express";
import cors from "cors";
import {config} from "dotenv";
import { CategoryRouter } from "./routes/category.route";
import mongoose from "mongoose";
import { PostRouter } from "./routes/post.roter";

const main = () =>{

    config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/api/category", CategoryRouter);
    app.use("/api/post", PostRouter);

    mongoose.connect("mongodb://127.0.0.1:27017/BlogNode");

    const port = process.env.PORT || 8000;

    app.listen(port, ()=>{
        console.log("initial setup")
    });

}

main();