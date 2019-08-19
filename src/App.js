import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import TimeSetter from "./components/TimeSetter";
import StartStop from "./components/StartStop";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Timer />
          <TimeSetter name='Work Time' />
          <TimeSetter name='Break Time' />
          <br />
          <StartStop />
        </div>
      </Provider>
    );
  }
}

export default App;
