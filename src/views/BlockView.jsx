import React from "react";
import Block from "../components/Block";

/* Block View using Block component to render basic Block. Use default Block flags. */
const block_flags = {
  id: true,
  nonce: true,
  mine: true,
};

const BlockView = () => {
  return (
    <Block page_title={"Block"} flags={block_flags} default_nonce={24961} />
  );
};

export default BlockView;
