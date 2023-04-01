import React, { useState } from "react";
import {
  showError,
  executeWillThroughOfficer,
} from "../../utils/contractMethods";

const OfficerClaimRequestCard = ({ request, setloading }) => {
  const [note, setnote] = useState("");

  const handleRequest = async (approved) => {
    setloading(true);
    try {
      await executeWillThroughOfficer(request.useraddress, note, approved);
    } catch (error) {
      showError(error);
      setloading(false);
    }
  };

  return (
    <div className="bg-[#f4f4f4] p-4 rounded shadow-md">
      <p className="text-xl font-bold">Nominee Address</p>
      <p className="text-slate-500 text-sm italic p-4">
        {request.nomineeAddress}
      </p>
      <p className="text-xl font-bold">Will Owner Address</p>
      <p className="text-slate-500 text-sm italic p-4">{request.userAddress}</p>
      <p className="text-xl font-bold">Document for Proof of Claim</p>
      <a href="/">
        <p className="text-blue-500 text-sm italic p-4 underline">
          {request.IpfsClaimLink}
        </p>
      </a>
      <p className="text-xl font-bold mb-4">
        Reason for Rejection/Acceptance Note
      </p>
      <textarea
        required
        value={note}
        onChange={(e) => setnote(e.target.value)}
        placeholder="Reason for Rejection/Acceptance Note"
        className="mb-4 w-full textarea-info text-sm p-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      ></textarea>
      <p className="text-xl font-bold mb-4">Approve/Reject Request</p>
      <div className="flex">
        <button
          type="button"
          className="mr-2 cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => handleRequest(true)}
        >
          Approve
        </button>
        <button
          type="button"
          className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleRequest(false)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default OfficerClaimRequestCard;
