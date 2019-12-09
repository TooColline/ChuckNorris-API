import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import configStore from "./store";

import Container from "./components/main";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter basename="/">
          <Route path="/" exact component={Container} />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
