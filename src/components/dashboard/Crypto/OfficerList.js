import React from "react";

const OfficerList = ({ officers }) => {
  console.log(officers)
  return (
    <div className="bg-[#f4f4f4] rounded shadow-md my-4 pt-1 pb-4">
      <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
        List of Officers
      </h1>
      {officers.length > 0 ? (
        <div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Officer Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Aadhar No.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {officers.map((req, i) => (
                        <tr class="border-b dark:border-neutral-500">
                          <td class="px-6 py-4">{i + 1}</td>
                          <th scope="row" class="whitespace-nowrap  px-6 py-4">
                            {req.officerAddress}
                          </th>
                          <td class="px-6 py-4">{req.officerName}</td>
                          <td class="px-6 py-4">{req.officerAdharNo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="p-4 font-bold">No officers added</p>
      )}
    </div>
  );
};

export default OfficerList;
