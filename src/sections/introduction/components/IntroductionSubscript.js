import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import bezier from 'cubic-bezier';

import { playNextAnimation } from '../../../actions/animationActions';
import Typewriter from '../../../components/Typewriter';
import './../../../styles/fonts.css';
import './../../../styles/animations.css';

const IntroductionSub = styled.div `
    font-family: 'Raleway', sans-serif;
    font-size: 3.5em;
    color: white;
    max-width: 90vw;
    word-wrap: break;

    ${props => props.fontSwapped && css`
        font-family: 'Source Sans Pro', sans-serif;
    `}

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

const Selection = styled.span `
    ${props => props.selected.includes(props.id) && css`
        background-color: #B4D7FF;
        color: white;
    `}
`;

class IntroductionSubscript extends Typewriter {
    onAnimationEnd() {
        // Disable flickering animation
        this.setState({
            animated: false
        });

        // Start selection of text animation
        this.selectionAnimation();

        // Animations are finished, continue onwards
        this.props.playNextAnimation();
    }

    selectionAnimation() {
        // Set up selection cubic-bezier
        const duration = 400;
        const cubicTiming = bezier(.43, 0, 1, 1, (1000 / 60 / duration) / 4);

        // Start selection from the end to the beginning
        const len = this.state.displayedText.length;
        let chars = this.state.displayedText.split('').map((char, index) => index);

        for (let t = 0; t <= 1; t += ((len - chars[chars.length - 1]) / len) ) {
            setTimeout(() => {
                // Execute next animation upon finish
                if (chars.length === 0) {
                    this.fontChangeAnimation();
                }

                this.setState({
                    selected: [...this.state.selected, chars.pop()],
                })
            }, cubicTiming(t) * duration);
        }
    }

    fontChangeAnimation() {
        const removeSelection = () => {
            this.setState({
                selected: [],
            })
        }

        // Change font family
        setTimeout(() => {
            this.setState({
                fontChanged: true
            })

            removeSelection();
        }, 200)
    }

    render() {
        if (this.props.animations.animationFlow[0] === this.constructor.name) {
            if (!this.timeout) {
                this.setState({
                    animated: true,
                    selected: [],
                    fontChanged: false,
                    reduced: 0
                })

                this.adjustText(this.state.fullText);
            }
        }

        return this.state.animated ? (
            <IntroductionSub animated>{ this.state.displayedText }</IntroductionSub>
        ) : (
            <IntroductionSub fontSwapped={ this.state.fontChanged } reducedOnce={ this.state.reduced === 1 } reducedTwice={ this.state.reduced === 2 } reducedTrice={ this.state.reduced === 3 }>
                { this.state.displayedText.split('').map((item, index) => (
                    <Selection id={ index } key={ index } selected={ this.state.selected }>{ item }</Selection>
                )) }
            </IntroductionSub>
        );
    }
}

const mapStateToProps = state => ({
    animations: state.animations
})

export default connect(mapStateToProps, { playNextAnimation })(IntroductionSubscript);