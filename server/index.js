import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true})); // for images of larger size as default is 10mb
app.use(bodyParser.urlencoded({limit:"30mb",extended:true})); // json like xp with url encoded format
app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>res.send("hello memories."));
// database
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
  .then(()=>app.listen(PORT,()=>console.log(`server running on http://localhost:${PORT}`)))
  .catch((e)=>console.log(e.message));
