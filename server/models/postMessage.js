import mongoose from "mongoose";

// a scheme for each post. uniformity.
const postSchema=mongoose.Schema({
  title:String, message:String, creator:String,
  tags:[String],
  selectedFile:String,
  likeCount:{type:Number,default:0},
  createdAt:{type:Date,default:new Date()}
})

// convert it into a model
const PostMessage=mongoose.model('PostMessage',postSchema);

export default PostMessage;
// crud operations on this