import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-black mt-20 p-10 flex-col rounded-xl ml-20 mr-20 '>
        <h1 className='text-white text-4xl font-extrabold '>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
      <div className=''>  <input placeholder='Enter your email address' className='pl-9 pr-9 rounded-xl  h-10 ' type="text" /><br />
      <button className='text-black bg-white w-64  m-3  rounded-xl  h-10'>Subscribe to Newsletter</button></div>
      </div>
    </div>
  )
}
