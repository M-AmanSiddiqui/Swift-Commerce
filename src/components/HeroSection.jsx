import React, { useState, useEffect } from 'react';
import VERSAGE from '/src/assets/images/hero-vector-1.png';
import ZARA from '/src/assets/images/hero-vector-2.png';
import GUCCI from '/src/assets/images/hero-vector-3.png';
import PRADA from '/src/assets/images/hero-vector-4.png';
import Calvin from '/src/assets/images/hero-vector-5.png';

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

  return <h1 className="text-5xl font-semibold">{count}+</h1>;
};

export default function HeroSection() {
  return (
    <div className="bg-[url('/src/assets/images/rectangle2.png')] bg-no-repeat bg-cover w-full h-screen">
      <h1 className="font-integral font-extrabold text-4xl sm:text-6xl px-4 sm:pl-24 pt-16 sm:pt-24">
        FIND CLOTHES <br />
        THAT MATCHES <br />
        YOUR STYLE
      </h1>
      <p className="text-customGrayDark mt-4 px-4 sm:pl-28 text-sm">
        Browse through our diverse range of meticulously crafted garments,
        designed <br /> to bring out your individuality and cater to your sense of
        style.
      </p>
      <button className="bg-black text-white px-4 py-2 rounded-full mt-6 w-36 mx-4 sm:ml-32">
        Shop Now
      </button>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row sm:ml-24 gap-12 sm:gap-28 mt-14 font-satoshi items-center">
        <div className="text-center">
          <AnimatedStat value={200} duration={2000} />
          <p className="text-customGrayDark">International Brands</p>
        </div>
        <div className="text-center">
          <AnimatedStat value={2000} duration={3000} />
          <p className="text-customGrayDark">High-Quality Products</p>
        </div>
        <div className="text-center">
          <AnimatedStat value={30000} duration={4000} />
          <p className="text-customGrayDark">Happy Customers</p>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black max-w-full mt-20 flex flex-wrap justify-center gap-12 sm:gap-24 p-8">
        <img className="w-14 sm:w-auto" src={VERSAGE} alt="VERSAGE" />
        <img className="w-14 sm:w-auto" src={ZARA} alt="ZARA" />
        <img className="w-14 sm:w-auto" src={GUCCI} alt="GUCCI" />
        <img className="w-14 sm:w-auto" src={PRADA} alt="PRADA" />
        <img className="w-14 sm:w-auto" src={Calvin} alt="Calvin Klein" />
      </div>
    </div>
  );
}
