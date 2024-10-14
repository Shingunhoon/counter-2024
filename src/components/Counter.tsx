import { CONTRACT } from "@/app/constants";
import React from "react";
import { prepareContractCall } from "thirdweb";
import { TransactionButton, useReadContract } from "thirdweb/react";

export default function Counter() {
  const {
    data: count,
    isPending: loadingCount,
    refetch,
  } = useReadContract({
    contract: CONTRACT,
    method: "function getCount() public view returns (uint256)",
    params: [],
  });
  return (
    <div className="mt-8 text-center">
      <h1 className="text-3xl text-gray-700 font-bold">Counter</h1>
      {loadingCount ? (
        <h1>loading...</h1>
      ) : (
        <div className="mt-8 flex flex-row items-center justify-center gap-4">
          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract: CONTRACT,
                method: "function decrement() public",
              })
            }
            onTransactionSent={() => console.log("decrementing...")}
            onTransactionConfirmed={() => refetch()}
          >
            <span className="text-2xl">-</span>
          </TransactionButton>
          <h2 className="text-2xl w-24">{count?.toString()}</h2>
          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract: CONTRACT,
                method: "function increment() public",
              })
            }
            onTransactionSent={() => console.log("incrementing...")}
            onTransactionConfirmed={() => refetch()}
          >
            <span className="text-2xl">+</span>
          </TransactionButton>
        </div>
      )}
    </div>
  );
}
