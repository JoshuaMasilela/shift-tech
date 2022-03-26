import styled from 'styled-components';
import { IoEyeSharp } from 'react-icons/io5';

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
`;

export const ContentWrap = styled.div`
display: flex;
margin: 5px;
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
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 
    'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
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

export const EditHeading = styled.p`
color: ${({ lightText }) => (lightText ? '#ffffff' : '#00BBFF')};
font-size:: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4;
text-transform: uppercase;
margin-bottom: 16px;
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

export const Subheading = styled.h1`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = styled.div`
max-width: 555px;
height:100%;
`;

export const Img = styled.img`
width: 100%;
height:250px;
margin: 0 0 10px 0;
padding-right: 0;
`;