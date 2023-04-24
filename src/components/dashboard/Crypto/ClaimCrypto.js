import React, { useState } from "react";
import { toast } from "react-toastify";
import { claimRequest, getUserWill, getClaimRequests } from "../../../utils/contractMethods";
import { storeFiles } from "../../../utils/web3.storage";
import Loader from "../../utils/Loader";

const ClaimCrypto = () => {
  const [address, setaddress] = useState("");
  const [loading, setloading] = useState(false);
  const [file, setfile] = useState(null);

  const handleClaim = async () => {
    setloading(true);
    if(await isWillComplited() === true) {
      setloading(false);
      toast.error("Claim request has been approved and \n Will already completed");
      return;
    }
    if(await isClaimInProcess() === true) {
      setloading(false);
      return;
    }
    try {
      const cid = await storeFiles(file);
      const ipfsLink = `https://${cid}.ipfs.w3s.link/${file[0].name}`;
      await claimRequest(address, ipfsLink);
      toast.success("Submitted Request!");
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  const isWillComplited = async () => {
    try {
      const isCompleted = await getUserWill(address);
      console.log("isComplited = " + isCompleted.completed);
      return isCompleted.completed;
    } catch (error) {
      console.log(error);
      toast.error("Error, try after some time...");
    }
  }

  const isClaimInProcess = async () => {
    try {
      let requests = await getClaimRequests();
      for(let i = 0; i < requests.length; i++){
        if(requests[i].processed === false && requests[i].userAddress === address) {
          console.log(requests[i]);
          toast.error("Request already is in process for user :\n" + address);
          return true;
        }
      }
      return false;
    }catch(e) {
      console.log("isClaimInProcess = " + e);
      toast.error("try after some time");
      return true;
    }
  }

  return (
    <div className="bg-[#f4f4f4] shadow-md rounded w-full my-4">
      <div className="py-8 ">
        <h1 className="text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
          Claim Crypto Will
        </h1>
        {loading ? (
          <div className="w-full p-8 flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-4 px-4">
                <p className="text-xl mb-2 font-bold">
                  Enter Will Owner Address{" "}
                  <span className="italic text-slate-500 text-xs">
                    Address of user who created will
                  </span>
                </p>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Enter Will Owner Address"
                  type="text"
                  name="owner address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="p-4">
                <p className="text-xl mb-2 font-bold">
                  Upload Claim Proof{" "}
                  <span className="italic text-slate-500 text-xs">
                    Document to claim death of owner
                  </span>
                </p>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100
                        "
                  onChange={(e) => setfile(e.target.files)}
                />
              </div>
            </div>
            <div className="p-4">
              <button
                className="cursor-pointer px-6 py-2 bg-[#220F68] text-white rounded-full font-bold mr-4 text-xl"
                onClick={handleClaim}
              >
                Claim Will
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimCrypto;
