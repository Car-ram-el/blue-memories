// add logic for routes

import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts= async (req,res)=>{
  try {
    const postMessages=await PostMessage.find(); // time taking => await
    res.status(200).json(postMessages); // 200: ok
  } catch (error) {
    res.status(404).json({message:error.message}); // 404: not found
  }
}

export const createPost= async (req,res)=>{
  const post=req.body;
  const newPost=new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost); // created
  } catch (error) {
    res.status(409).json({message:error.message}); // conflict
  }
}

export const updatePost=async(req,res)=>{
  const {id:_id} = req.params, post=req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with the specified id.');
  const updatedPost= await PostMessage.findByIdAndUpdate(_id,post,{new:true});
  res.json(updatedPost);
}

export const deletePost=async(req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with the specified id.');
  await PostMessage.deleteOne({_id:id});
  res.json({message:'Memory deleted.'});
}

export const likePost=async(req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with the specified id.');
  const post=await PostMessage.findById(id);
  const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
  res.json(updatedPost);
}