import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components";
import {
  HomeView,
  HashView,
  BlockView,
  BlockchainView,
  DistributedView,
  TokensView,
  CoinbaseView,
  KeysView,
  SignaturesView,
  TransactionsView,
  SignedBlockchainView,
  ErrorView,
} from "./views";
import { fetch_data } from "./javascript/fetch_api";
import "./App.css";

/* Main App component. Display Navigation on top and use React Router to switch between Views */
const App = () => {
  /* When app first load, poke to API Server to wake him up */
  useEffect(() => {
    fetch_data("");
  }, []);
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/hash" component={HashView} />
          <Route path="/block" component={BlockView} />
          <Route path="/blockchain" component={BlockchainView} />
          <Route path="/distributed" component={DistributedView} />
          <Route path="/tokens" component={TokensView} />
          <Route path="/coinbase" component={CoinbaseView} />
          <Route path="/keys" component={KeysView} />
          <Route path="/signatures" component={SignaturesView} />
          <Route path="/transactions" component={TransactionsView} />
          <Route path="/signedblockchain" component={SignedBlockchainView} />
          <Route path="*" component={ErrorView} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
