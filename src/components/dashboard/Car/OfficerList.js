import React from "react"; 

const OfficerList = ({ officers }) => {
  return (
    <div className="bg-[#f4f4f4] rounded shadow-md my-4 pt-1 pb-4">
      <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
        List of Officers
      </h1>
      {officers.length > 0 ? (
        <ul className="list-disc p-8">
          {officers?.map((off, i) => (
            <li className="font-semibold" key={`officer${i}`}>{off}</li>
          ))}
        </ul>
      ) : (
        <p className="p-4 font-bold">No officers added</p>
      )}
    </div>
  );
};

export default OfficerList;
