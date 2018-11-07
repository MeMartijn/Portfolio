import React, { Component }  from 'react';
import Typewriter from './../components/Typewriter';
import Particles from 'react-particles-js';
import styled from 'styled-components';

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
            <BackgroundContainer>
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
                    }}/>
            </BackgroundContainer>

            <CenterContainer>
                <Typewriter text="Hi, I'm Martijn." />
            </CenterContainer>
        </>
    );
}

export default Introduction;