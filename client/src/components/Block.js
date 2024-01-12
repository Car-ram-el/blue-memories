import React from 'react'

const Block = ({name,value,change}) => {
  return (
    name==='Message'?<div>
      <label className="block text-navyLight font-bold" htmlFor={name}>{name}</label>
      <textarea type="text" name={name} placeholder={name} id={name}
        className="mb-[1vh] w-full h-[13vh] px-[0.5vw] py-[0.8vh] border border-navyLighter rounded-md text-sm placeholder-navyLighter
        focus:outline-none focus:border-navyLight focus:ring-1 focus:ring-navyLight"
        value={value} onChange={change}/>
    </div>:<div>
      <label className="block text-navyLight font-bold" htmlFor={name}>{name}</label>
      <input type="text" name={name} placeholder={name} id={name}
        className="mb-[1.4vh] w-full px-[0.5vw] py-[0.8vh] border border-navyLighter rounded-md text-sm placeholder-navyLighter
        focus:outline-none focus:border-navyLight focus:ring-1 focus:ring-navyLight"
        value={value} onChange={change}/>
    </div>
  )
}

export default Block