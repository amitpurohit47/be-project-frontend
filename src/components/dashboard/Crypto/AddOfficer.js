import React, { useState } from "react";
import { toast } from "react-toastify";
import { addOfficer } from "../../../utils/contractMethods";
import Loader from "../../utils/Loader";
import { sendEmail } from "../../../utils/Email";
import OfficerList from "./OfficerList";

const AddOfficer = ({ officers, setofficers, government }) => {
  const [officer, setofficer] = useState("");
  const [officerEmail, setofficerEmail] = useState("");
  const [loading, setloading] = useState(false);

  const handleAdd = async () => {
    setloading(true);
    try {
      const tx = await addOfficer(officer);
      const offs = officers;
      offs.push(officer);
      if (tx) {
        sendEmail(
          officerEmail,
          `CryptoBridge Team wants to inform you that Crypto Contract Owner ${government} has added you as the officer for Crypto Contract Claim Settlement. Your duties are to handle the claims by users for crypto contracts.`,
          "Addition of Officer"
        );
        setofficers(offs);
        toast.success("Officer added successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setloading(false);
    setofficer("");
    setofficerEmail("");
  };

  return loading ? (
    <div className="w-full p-8 flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div>
      <div className="bg-[#f4f4f4] rounded shadow-md my-4 pt-1 pb-4">
        <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
          Add Officer
        </h1>
        <div className="px-4 pt-4">
          <p className="text-xl mb-2 font-bold">
            Enter Officer Address
            <span className="italic text-slate-500 text-xs">
              {" "}
              Public address of Officer
            </span>
          </p>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Officer Address"
            type="text"
            name="Officer address"
            value={officer}
            onChange={(e) => setofficer(e.target.value.toLowerCase())}
          />
        </div>
        <div className="px-4 pt-2">
          <p className="text-xl mb-2 font-bold">
            Enter Officer Email
            <span className="italic text-slate-500 text-xs">
              {" "}
              Intimate Officer of them being added as the officer
            </span>
          </p>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Officer Email"
            type="email"
            name="officer email"
            value={officerEmail}
            onChange={(e) => setofficerEmail(e.target.value)}
          />
        </div>
        <div className="p-4">
          <button
            className="cursor-pointer px-6 py-2 bg-[#220F68] text-white rounded-full font-bold mr-4 text-xl"
            onClick={handleAdd}
          >
            Add Officer
          </button>
        </div>
      </div>
      <OfficerList officers={officers} />
    </div>
  );
};

export default AddOfficer;
