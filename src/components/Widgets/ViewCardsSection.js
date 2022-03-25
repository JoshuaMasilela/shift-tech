import React, { useEffect, useState } from 'react'
import { ViewCardsContainer, ViewCardsTitle, ViewWidgetTable, ViewWidgetTableBody, ViewWidgetTableHeader, ViewWidgetTableRow1, ViewWidgetWrapper } from './Elements/ViewCardsElements'
import { DataGrid } from '@mui/x-data-grid';
import CryptoJS from 'crypto-js';
import { decryptKey } from '../ObjData'
export default function ViewCardsSection({
  title,
  columns,

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

      //decryt data ( card_number, exp_date, cvv)

      const cardNo = CryptoJS.AES.decrypt(item.card_number, decryptKey.key).toString();

      // mask card number
      const masked_card_number = cardNo.replace(/^[\d-\s]+(?=\d{4})/, "************");
  
      // var cardCvv = CryptoJS.AES.decrypt(item.cvv, key);
      // var cardExpDate = CryptoJS.AES.decrypt(item.expiry_date, key);
      return{
        id: index,
        cardHolder: item.name,
        cardNumber: masked_card_number,
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
