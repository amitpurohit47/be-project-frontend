import React, { useState } from "react";

const Products = () => {
  const [product, setproduct] = useState("Crypto");

  return (
    <div id="products">
      <h1 className="text-5xl mb-8 text-center text-white font-bold">Our Products</h1>
      <ul className="flex items-center justify-center">
        <li
          onClick={() => setproduct("Crypto")}
          className={`${
            product === "Crypto" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Crypto
        </li>
        <li
          onClick={() => setproduct("Land")}
          className={`${
            product === "Land" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Land
        </li>
        <li
          onClick={() => setproduct("Residential Flats")}
          className={`${
            product === "Residential Flats" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Residential Flats
        </li>
        <li
          onClick={() => setproduct("Industrial Estate")}
          className={`${
            product === "Industrial Estate" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Industrial Estate
        </li>
        <li
          onClick={() => setproduct("Commercial Estate")}
          className={`${
            product === "Commercial Estate" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Commercial Estate
        </li>
        <li
          onClick={() => setproduct("Vehicle")}
          className={`${
            product === "Vehicle" ? "bg-white text-black" : "text-white"
          } px-4 py-2 text-xl rounded-md mx-4 cursor-pointer`}
        >
          Vehicle
        </li>
      </ul>
    </div>
  );
};

export default Products;
