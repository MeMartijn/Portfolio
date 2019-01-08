import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { playNextAnimation } from '../../../actions/animationActions';
import Typewriter from '../../../components/Typewriter';
import './../../../styles/fonts.css';
import './../../../styles/animations.css';

const IntroductionHeader = styled.h1 `
    font-family: 'Raleway', sans-serif;
    font-size: 5em;
    color: white;
    max-width: 90vw;
    word-wrap: break;

    ${props => props.animated && css`
        &::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 1.185em;
            background-color: white;
            animation: flickering 1.1s linear 1s infinite;
        }
    `}
`;

class IntroductionTagline extends Typewriter {
    onAnimationEnd() {
        setTimeout(() => {
            this.setState({
                animated: false
            })

            this.props.playNextAnimation();
        }, 1000)
    }

    render() {
        if (this.props.animations.animationFlow[0] === this.constructor.name) {
            if (!this.timeout) {
                this.setState({
                    animated: true
                })

                this.adjustText(this.state.fullText);
            }
        }

        return this.state.animated ? (
            <IntroductionHeader animated>{ this.state.displayedText }</IntroductionHeader>
        ) : (
            <IntroductionHeader>{ this.state.displayedText }</IntroductionHeader>
        );
    }
}

const mapStateToProps = state => ({
    animations: state.animations
})

export default connect(mapStateToProps, { playNextAnimation })(IntroductionTagline);