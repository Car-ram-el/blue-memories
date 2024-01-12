import React, { useEffect, useState } from 'react'
import Posts from './components/Posts';
import Form from './components/Form';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/actionsPosts.js';

const App = () => {
  const [curId,setCurId]=useState(null);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[curId,dispatch]); console.log(curId);

  return (
    <div className=' mx-24 mt-4'>
      <header className=' w-fit mx-auto mb-11 flex justify-center items-center py-2 px-28
      shadow-lg shadow-navy-500 rounded-lg gap-4'>
        <img src='https://static.vecteezy.com/system/resources/previews/015/890/528/original/favorite-memories-icon-outline-family-album-vector.jpg'
          alt='memories' className=' hidden w-11 md:block'/>
        <h2 className=" text-6xl font-gloria font-weight-900 text-navy">Memories</h2>
        <img src='https://static.vecteezy.com/system/resources/previews/015/890/528/original/favorite-memories-icon-outline-family-album-vector.jpg'
          alt='memories' className=' hidden w-11 md:block'/>
      </header>
      <div className="flex flex-wrap justify-between mr-11">
        <div className=' w-full sm:w-7/12 px-4 mt-[5%]'><Posts setCurId={setCurId} /></div>
        <div className="w-full sm:w-4/12 px-4"><Form curId={curId} setCurId={setCurId} /></div>
      </div>
    </div>
  )
}

export default App