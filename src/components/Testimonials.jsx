// import React from 'react'
// import { IoIosStar } from "react-icons/io";
// import { FaStarHalf } from "react-icons/fa";
// import { FcAcceptDatabase } from "react-icons/fc";
// import { FaCircleCheck } from "react-icons/fa6";

// export default function Testimonials() {
//   return (
//     <div>
//     <div>
//       <h1 className="text-4xl font-extrabold ml-14 mt-16">OUR HAPPY CUSTOMERS</h1>
//     </div>
//     <div className="flex flex-grow gap-2 ml-14 mt-8">
//       {/* Review 1 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
//         <div className="border border-gray-300 p-5 rounded-2xl">
//           <p className="flex text-yellow-400 gap-1 text-2xl">
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//           </p>
//           <h1 className="flex gap-2 pt-2 font-bold">
//             Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
//           </h1>
//           <p className="pt-2">
//             "I'm blown away by the quality and style of the <br /> clothes I
//             received from Shop.co. From casual <br /> wear to elegant dresses,
//             every piece I've bought <br /> has exceeded my expectations.”
//           </p>
//         </div>
//       </div>
  
//       {/* Review 2 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
//         <div className="border border-gray-300 p-5 rounded-2xl">
//           <p className="flex text-yellow-400 gap-1 text-2xl">
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//           </p>
//           <h1 className="flex gap-2 pt-2 font-bold">
//             Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
//           </h1>
//           <p className="pt-2">
//             "I'm blown away by the quality and style of the <br /> clothes I
//             received from Shop.co. From casual <br /> wear to elegant dresses,
//             every piece I've bought <br /> has exceeded my expectations.”
//           </p>
//         </div>
//       </div>
  
//       {/* Review 3 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
//         <div className="border border-gray-300 p-5 rounded-2xl">
//           <p className="flex text-yellow-400 gap-1 text-2xl">
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//           </p>
//           <h1 className="flex gap-2 pt-2 font-bold">
//             Sarah M. <FaCircleCheck className="text-green-950 mt-1" />
//           </h1>
//           <p className="pt-2">
//             "I'm blown away by the quality and style of the <br /> clothes I
//             received from Shop.co. From casual <br /> wear to elegant dresses,
//             every piece I've bought <br /> has exceeded my expectations.”
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
  
//   )
// }


import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 mt-16">
      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">
          OUR HAPPY CUSTOMERS
        </h1>
      </div>

      {/* Reviews */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Review 1 */}
        <div className="border border-gray-300 p-6 rounded-2xl shadow-lg">
          <p className="flex text-yellow-400 gap-1 text-xl sm:text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-4 font-bold text-lg sm:text-xl">
            Sarah M. <FaCircleCheck className="text-green-600 mt-1" />
          </h1>
          <p className="pt-4 text-sm sm:text-base">
            "I'm blown away by the quality and style of the clothes I received 
            from Shop.co. From casual wear to elegant dresses, every piece 
            I've bought has exceeded my expectations.”
          </p>
        </div>

        {/* Review 2 */}
        <div className="border border-gray-300 p-6 rounded-2xl shadow-lg">
          <p className="flex text-yellow-400 gap-1 text-xl sm:text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-4 font-bold text-lg sm:text-xl">
            John D. <FaCircleCheck className="text-green-600 mt-1" />
          </h1>
          <p className="pt-4 text-sm sm:text-base">
            "Shop.co has transformed my wardrobe! The variety, quality, 
            and affordability of their clothing are unmatched. Highly recommend!"
          </p>
        </div>

        {/* Review 3 */}
        <div className="border border-gray-300 p-6 rounded-2xl shadow-lg">
          <p className="flex text-yellow-400 gap-1 text-xl sm:text-2xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <h1 className="flex gap-2 pt-4 font-bold text-lg sm:text-xl">
            Emma L. <FaCircleCheck className="text-green-600 mt-1" />
          </h1>
          <p className="pt-4 text-sm sm:text-base">
            "Fantastic experience with Shop.co! Their designs are modern, 
            and the fit is perfect. My go-to for all occasions.”
          </p>
        </div>
      </div>
    </div>
  );
}
