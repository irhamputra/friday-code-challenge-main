import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  color: red;
  text-align: center;
`;

const ErrorMessage: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Message>
            <h2>{text} 😢</h2>
        </Message>
    );
};

export default ErrorMessage;
