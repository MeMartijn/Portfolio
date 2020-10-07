import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { connect } from 'react-redux';

import { playNextAnimation } from '../../../actions/animationActions';

// Elements
const SocialContainer = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.appeared && css`
        opacity: 1;
        animation: 0.5s fadeIn;
    `}
`;
const IconContainer = styled.a`
    margin: 2rem 1.5rem;
    color: white;
    font-size: 2em;
    z-index: 9999;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.5);
    }

    ${props => props.appeared && css`
        animation: 0.5s fadeIn;
    `}
`;

class Socials extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appeared: false,
        }

        this.className = 'Socials'
    }

    render() {
        if (this.props.animations.animationFlow[0] === this.className) {
            setTimeout(() => {
                this.setState({
                    appeared: true
                })

                // Animations are finished, continue onwards
                this.props.playNextAnimation();
            }, 800)
        }

        return (
            <SocialContainer appeared={ this.state.appeared }>
                <IconContainer href="https://www.linkedin.com/in/martijn-schouten/"  appeared={ this.state.appeared }>
                    <FontAwesomeIcon icon={ faLinkedin } />
                </IconContainer>
                
                <IconContainer href="http://github.com/memartijn"  appeared={ this.state.appeared }>
                    <FontAwesomeIcon icon={ faGithub } />
                </IconContainer>
            </SocialContainer>
        );
    }
}

const mapStateToProps = state => ({
    animations: state.animations
})

export default connect(mapStateToProps, { playNextAnimation })(Socials);
