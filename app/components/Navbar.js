import React from 'react'

export default function Navbar() {
  return (
    <div className='my-12 mx-[50px] '>
        <div className='w-5/12 flex items-center justify-between'>
            <h1 className='text-3xl text-red-600 font-bold'>Fake Store</h1>
            <ul className='flex w-7/12 justify-between'>
                <li>men</li>
                <li>women</li>
                <li>shoes</li>
                <li>jacket</li>

            </ul>
        </div>
        
    </div>
  )
}
