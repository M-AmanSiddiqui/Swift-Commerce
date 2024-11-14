import React from 'react'

export default function HeroSection() {
  return (
    <div class= "bg-hero-bg bg-no-repeat bg-cover" className="w-full h-96 bg">
     
     <h1 className='font-integral font-extrabold text-6xl pl-24 pt-24 w-577'>FIND CLOTHES <br />THAT MATCHES <br /> YOUR STYLE</h1>
      <p className='text-customGrayDark pt-4 pl-28 text-sm'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
      <button className='bg-black text-white p-2 ml-32 mt-4 rounded-[62px] w-36'>Shop Now</button>
      <div className='flex flex-wrap ml-24 gap-28 mt-14 font-satoshi '> 

      <div><h1 className='text-5xl font-semibold'>200+</h1>
      <p className='text-customGrayDark'>International Brands</p>
      </div>
    
    
      <div><h1 className='text-5xl font-semibold'>2,000+</h1>
      <p className='text-customGrayDark'>High-Quality Products</p>
      </div>

      <div><h1 className='text-5xl font-semibold'>30,000+</h1>
      <p className='text-customGrayDark'>Happy Customers</p>
       </div>  
  </div>
  <div className='bg-black max-w-full mt-20  flex flex-wrap gap-24 p-8  '>
<img className='ml-10' src="/imges/hero-vector-1.png" alt="VERSAGE" /> <img src="/imges/hero-vector-2.png" alt="VERSAGE" /><img src="/imges/hero-vector-3.png" alt="VERSAGE" /><img src="/imges/hero-vector-4.png" alt="VERSAGE" /><img src="/imges/hero-vector-5.png" alt="VERSAGE" />
</div>

      </div>

      
  )
}
