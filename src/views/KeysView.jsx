import React from "react";
import Key from "../components/Key";

/* Keys View using Key component to render basic Key-pair page. Use the keys flag. */
const KeysView = () => {
  return (
    <Key page_title={"Public / Private Key Pairs"} flags={{ keys: true }} />
  );
};

export default KeysView;
