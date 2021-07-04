import React from "react";
import Blockchain from "../components/Blockchain";

/*
 * Signed Blockchain View using Blockchain component to render the full Signed Blockchain page.
 * Use all the flags to show everything. Render 3 sets of Blockchains. */
const blockchain_flags = {
  tx: true,
  coinbase: true,
  sign: true,
};

const BlockchainView = () => {
  return (
    <>
      <Blockchain
        page_title={"Signed Blockchain"}
        peer_title={"Peer A"}
        flags={blockchain_flags}
      />
      <Blockchain peer_title={"Peer B"} flags={blockchain_flags} />
      <Blockchain peer_title={"Peer C"} flags={blockchain_flags} />
    </>
  );
};
export default BlockchainView;
