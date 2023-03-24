import React, { useState } from "react";
import Loader from "../utils/Loader";

const ViewCryptoContract = () => {
  const [loading, setloading] = useState(false);

  return (
    <div className="relative w-full my-4">
      {loading && (
        <div className="w-full h-screen flex items-center justify-center absolote top-0 left-0 bg-slate-100 bg-opacity-20">
          <Loader />
        </div>
      )}
      <div className="rounded shadow-md p-8 bg-[#f4f4f4] w-full">
        <h1 className="text-5xl font-bold text-violet-900 mb-12">Will Name</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-semibold">User Address</h1>
            <p className="text-xl text-slate-500 italic">
              0x82398247493840823583284
            </p>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-semibold">Will Amount</h1>
            <p className="text-xl text-slate-500 italic">12 ETH</p>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-semibold">Aadhar Link</h1>
            <a href="/" target={"_blank"} rel="noreferrer">
              <p className="text-xl text-blue-500 italic underline">
                View Aadhar
              </p>
            </a>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-semibold">Will Executing After</h1>
            <p className="text-xl text-slate-500 italic">6 Months</p>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-semibold">Nominee Addresses</h1>
            <ul className="list-disc text-slate-500 italic p-4">
                <li>0x72977903812302321</li>
                <li>0x72977903812302321</li>
                <li>0x72977903812302321</li>
                <li>0x72977903812302321</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCryptoContract;
