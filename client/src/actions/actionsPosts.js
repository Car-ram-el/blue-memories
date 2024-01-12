import * as api from './apiIndex.js';

// action creators: functions/objects that return/dispatch action
export const getPosts=()=>async(dispatch)=>{
  try {
    const {data}= await api.fetchPosts(); // time taking
    dispatch({type:'fetchAll',payload:data});
  } catch (error) {
    console.log(error);
  }
}
export const createPost=(post)=>async (dispatch)=>{
  try {
    const {data}=await api.createPost(post);
    dispatch({type:'create',payload:data});
  } catch (error) {
    console.log(error);
  }
}
export const updatePost=(id,post)=>async(dispatch)=>{
  try {
    const {data}=await api.updatePost(id,post);
    dispatch({type:'update',payload:data});
  } catch (error) {
    console.log(error);
  }
}

export const deletePost=(id)=>async(dispatch)=>{
  try {
    await api.deletePost(id); // only id is needed
    dispatch({type:'delete',payload:id});
  } catch (error) {
    console.error();
  }
}

export const likePost=(id)=>async(dispatch)=>{
  try {
    const {data}=await api.likePost(id);
    dispatch({type:'update',payload:data})
  } catch (error) {
    console.log(error);
  }
}