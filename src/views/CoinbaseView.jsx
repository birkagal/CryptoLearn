import React from "react";
import BlockchainView from "../components/Blockchain";

/*
 * Coinbase View using Blockchain Component to render Coinbase page. Set the spesific flags and render
 * 3 Blockchains to the page.
 */
const blockchain_flags = {
  tx: true,
  coinbase: true,
};

const CoinbaseView = () => {
  return (
    <>
      <BlockchainView
        page_title={"Coinbase Transactions"}
        peer_title={"Peer A"}
        flags={blockchain_flags}
      />
      <BlockchainView peer_title={"Peer B"} flags={blockchain_flags} />
      <BlockchainView peer_title={"Peer C"} flags={blockchain_flags} />
    </>
  );
};

export default CoinbaseView;
