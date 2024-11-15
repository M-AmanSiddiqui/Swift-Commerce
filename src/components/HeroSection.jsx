import React from 'react'
 import VERSAGE from '/src/assets/images/hero-vector-1.png';
 import ZARA from '/src/assets/images/hero-vector-2.png';
 import GUCCI from '/src/assets/images/hero-vector-3.png';
 import PRADA from '/src/assets/images/hero-vector-4.png';
 import Calvin from '/src/assets/images/hero-vector-5.png';


export default function HeroSection() {
  return (
    <div className="bg-[url('/src/assets/images/rectangle2.png')] bg-no-repeat bg-cover w-full h-screen">
     
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
<img className='ml-10' src={VERSAGE} alt="VERSAGE" /> <img src={ZARA} alt="ZARA" /><img src={GUCCI} alt="GUCCI" /><img src={PRADA} alt="PRADA" /><img src={Calvin} alt="Calvin Klein" />
</div>

      </div>

      
  )
}
