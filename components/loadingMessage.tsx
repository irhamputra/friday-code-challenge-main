import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
    color: blue;
    text-align: center;
`;

const LoadingMessage: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Message>
            <h2>{text} 🚗💨</h2>
        </Message>
    );
};

export default LoadingMessage;
