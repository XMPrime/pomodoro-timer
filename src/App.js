import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import TimeSetter from "./components/TimeSetter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <TimeSetter name='Work Time' />
          <TimeSetter name='Break Time' />
        </div>
      </Provider>
    );
  }
}

export default App;
