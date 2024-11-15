import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
export default function FeaturesSection() {
  return (
    <div className=' mt-32 ' >

      {/* {New Arrivals} */}
      <div>
<h1 className='text-4xl font-bold text-center'>NEW ARRIVAL</h1>
</div>

<div className='flex'>

<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 1.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>T-Shirt with Tape Details</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$120</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 2.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>Skinny Fit Jeans</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$121</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 3.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>Checkered Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$122</h1>
</div>



<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 4.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>Sleeve Striped T-shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$123</h1>
</div>
</div>

<div className="flex items-center justify-center mt-12">
  <button className="pl-9 pr-9 p-2 border border-gray-400 rounded-xl font-semibold">
    View All
  </button>
</div><br /><br /><br />
<hr />
<br /><br />



{/* {Top SElling} */}

<h1 className='text-4xl font-bold text-center'>TOP SELLING</h1>




<div className='flex'>

<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 5.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'> Vertical Striped Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$124</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 6.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'> Courage Graphic T-Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$125</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 7.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>Loose Fit Bermuda Shorts</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$126</h1>
</div>



<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src="/src/assets/images/Feature img 8.png" alt="ti-shirt" />
<h4 className='font-bold mt-2'>Faded Skinny Jeans</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$127</h1>
</div>
</div>


<div className="flex items-center justify-center mt-12">
  <button className="pl-9 pr-9 p-2 border border-gray-400 rounded-xl font-semibold">
    View All
  </button>
</div>
</div>





  )
}
