import React from 'react'

export default async function Card({...props}) {
    const {title, price, category, image} = props;
  return (
    <div className='border h-[500px]'>
        <div className=' h-[300px] rounded-lg flex justify-center items-center'>
            <img className='max-h-[200px] max-w-[200px]' src={image} alt="product image" />
        </div>
        <div className='my-5 mx-4 h-[200px]'>
            <h1 className='text-xl font-bold '>{title}</h1>
            <p className=' text-slate-400'>{category}</p>
            <div className='mt-4'>
                
                <h5 className=' text-lg font-semibold'>${price}</h5>
            </div>
        </div>
        
        
    </div>
  )
}
