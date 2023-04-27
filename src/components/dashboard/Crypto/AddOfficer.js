import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addOfficer, getOfficers } from "../../../utils/contractMethods";
import Loader from "../../utils/Loader";
import { sendEmail } from "../../../utils/Email";
import OfficerList from "./OfficerList"; 

const AddOfficer = ({ officers, setofficers, government }) => {
  const [officer, setofficer] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [officerAadhar, setOfficerAadhar] = useState("");
  const [officerEmail, setofficerEmail] = useState("");
  const [loading, setloading] = useState(false);
  const [newOfficers, setNewOfficers] = useState([]);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    const claimOff = async () => {
      const mt = await getOfficers();
      setNewOfficers(mt);
      console.log(mt)
    }
    claimOff();
    
  },[flag]);

  function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  function validateAadhar(aadharNumber) {
    // Aadhar number should be exactly 12 digits long
    if (aadharNumber.length !== 12) {
      return false;
    }
  
    // Aadhar number should only contain digits
    if (!/^\d+$/.test(aadharNumber)) {
      return false;
    }
  
    // Aadhar number is valid
    return true;
  }
  

  function validateEmail(email) {
    // regular expression to match the email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleAdd = async () => {
    if(officer === "" || officerName === "" || officerAadhar === "" || officerEmail === "") {
      toast.error("Enter all fields");
      return;
    }
    if(validateEmail(officerEmail) === false) {
      toast.error("Plz enter correct email");
      return;
    }
    if(validateAadhar(officerAadhar) === false) {
      toast.error("Plz enter valid aadhar number");
      return;
    }
    if (
      officer.length !== 42 ||
      hasWhiteSpace(officer) === true
    ) {
      toast.error(
        "address should contain 42 chars. and \n should not contain space character in it"
      );
      return;
    }
    setloading(true);
    try {
      const tx = await addOfficer(officer, officerName, officerAadhar);
      const offs = officers;
      offs.push(officer);
      setFlag(flag + newOfficers.length+ 1);
      console.log(offs);

      if (tx) {
        sendEmail(
          officerEmail,
          `CryptoBridge Team wants to inform you that Crypto Contract Owner ${government} has added you as the officer for Crypto Contract Claim Settlement. Your duties are to handle the claims by users for crypto contracts.`,
          "Addition of Officer"
        );
        setofficers([offs]);
        setOfficerName("");
        setOfficerAadhar("");
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
            Enter Officer Full Name
            <span className="italic text-slate-500 text-xs">
              {" "}
              To keep mapping of address and user
            </span>
          </p>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Officer Full Name"
            type="text"
            name="officer email"
            value={officerName}
            onChange={(e) => setOfficerName(e.target.value)}
          />
        </div>
        <div className="px-4 pt-2">
          <p className="text-xl mb-2 font-bold">
            Enter Officer Aadhar No.
            <span className="italic text-slate-500 text-xs">
              {" "}
              To keep mapping of address and user
            </span>
          </p>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Officer Aadhar No."
            type="text"
            name="officer email"
            value={officerAadhar}
            onChange={(e) => setOfficerAadhar(e.target.value)}
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
      <OfficerList officers={newOfficers} />
    </div>
  );
};

export default AddOfficer;
