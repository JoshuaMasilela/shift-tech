import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export const AddCardContainer = styled.div`;
flex:2;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
`;

export const AddCardTitle = styled.h3`;
font-size: 22px;
font-weight: 600
text-decoration: underline;
`;

export const CardContainer = styled.div`
margin: 15px;
width: 80%;
display:block;
align-items: center;
justify-content:: center
`;

export const Form = styled(Box)`
margin-top: 15px;

`;
export const FormContent = styled.form`
display: flex;
`;

export const FormInput = styled.input`
width: 80%;
height: 30px;
margin: 10px;
`;