//All web buttons in this file

import styled from 'styled-components';

export const SubmitCardButton = styled.button`
border-radius: 30px;
background: ${({ primary }) => (primary ? '#00BFFF' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#FFFFFF')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
border: none !important;
outline: none !important;
cursor: pointer !important;
display: flex !important;
justify-content: center;
align-items: center;
transition: all 0..2s ease-in-out;
&:hover {
    transition: all 0..2s ease-in-out;
    background: ${({ primary }) => (primary ? '#010606' : '#00BFFF')};
    color: ${({ dark }) => (dark ? '#00BFFF' : '#010606')};
}
`;