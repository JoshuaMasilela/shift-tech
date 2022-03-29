import styled from 'styled-components';
import { IoEyeSharp } from 'react-icons/io5';
import { TextField } from '@mui/material';
import { CountryDropdown } from 'react-country-region-selector';

export const EditContainer = styled.div`
background-color: #fffff;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 10px;
flex:1;
@media screen and (max-width: 768px){
    padding: 100px 0;
}
`;

export const EditWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const Header = styled.p`
font-size: 54px;
align-self: center;
justify-content: center;
margin-bottom: 20px;
`;

export const SubHeader = styled.p`
font-size: 16px;
align-self: center;
color: #ccc;
margin-top: -10px;
margin-bottom: -20px;
justify-content: center;
`;

export const ContentWrap = styled.div`
display: flex;
align-items:center;
`;

export const Eye = styled(IoEyeSharp)`
margin-left: 5px;
font-size: 2rem;
cursor: pointer;
`

export const EditRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2' 
    'col1'` : `'col2 col2' 'col1 col'`)};
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const CountryForm = styled.form`
display: block;
align-items: center;
justify-content: center;
`;


export const DropwDown = styled(CountryDropdown)`
width: 70%;
height: 30px;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom:: 60px;
`;

export const Heading = styled.h1`
color: ${({ lightTextDesc }) => (lightTextDesc ? '#ffffff' : '#010606')};
font-size:: 58px;
line-height: 1.1;
font-weight: 600;
margin-bottom: 24px;
@media screen and(max-width: 480px){
    font-size: 32px;
}
`;



