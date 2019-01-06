import React, { Component }  from 'react';
import styled from 'styled-components';

import Particles from 'react-particles-js';
import IntroductionTagline from './components/IntroductionTagline';
import Socials from './components/Socials';

// Elements
const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
const CenterContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

// Render
const Introduction = (props) => {
    return (
        <>
            <BackgroundContainer id="particles">
                <Particles
                    params = {{
                        'particles': {
                            'number': {
                                'value': 30,
                                'density': {
                                    "enable": true
                                }
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
                    }}/>
            </BackgroundContainer>

            <CenterContainer>
                <div>
                    <IntroductionTagline text="Hi, I'm Martijn." />
                    <Socials/>
                </div>
            </CenterContainer>
        </>
    );
}

export default Introduction;