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
    getData()
  }, [])

  const getData = () => {
    let data = JSON.parse(sessionStorage.getItem('cardDetails'));
    setCardData(data)
    console.log(cardData)
  }

  if (cardData) {
    
    return (
      <ViewCardsContainer>

        <ViewCardsTitle>{title}</ViewCardsTitle>
        <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection/>
        {/* <ViewWidgetWrapper>
          <ViewWidgetTable>
            <ViewWidgetTableBody>
              <ViewWidgetTableRow1>

               
                {
                  th.map((item, index) => {
                    return (
                      <ViewWidgetTableHeader key={index}>{item.title}</ViewWidgetTableHeader>
                    )
                  })
                }
              </ViewWidgetTableRow1>
            </ViewWidgetTableBody>
          </ViewWidgetTable>
        </ViewWidgetWrapper> */}
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
