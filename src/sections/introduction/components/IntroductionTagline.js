import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { playNextAnimation } from '../../../actions/animationActions';
import Typewriter from '../../../components/Typewriter';
import './../../../styles/fonts.css';
import './../../../styles/animations.css';

const IntroductionHeader = styled.h1 `
    font-family: 'Raleway', sans-serif;
    font-size: 5em;
    line-height: 1em;
    color: white;
    max-width: 90vw;
    word-wrap: break;

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 1em;
        animation: flickering 1.1s linear 1s infinite;
    }
`;

class IntroductionTagline extends Typewriter {
    onAnimationEnd() {
        this.props.playNextAnimation();
    }

    render() {
        return (
            <IntroductionHeader>{ this.state.displayedText }</IntroductionHeader>
        );
    }
}

const mapStateToProps = state => ({
    animations: state.animations
})

export default connect(mapStateToProps, { playNextAnimation })(IntroductionTagline);