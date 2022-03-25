import styled from "styled-components";
import { Tooltip } from '@mui/material';
import { BsExclamationTriangleFill, BsPenFill, BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ViewCardsContainer = styled.div`;
flex:3;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
margin-right: 20px;
`;

export const ViewCardsTitle = styled.span`
font-size: 22px;
font-weight: 600;
text-decoration: underline;
`;

export const ViewWidgetWrapper = styled.div`
display: flex;
margin: 5px;
align-items: center;
justify-content: center;
`;

export const ViewWidgetTable = styled.table`;
width: 100%;
border-spacing: 20px;
`;

export const ViewWidgetTableBody = styled.tbody`
background-color: #fff;
`;
export const ViewWidgetTableRow1 = styled.tr`;
background-color: #fff;
`;

export const ViewWidgetTableHeader = styled.th`;
text-align: left;
`;


export const ViewWidgetTableRow2 = styled.tr`;
justify-content: center;
align-items: center;
`;

export const ViewWidgetTableDataUser = styled.td`;
display: flex;
align-items: center;
font-weight: 600;
`;

export const ActionsContainer =styled.div`
display: flex;
align-items: center;
`;

export const DeleteAction = styled(BsTrashFill)`
font-size: 20px;
color: red;
margin: 2px;
cursor: pointer;
`;

export const EditAction = styled(BsPenFill)`
font-size: 20px;
color: green;
margin: 2px;
cursor: pointer;
`;

export const DeactivateAction = styled(BsExclamationTriangleFill)`
font-size: 20px;
color: gold;
margin: 2px;
cursor: pointer;
`;

export const ActionToolTip = styled(Tooltip)`
color: #010606;
align-items: center;
font-size: 15px;
justify-content: center;
background-color: #f9f9f9;
`;

export const IconLink = styled(Link)`
display: flex;
`;

export const StatusContainer = styled.div`
display: flex;
height: 30px;
width:100%;
align-items: center;
justify-content: center;
background: ${({status}) => (status ? 'green' : 'red')}
`;

export const StatusText = styled.p`
color: #ffffff;
font-size: 16;
`;