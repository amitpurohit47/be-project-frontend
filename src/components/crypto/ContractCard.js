import React, { useState } from "react";

const ContractCard = () => {
  const [date, setdate] = useState("");

  return (
    <div className="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1>Will Name</h1>
      <h3>
        Amount Held in Contract <span>12 ETH</span>
      </h3>
      <h3>Nominees</h3>
      <ul>
        <li>0x0000000000000000000000000000001</li>
        <li>0x0000000000000000000000000000002</li>
        <li>0x0000000000000000000000000000003</li>
        <li>0x0000000000000000000000000000004</li>
      </ul>
      <h3>Contract Deadline {date}</h3>
      <h3>Aadhar Link </h3>
    </div>
  );
};

export default ContractCard;
