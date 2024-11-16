import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaCircleCheck } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div>
    <div>
      <h1 className="text-4xl font-extrabold ml-14 mt-16">OUR HAPPY CUSTOMERS</h1>
    </div>
    <div className="flex flex-grow gap-2 ml-14 mt-8">
      {/* Review 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border border-gray-300 p-5 rounded-2xl">
          <p className="flex text-yellow-400 gap-1 text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-2 font-bold">
            Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
          </h1>
          <p className="pt-2">
            "I'm blown away by the quality and style of the <br /> clothes I
            received from Shop.co. From casual <br /> wear to elegant dresses,
            every piece I've bought <br /> has exceeded my expectations.”
          </p>
        </div>
      </div>
  
      {/* Review 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border border-gray-300 p-5 rounded-2xl">
          <p className="flex text-yellow-400 gap-1 text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-2 font-bold">
            Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
          </h1>
          <p className="pt-2">
            "I'm blown away by the quality and style of the <br /> clothes I
            received from Shop.co. From casual <br /> wear to elegant dresses,
            every piece I've bought <br /> has exceeded my expectations.”
          </p>
        </div>
      </div>
  
      {/* Review 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border border-gray-300 p-5 rounded-2xl">
          <p className="flex text-yellow-400 gap-1 text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-2 font-bold">
            Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
          </h1>
          <p className="pt-2">
            "I'm blown away by the quality and style of the <br /> clothes I
            received from Shop.co. From casual <br /> wear to elegant dresses,
            every piece I've bought <br /> has exceeded my expectations.”
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
