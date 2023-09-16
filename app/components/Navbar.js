import React from 'react';

export default function Navbar() {
  return (
    <div className=' flex justify-center border border-gray-200'>
      <div className='flex w-11/12  px-[16px] py-[24px] items-center justify-between'>
        <div id='logo-search' className='flex w-6/12 justify-between'>
            <div>
                <h1 className=' text-3xl font-bold '>fakeStore</h1>
            </div>
            <div className='w-8/12'>
                <input type="search" placeholder='search item'  className='border border-gray-500 rounded-lg py-[6px] px-[8px] w-full'/>
            </div>
        </div>
        <div id='category-button' className='flex w-6/12  py-[16px] px-[32px] items-center justify-between'>
            <ul className='flex justify-between w-6/12'>
                <li>browse</li>
                <li>men</li>
                <li>women</li>
                <li>kids</li>
            </ul>
            <div className='flex w-4/12 justify-around '>
                <button className='px-[12px] py-[8px] bg-green-700 rounded-sm text-white'>Sign up</button>
                <button className='px-[12px] py-[8px] bg-gray-700 rounded-sm text-white'>Log in</button>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}
