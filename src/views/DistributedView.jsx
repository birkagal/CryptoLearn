import React from "react";
import Blockchain from "../components/Blockchain";

/* Distributed View using Blockchain Component to render 3 basic Blockchains. */
const DistributedView = () => {
  return (
    <>
      <Blockchain page_title={"Distributed Blockchain"} peer_title={"Peer A"} />
      <Blockchain peer_title={"Peer B"} />
      <Blockchain peer_title={"Peer C"} />
    </>
  );
};
export default DistributedView;
