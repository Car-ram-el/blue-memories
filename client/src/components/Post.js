import React, { useState } from 'react'
import moment from 'moment';
import {AiOutlineLike,AiFillLike} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import {CiMenuKebab} from 'react-icons/ci';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../actions/actionsPosts';

const Post = ({post,setCurId}) => {
  const dispatch=useDispatch();
  const [liked,setLiked]=useState(false);
  const like=()=>{
    dispatch(likePost(post._id));
    setLiked((prev)=>!prev);
  }

  return (
    <div className=" max-w-md w-[75%] mb-3 shadow-lg shadow-navy-500 rounded-lg overflow-hidden -mx-[15%]">
      <div className='relative h-1/2 items'>
        <img className=" w-full h-36 object-cover" src={post.selectedFile} alt='A chiaroscuro dance on the canvas of reality'/>
        <div className=' absolute bottom-0 w-full h-[33%] p-[5%] text-navyLight flex justify-between items-center'>
          <h6 className="text-lg font-semibold font-gloria">{post.creator}</h6>
          <button onClick={()=>setCurId(post._id)}><CiMenuKebab className=' w-11'/></button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs mb-[2%] text-navyLight">{post.tags.map((tag) => `#${tag} `)}</p>
        <div className='flex justify-between items-center mb-0'>
          <h5 className="text-2xl font-extrabold mb-[3%] text-navy font-gloria">{post.title}</h5>
          <p className="text-xs text-navyLight">{moment(post.createdAt).fromNow()}</p>
        </div>
        <p className="text-sm font-gloria mb-[1%] text-navy">{post.message}</p>
      </div>
      <div className="flex items-center justify-between mx-auto px-[15%] mb-[2%] text-sm">
        <button onClick={like} className="text-navyLight hover:text-navy">
          {liked?<AiFillLike className='text-xl'/>:<AiOutlineLike className=' text-xl' />} Nice! {post.likeCount}
        </button>
        <button onClick={() => dispatch(deletePost(post._id))} className="text-gray-300 hover:text-gray-400"><MdDelete className=' text-xl' /> Nah! </button>
      </div>
    </div>
  )
}

export default Post