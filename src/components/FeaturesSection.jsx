import React, { useState } from 'react'
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
import ProductList from './Product';
import { useEffect } from 'react';
import ProductData from './ProductsData';
export default function FeaturesSection() {
  const TopSellingProducts = ProductData.slice(0, 4);

  return (
<div className="mt-32">
  {/* New Arrivals */}
  <div>
    <h1 className="text-3xl lg:text-4xl font-extrabold text-center">NEW ARRIVAL</h1>
  </div>

  {/* Product Cards */}
  <div className="pl-4 pr-4 lg:pl-14 lg:pr-14 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {TopSellingProducts.slice(0, 5).map((product) => (
      <div
        key={product.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
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

  <br />
  <br />
  <hr />
  <br />
  <br />

  {/* Top Selling */}
  <div>
    <h1 className="text-3xl lg:text-4xl font-extrabold text-center">TOP SELLING</h1>
    <div className="pl-4 pr-4 lg:pl-14 lg:pr-14 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {TopSellingProducts.slice(0, 5).map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
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
  </div>

  {/* View All Button */}
  <div className="flex items-center justify-center mt-12">
    <button className="px-8 py-2 border border-gray-400 rounded-xl font-semibold">
      View All
    </button>
  </div>

  <br />
  <br />

  {/* Browse by Dress Style */}
  <div className="bg-customGray ml-4 mr-4 lg:ml-14 lg:mr-14 rounded-3xl">
    <h1 className="text-3xl lg:text-4xl font-extrabold font-integral text-center pt-16">
      BROWSE BY DRESS STYLE
    </h1>

    <div className="flex flex-wrap justify-center gap-4 p-5 mt-4">
      <img
        className="w-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
        src={CasualPic}
        alt="Casual"
      />
      <img
        className="w-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
        src={FormalPic}
        alt="Formal"
      />
    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <img
        className="w-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
        src={PartyPic}
        alt="Party"
      />
      <img
        className="w-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
        src={GymPic}
        alt="Gym"
      />
    </div>

    <br /><br /><br />
  </div>
</div>

  )
}
