import React, { Component } from "react";
import Routes from './Routes';
import AppFrame from './app-frame'

class App extends Component {

  render() {
    return (
      <AppFrame>
        <Routes />
      </AppFrame>
    );
  }
}

export default App;
