import React, { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../../context/CryptoContext";
import { getUserWill, showError } from "../../utils/contractMethods";
import Loader from "../utils/Loader";

const ViewContract = () => {
  const { currentAccount } = useContext(CryptoContext);

  const [will, setwill] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getWill = async () => {
      try {
        if (currentAccount) {
          const res = await getUserWill(currentAccount);
          setwill(res);
          setloading(false);
        }
      } catch (error) {
        showError(error);
      }
    };
    getWill();
  }, [currentAccount]);

  return loading ? (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundColor: "rgba(34,15,104,255)",
      }}
    >
      <Loader />{" "}
    </div>
  ) : (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: "rgba(34,15,104,255)",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center w-4/5">
        <div>
          <h1 className="text-4xl text-white font-bold mb-4">
            More Info about your Contract
          </h1>
          <ul className="list-disc text-white text-2xl">
            <li className="mb-2">Add Name of the Will you wish to make</li>
            <li className="mb-2">
              Enter the amount in ether to deposit in the will
            </li>
            <li className="mb-2">
              Add list of Nominees you want to transfer your will
            </li>
            <li className="mb-2">
              If you wish you can add the time period after which you wish to
              automatically transfer your crypto
            </li>
            <li className="mb-2">Upload Aadhar card in PDF format</li>
            <li className="mb-2">
              Verify Information carefully before creating contract
            </li>
            <li className="mb-2">
              Contract once deployed cannot be revoked in any case
            </li>
          </ul>
        </div>
        {loading ? (
          <div
            style={{ background: "rgb(4, 0, 77)" }}
            className="flex items-center justify-center shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          >
            <Loader />
          </div>
        ) : (
          <div
            style={{ background: "rgb(4, 0, 77)" }}
            className="shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          >
            <h1 className="text-white text-bold text-4xl mb-8">Will Name</h1>
            <h2
              className="text-3xl text-bold mb-1"
              style={{ color: "rgb(59, 42, 142)" }}
            >
              User Address
            </h2>
            <p className="text-white mb-4">{will ? will?.userAddress : ""}</p>
            <h2
              className="text-white text-bold text-3xl mb-1"
              style={{ color: "rgb(59, 42, 142)" }}
            >
              Nominees
            </h2>
            <ul className="list-disc mb-4">
              {will.nominees && will.nominees.length > 0
                ? will?.nominees.map((nominee, i) => (
                    <li
                      className="text-white text-xl mb-0.5"
                      key={`nominee${i}`}
                    >
                      {nominee}
                    </li>
                  ))
                : ""}
            </ul>
            <h2 className="text-3xl mb-1" style={{ color: "rgb(59, 42, 142)" }}>
              Amount Held
            </h2>
            <p className="text-white mb-4">{will?.amount?.toString()}</p>
            <h2 className="text-3xl mb-1" style={{ color: "rgb(59, 42, 142)" }}>
              Aadhar Identification
            </h2>
            <p className="mb-4">
              <a href={`${will?.IpfsAdharLink}`} className="text-white underline">View Aadhar</a>
            </p>
            <h2 className="text-3xl mb-1" style={{ color: "rgb(59, 42, 142)" }}>
              Will Deadline
            </h2>
            <p className="text-white">{will?.deadline?.toString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewContract;
