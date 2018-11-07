import React, { Component } from 'react';
import styled from 'styled-components';

import './../styles/fonts.css';
import './../styles/animations.css';

const WriterText = styled.p`
    font-family: 'Oxygen', sans-serif;
    font-size: 5em;
    line-height: 1em;
    color: white;

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 1em;
        animation: flickering 1.1s linear 1s infinite;
    }
`;

export default class Typewriter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedText: '',
            fullText: this.props.text || '',
        }

        
    }

    componentDidMount() {
        this.adjustText(this.state.fullText);
    }

    adjustText(input) {
        if (input.length > 0) {
            window.setTimeout(() => {
                let target = input[0];

                // Show a space as a keyboard stroke
                if (target === ' ') {
                    this.setState({
                        displayedText: this.state.displayedText + '&nbsp;',
                    });
                } else {
                    this.setState({
                        displayedText: this.state.displayedText + input[0],
                    })
                }

                // Create a string subset without the first character
                let subSet = input.split('');
                subSet.shift();

                // Start recursion call
                this.adjustText(subSet.join(''));
            }, Math.random() * 200)
        } else {
            // Stop recursion call once the string is empty
            return;
        }
    }

    render() {
        return (
            <WriterText>{ this.state.displayedText }</WriterText>
        );
    }
}