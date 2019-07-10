import React, { Component } from 'react';
import Introduction from './sections/introduction/Introduction';

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
