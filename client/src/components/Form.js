import React, { useEffect, useState } from 'react'
import Block from './Block.js'
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost,updatePost} from '../actions/actionsPosts.js';
import { useSelector } from 'react-redux'

const Form = ({curId,setCurId}) => {
  const [postData,setPostData]=useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
  const post=useSelector((state)=>curId?state.posts.find((p)=>p._id===curId):null);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(post) setPostData(post);
  },[post]);

  const clear=()=>{
    setCurId(null);
    setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''});
  }
  const submit=(e)=>{
    e.preventDefault();
    if(curId) dispatch(updatePost(curId,postData));
    else dispatch(createPost(postData));
    clear();
  }

  return (
    <div className=' p-8'>
      <form autoComplete='off' noValidate onSubmit={submit} className=' flex flex-col'>
        <h6 className=' font-bold mb-4 flex justify-center text-navy'>{curId?'Editing':'Creating'} a memory</h6>
        {/* spreading postData so that all other properties persist, only specified prop changes */}
        <Block name='Creator' value={postData.creator} change={(e)=>setPostData({...postData, creator:e.target.value})}/>
        <Block name='Title' value={postData.title} change={(e)=>setPostData({...postData, title:e.target.value})}/>
        <Block name='Message' value={postData.message} change={(e)=>setPostData({...postData, message:e.target.value})}/>
        <Block name='Tags' value={postData.tags} change={(e)=>setPostData({...postData, tags:e.target.value.split(',')})}/>
        <div className=' text-sm mb-2'>
        <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
        </div>
        <button type='submit' className=' text-xl font-bold mb-2 px-3 py-2 text-white bg-navyLight rounded-md hover:bg-navy'>Submit</button>
        <button onClick={clear} className=' mb-2 px-3 py-2 bg-gray-300 rounded-md hover:text-white hover:bg-gray-400'>Clear</button>
      </form>
    </div>
  )
}

export default Form