import { Component } from 'react';

class Typewriter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedText: '',
            fullText: this.props.text || '',
        }
    }

    adjustText(input) {
        if (input.length > 0) {
            this.timeout = setTimeout(() => {
                let target = input[0];

                // Show a space as a keyboard stroke
                if (target === ' ') {
                    this.setState({
                        displayedText: this.state.displayedText + '\u00A0',
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
            this.onAnimationEnd();
            return;
        }
    }

    // Hook for child components to execute logic on ending of animation
    onAnimationEnd() {
        return null;
    }

    // Render will be replaced by child components
    render() {
        return null;
    }
}

export default Typewriter;