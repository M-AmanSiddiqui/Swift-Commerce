import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import Cart1  from "/src/assets/images/Feature img 1.png";
import Cart2  from "/src/assets/images/Feature img 2.png";
import Cart3  from "/src/assets/images/Feature img 3.png";
import Cart4  from "/src/assets/images/Feature img 4.png";
import Cart5  from "/src/assets/images/Feature img 5.png";
import Cart6  from "/src/assets/images/Feature img 6.png";
import Cart7  from "/src/assets/images/Feature img 7.png";
import Cart8  from "/src/assets/images/Feature img 8.png";
import CasualPic from "/src/assets/images/Frame 1 (4).png"
import FormalPic from "/src/assets/images/Frame 1 (3).png"
import PartyPic from "/src/assets/images/Frame 1 (2).png"
import GymPic from "/src/assets/images/Frame 1 (1).png"
export default function FeaturesSection() {
  return (
    <div className=' mt-32 ' >

      {/* {New Arrivals} */}
      <div>
<h1 className='text-4xl font-bold text-center'>NEW ARRIVAL</h1>
</div>

<div className='flex'>

<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart1} alt="ti-shirt" />
<h4 className='font-bold mt-2'>T-Shirt with Tape Details</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$120</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart2} alt="ti-shirt" />
<h4 className='font-bold mt-2'>Skinny Fit Jeans</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$121</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart3}alt="ti-shirt" />
<h4 className='font-bold mt-2'>Checkered Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$122</h1>
</div>



<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart4} alt="ti-shirt" />
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
<img className='rounded-lg ' src={Cart5} alt="ti-shirt" />
<h4 className='font-bold mt-2'> Vertical Striped Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$124</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart6} alt="ti-shirt" />
<h4 className='font-bold mt-2'> Courage Graphic T-Shirt</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$125</h1>
</div>


<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart7} alt="ti-shirt" />
<h4 className='font-bold mt-2'>Loose Fit Bermuda Shorts</h4>
<p className='flex flex-wrap text-yellow-300 mt-1 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf /></p>
<h1 className='mt-2 ml-1 font-satoshi text-1xl'>$126</h1>
</div>



<div className='mt-12  pl-14 pr-14  '>
<img className='rounded-lg ' src={Cart8} alt="ti-shirt" />
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


<br /><br />
<div className='bg-customGray ml-14 mr-14 rounded-3xl'><h1 className='text-4xl font-extrabold font-integral text-center pt-16'>BROWSE BY DRESS STYLE</h1>\

<div className='flex ml-10 gap-6 p-5  mt-4'>
  <img src={CasualPic} alt="Casual" />
  <img src={FormalPic} alt="Formal" />
  </div>
  <div className='flex ml-14 gap-6 '>
  <img src={PartyPic} alt="Party" />
  <img src={GymPic} alt="Gym" />
  </div>
<br /><br /><br />

</div>
</div>





  )
}
