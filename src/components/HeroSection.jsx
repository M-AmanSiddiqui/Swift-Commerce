import React, { useState, useEffect } from 'react';
import VERSAGE from '/src/assets/images/hero-vector-1.png';
import ZARA from '/src/assets/images/hero-vector-2.png';
import GUCCI from '/src/assets/images/hero-vector-3.png';
import PRADA from '/src/assets/images/hero-vector-4.png';
import Calvin from '/src/assets/images/hero-vector-5.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Animated Counter Component
const AnimatedStat = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{count}+</h1>;
};

export default function HeroSection() {
  return (
    <div className="bg-[url('/src/assets/images/rectangle2.png')] bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-between bg-white bg-center sm:bg-top md:bg-center lg:bg-cover xl:bg-cover">
  {/* Your content here */}

      <div className="pt-8 sm:pt-16 lg:pt-24 px-4 sm:px-12 lg:px-24">
        <h1 className="font-integral font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-tight text-center sm:text-left">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <p className="text-customGrayDark mt-4 text-sm sm:text-base lg:text-lg text-center sm:text-left sm:pl-4 lg:pl-4">
          Browse through our diverse range of meticulously crafted garments, designed <br className="hidden sm:block" />
          to bring out your individuality and cater to your sense of style.
        </p>
        <div className="flex justify-center sm:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full mt-6 w-auto sm:w-36">
            Shop Now
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:ml-12 lg:ml-24 gap-6 sm:gap-12 lg:gap-28 mt-14 items-center">
        <div className="text-center">
          <AnimatedStat value={200} duration={2000} />
          <p className="text-customGrayDark text-sm sm:text-base lg:text-lg">International Brands</p>
        </div>
        <div className="text-center">
          <AnimatedStat value={2000} duration={3000} />
          <p className="text-customGrayDark text-sm sm:text-base lg:text-lg">High-Quality Products</p>
        </div>
        <div className="text-center">
          <AnimatedStat value={30000} duration={4000} />
          <p className="text-customGrayDark text-sm sm:text-base lg:text-lg">Happy Customers</p>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black w-full mt-20 flex flex-wrap justify-center gap-6 sm:gap-12 lg:gap-24 p-6 lg:p-8">
        <img className="w-10 sm:w-16 lg:w-24 xl:w-36" src={VERSAGE} alt="VERSAGE" />
        <img className="w-10 sm:w-16 lg:w-24 xl:w-36" src={ZARA} alt="ZARA" />
        <img className="w-10 sm:w-16 lg:w-24 xl:w-36" src={GUCCI} alt="GUCCI" />
        <img className="w-10 sm:w-16 lg:w-24 xl:w-36" src={PRADA} alt="PRADA" />
        <img className="w-10 sm:w-16 lg:w-24 xl:w-36" src={Calvin} alt="Calvin Klein" />
      </div>
    </div>
  );
}
