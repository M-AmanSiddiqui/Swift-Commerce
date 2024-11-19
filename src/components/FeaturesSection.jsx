

import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import CasualPic from "/src/assets/images/Frame 1 (4).png";
import FormalPic from "/src/assets/images/Frame 1 (3).png";
import PartyPic from "/src/assets/images/Frame 1 (2).png";
import GymPic from "/src/assets/images/Frame 1 (1).png";
import ProductData from './ProductsData';

export default function FeaturesSection() {
  const TopSellingProducts = ProductData.slice(0, 4);

  return (
    <div className="mt-16">
      
      <div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center">
          TOP SELLING
        </h1>
      </div>

      {/* Product Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16">
        {TopSellingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-customGray shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <img
              className="w-full h-48 object-cover"
              src={`assets/${product.images[0]}`}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-lg text-gray-800 font-bold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.subCategory}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center mt-12">
        <button className="px-8 py-2 border border-gray-400 rounded-xl font-semibold">
          View All
        </button>
      </div>
<br /><br /><br />



<div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center">
          NEW ARRIVAL
        </h1>
      </div>

      {/* Product Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16">
        {TopSellingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-customGray shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <img
              className="w-full h-48 object-cover"
              src={`assets/${product.images[0]}`}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-lg text-gray-800 font-bold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.subCategory}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center mt-12">
        <button className="px-8 py-2 border border-gray-400 rounded-xl font-semibold">
          View All
        </button>
      </div>

      <div className="my-16">
        <hr />
      </div>

      {/* Browse by Dress Style */}
      <div className="bg-customGray  mx-4  lg:mx-16 pb-20  rounded-3xl">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center pt-16">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-8 ">
          <img className="rounded-lg w-60 sm:w-48 lg:w-96" src={CasualPic} alt="Casual" />
          <img className="rounded-lg w-40 sm:w-48 lg:w-96" src={FormalPic} alt="Formal" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8   ">
          <img className="rounded-lg w-40 sm:w-48 lg:w-96" src={PartyPic} alt="Party" />
          <img className="rounded-lg w-40 sm:w-48 lg:w-96" src={GymPic} alt="Gym" />
        </div>
      </div>
    </div>
  );
}

