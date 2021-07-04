import React from "react";
import Key from "../components/Key";

/*
 * Transaction View using Key component to render Keys-Transaction page.
 * Use default values for the transaction.
 */
const TransactionsView = () => {
  return (
    <Key
      page_title={"Transactions"}
      flags={{ tx: true }}
      default_transaction={{
        amount: "20.00",
        to: "04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74",
      }}
    />
  );
};

export default TransactionsView;
