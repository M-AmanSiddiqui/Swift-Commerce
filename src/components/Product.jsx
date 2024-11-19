import React from "react";
import { Link } from "react-router-dom";  // Don't forget to import Link
import ProductData from "./ProductsData";
import Navbar from "./Navbar";
import Header from "./Header";

const ProductList = () => {
  return (
    <div>  
      <Navbar />
      <Header />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="bg-customGray shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <Link to={`/product/${product.id}`}>  {/* Link with dynamic id */}
              <img
                className="w-full h-48 object-cover"
                src={product.images}
                alt={product.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-500">{product.subCategory}</p>
                <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
