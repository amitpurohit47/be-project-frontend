import React, { useEffect, useState } from "react";
import { getClaimRequests } from "../../../utils/contractMethods";
import OfficerClaimRequestCard from "./OfficerClaimRequestCard";
import Loader from "../../utils/Loader";
import ClaimRequestTable from "./ClaimRequestTable";

const OfficerClaimRequests = () => {
  const [loading, setloading] = useState(false);
  const [requets, setrequets] = useState([]);
  const [flag, setFlag] = useState(1);
  const [claimView, setClaimView] = useState(true);

  const viewToggle = () => {
    setClaimView(!claimView);
  };

  useEffect(() => {
    const fetchRequests = async () => {
      const reqs = await getClaimRequests();
      console.log(reqs);
      setrequets(reqs);
    };
    fetchRequests();
  }, [flag]);

  return (
    <div>
      <div className="bg-[#f4f4f4] pt-8 rounded shadow-md mb-4">
        <h1 className="text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
          Nominee Claim Requests
        </h1>
        <p className="text-slate-500 text-sm italic p-4">
          All the Claim Requests for transfer of Will appear here for approval
          or rejection in case anything goes wrong
        </p>
        <button
          onClick={() => viewToggle()}
          type="button"
          class="text-white bg-blue-700 m-5 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {!claimView ? (
            <span>Change to Table View</span>
          ) : (
            <span>Change to Card View</span>
          )}
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {loading ? (
        <div className="w-full p-8 flex items-center justify-center">
          <Loader />
        </div>
      ) : claimView ? (
        <ClaimRequestTable requests={requets} />
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-4 ">
          {requets
            .slice()
            .reverse()
            .map((request, i) => (
              <OfficerClaimRequestCard
                request={request}
                key={`request${i}`}
                setloading={setloading}
                index={requets.length - 1 - i}
                setFlag={setFlag}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default OfficerClaimRequests;
