import React from 'react'
import Navbar from '@/app/components/Navbar'
export default async function page({params}) {
    const id = params.id
    const getSingle = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await getSingle.json()
  return (
    <div>
        <Navbar/>
        <div className='mx-[50px] my-[50px] flex items-center'>
        
            <div className='flex justify-center items-center w-6/12'>
                <img className=' h-[500px]'  src={product.image} alt="product image" />
            </div>
            
            <div className='w-6/12'>
                <div className='my-6'>
                    <h1 className='text-xl font-bold'>{product.title}</h1>
                    <h6 className=' text-slate-400'>{product.category}</h6>
                </div>
                
                <h4 className='font-light'>{product.description}</h4>
                <div className='mt-10'>
                    <button className='py-2 px-6 bg-blue-600 rounded-md text-white'>buy</button>
                </div>

            </div>
        </div>
    </div>
    
  )
}
