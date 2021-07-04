import React from "react";
import BlockchainView from "../components/Blockchain";

/*
 * Tokens View using Blockchain component to render Transaction Token page.
 * Use the tx flag to display Transactions, and render 3 sets of Blockchains.
 */
const blochain_flags = {
  tx: true,
};

const TokensView = () => {
  return (
    <>
      <BlockchainView
        page_title={"Tokens"}
        peer_title={"Peer A"}
        flags={blochain_flags}
      />
      <BlockchainView peer_title={"Peer B"} flags={blochain_flags} />
      <BlockchainView peer_title={"Peer C"} flags={blochain_flags} />
    </>
  );
};

export default TokensView;
