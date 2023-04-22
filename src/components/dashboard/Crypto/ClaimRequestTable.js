import React from "react";

const ClaimRequestTable = ({ requests }) => {
  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Claim Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Nominee Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                      User Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Doc
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req, i) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="px-6 py-4">{i + 1}</td>
                      <th scope="row" class="whitespace-nowrap  px-6 py-4">
                        {req.nomineeAddress}
                      </th>
                      <td class="px-6 py-4">{req.userAddress}</td>
                      <td class="px-6 py-4">
                        {req.processed ? (
                          req.isApproved ? (
                            <span className="text-green-500">Approved</span>
                          ) : (
                            <span className="text-red-500">Rejected</span>
                          )
                        ) : (
                          <span className="text-blue-500">Pending</span>
                        )}
                      </td>
                      <td class="px-6 py-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                          href={req.IpfsClaimLink}
                        >
                          view
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimRequestTable;
