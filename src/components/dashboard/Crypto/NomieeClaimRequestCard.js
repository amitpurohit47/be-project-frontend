import React from "react";

const NomieeClaimRequestCard = ({ request }) => {
  return (
    <div className="bg-[#f4f4f4] p-4 rounded shadow-md">
      <p className="text-xl font-bold">Nominee Address</p>
      <p className="text-slate-500 text-sm italic p-4">
        {request.nomineeAddress}
      </p>
      <p className="text-xl font-bold">Will Owner Address</p>
      <p className="text-slate-500 text-sm italic p-4">
        {request.userAddress}
      </p>
      <p className="text-xl font-bold">Request Status</p>
      <p className="text-red-500 text-sm italic p-4"></p>
      <p className="text-xl font-bold">Reason for Rejection/Acceptance Note</p>
      <p className="text-slate-500 text-sm italic p-4">
        {request.note}
      </p>
      <p className="text-xl font-bold">Document for Proof of Claim</p>
      <a href={request.IpfsClaimLink}>
        <p className="text-blue-500 text-sm italic p-4 underline">
          View Aadhar
        </p>
      </a>
    </div>
  );
};

export default NomieeClaimRequestCard;
