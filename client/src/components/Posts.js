import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Posts = ({setCurId}) => {
  const posts=useSelector((state)=>state.posts);
  return (
    !posts.length? <div>
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-t-4 mt-11 border-navyLight border-solid rounded-full animate-spin"></div>
      </div>
    </div> : <div className=' columns-1 lg:ml-44 lg:columns-2'>
        {posts.map((p)=>(<div className=' mb-[10%]' key={p._id}><Post post={p} setCurId={setCurId}/></div>))}
      </div>
  )
}

export default Posts