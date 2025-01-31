import React from 'react'

const Card =( {title, icon, paragraph} ) => {
  return (
    <div>
        <div className="w-[200px]  h-[150px] border border-gray-500  m-[10px] inline-block text-center justify-items-center  rounded-[10px]  solid">
            <img src={icon}  alt></img>
            <h1 className=' font-OpenSans text-[16px] font-[700]'>{title}</h1>
            <p className='text-[12px] font-OpenSans'>{paragraph}</p>
        </div>
    </div>
  )
}

export default Card;