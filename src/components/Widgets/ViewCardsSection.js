import React, { useEffect, useState } from 'react'
import { ViewCardsContainer, ViewCardsTitle, ViewWidgetTable, ViewWidgetTableBody, ViewWidgetTableHeader, ViewWidgetTableRow1, ViewWidgetWrapper } from './Elements/ViewCardsElements'
import { DataGrid } from '@mui/x-data-grid';

export default function ViewCardsSection({
  title,
  columns
}) {

  //set document title
  document.title = "Shift Tech Home";

  //create local variable
  const [cardData, setCardData] = useState([]);
  const [ rows, setRows ] = useState([]);

  useEffect(() => {
    getData();

    
  }, [])

  //get card details from session storage
  const getData = () => {
    //fetch card details from session storage return as JSON
    let data = JSON.parse(sessionStorage.getItem('cardDetails'));

    //set data to cardData array
    setCardData(data);
  }

  if (cardData) {
    const rowData = cardData.map((item, index) =>{
      return{
        id: index,
        cardHolder: item.name,
        cardNumber: item.card_number,
      }
    })
    return (
      <ViewCardsContainer>

        <ViewCardsTitle>{title}</ViewCardsTitle>
        <DataGrid
        columns={columns}
        rows={rowData}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick/>
 
      </ViewCardsContainer>
    )
  } else {
    return (
      <ViewCardsContainer>

        <ViewCardsTitle>{title}</ViewCardsTitle>
        <span>no data</span>
      </ViewCardsContainer>
    )
  }
}
