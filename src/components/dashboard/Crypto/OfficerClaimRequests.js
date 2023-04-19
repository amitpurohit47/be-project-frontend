import React, { useEffect, useState } from "react";
import { getClaimRequests } from "../../../utils/contractMethods";
import OfficerClaimRequestCard from "./OfficerClaimRequestCard";
import Loader from "../../utils/Loader";

const OfficerClaimRequests = () => {
  const [loading, setloading] = useState(false);
  const [requets, setrequets] = useState([]);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    const fetchRequests = async () => {
      const reqs = await getClaimRequests();
      console.log(reqs.length)
      setrequets(reqs);
    };
    fetchRequests();
  }, [flag]);

  return  (
    <div>
      <div className="bg-[#f4f4f4] pt-8 rounded shadow-md mb-4">
        <h1 className="text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
          Nominee Claim Requests
        </h1>
        <p className="text-slate-500 text-sm italic p-4">
          All the Claim Requests for transfer of Will appear here for approval
          or rejection in case anything goes wrong
        </p>
      </div>
      {loading ? (
        <div className="w-full p-8 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-4 ">
          {requets.slice().reverse().map((request, i) => (
            <OfficerClaimRequestCard request={request} key={`request${i}`} setloading={setloading} index={requets.length - 1- i} setFlag = {setFlag}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfficerClaimRequests;
