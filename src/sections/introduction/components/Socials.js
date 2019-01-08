import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Elements
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

// Render
const Socials = (props) => {
    return (
        <SocialContainer>
            <IconContainer href="https://nl.linkedin.com/in/martijn-schouten-0665459a">
                <FontAwesomeIcon icon={ faLinkedin } />
            </IconContainer>
            
            <IconContainer href="http://github.com/memartijn">
                <FontAwesomeIcon icon={ faGithub } />
            </IconContainer>
        </SocialContainer>
    );
}

export default Socials;