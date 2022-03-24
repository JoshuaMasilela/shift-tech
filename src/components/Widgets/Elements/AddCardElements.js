import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export const AddCardContainer = styled.div`;
flex:3;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
`;

export const AddCardTitle = styled.h3`;
font-size: 22px;
font-weight: 600
text-decoration: underline;
`;

export const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
margin-top: 15px;
align-content: center;
justify-content: center;
`;

export const FormContent = styled.form`
display: flex;
`;

export const FormInput = styled(TextField)`
magin-top: '10px';
align-self: center;
display: flex;
spacing: 2rem
`;

export const FormInputWrap = styled.div`
margin-top:10px;
`;

export const FormContentInput =styled(TextField)`
padding: .375rem .75rem;
font-siz: 1rem;
line-height: 1.5;
color:#010606;
background-color:#fff;
background-clip: #00BBFF;
border 1px solid #010606;
border-radius: .25rem;
width: 5rem;
margin-left: 3px;
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
`;