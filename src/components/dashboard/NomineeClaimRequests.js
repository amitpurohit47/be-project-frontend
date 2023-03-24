import React from "react";

const NomineeClaimRequests = () => {
  return (
    <div>
      <div className="bg-[#f4f4f4] pt-8 rounded shadow-md mb-4">
        <h1 className="text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
          Your Claim Requests
        </h1>
        <p className="text-slate-500 text-sm italic p-4">
          All the Claim Requests for transfer of Will appear here and reasons
          for rejection of claim
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#f4f4f4] p-4 rounded shadow-md">
          <p className="text-xl font-bold">Nominee Address</p>
          <p className="text-slate-500 text-sm italic p-4">
            0x7859324569743206548325043254
          </p>
          <p className="text-xl font-bold">Will Owner Address</p>
          <p className="text-slate-500 text-sm italic p-4">
            0x7859324569743206548325043254
          </p>
          <p className="text-xl font-bold">Request Status</p>
          <p className="text-red-500 text-sm italic p-4">
            Rejected
          </p>
          <p className="text-xl font-bold">
            Reason for Rejection/Acceptance Note
          </p>
          <p className="text-slate-500 text-sm italic p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde
            ratione dolore quas laborum repellat cupiditate rem quibusdam
            voluptas fugit, culpa nesciunt, reprehenderit, error iusto. Modi
            animi expedita maiores molestiae.
          </p>
          <p className="text-xl font-bold">Document for Proof of Claim</p>
          <a href="/">
            <p className="text-blue-500 text-sm italic p-4 underline">
              View Aadhar
            </p>
          </a>
        </div>
        <div className="bg-[#f4f4f4] p-4 rounded shadow-md">
          <p className="text-xl font-bold">Nominee Address</p>
          <p className="text-slate-500 text-sm italic p-4">
            0x7859324569743206548325043254
          </p>
          <p className="text-xl font-bold">Will Owner Address</p>
          <p className="text-slate-500 text-sm italic p-4">
            0x7859324569743206548325043254
          </p>
          <p className="text-xl font-bold">Request Status</p>
          <p className="text-red-500 text-sm italic p-4">
            Rejected
          </p>
          <p className="text-xl font-bold">
            Reason for Rejection/Acceptance Note
          </p>
          <p className="text-slate-500 text-sm italic p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde
            ratione dolore quas laborum repellat cupiditate rem quibusdam
            voluptas fugit, culpa nesciunt, reprehenderit, error iusto. Modi
            animi expedita maiores molestiae.
          </p>
          <p className="text-xl font-bold">Document for Proof of Claim</p>
          <a href="/">
            <p className="text-blue-500 text-sm italic p-4 underline">
              View Aadhar
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NomineeClaimRequests;
