import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Introduction from './sections/Introduction';

import './styles/reset.css';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <>
        <Introduction/>
      </>
    );
  }
}

export default App;
