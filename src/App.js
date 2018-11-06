import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './styles/reset.css';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <Particles
        params = {{
          'particles': {
              'number': {
                  'value': 110
              },
              'size': {
                  'value': 1
              },
              'move': {
                'speed': 1,
              },
              'interactivity': {
                'events': {
                  'onhover': {
                    'enable': true,
                    'mode': 'repulse'
                  }
                }
              }
            }
      }}

      style = {{
        'width': '10%',
        'height': '100vw'
      }}
      />
    );
  }
}

export default App;
