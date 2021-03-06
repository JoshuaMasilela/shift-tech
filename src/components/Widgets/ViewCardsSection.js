import React, { useEffect, useState } from 'react'
import { EmptyAnimation, ViewCardsContainer, ViewCardsTitle, ViewWidgetTable, ViewWidgetTableBody, ViewWidgetTableHeader, ViewWidgetTableRow1, ViewWidgetWrapper } from './Elements/ViewCardsElements'
import { DataGrid } from '@mui/x-data-grid';
import CryptoJS from 'crypto-js';
import { decryptKey } from '../ObjData'
import moment from 'moment';
import Lottie from 'react-lottie';

//import animation from animations folder
import NoData from '../../assets/animations/no-data.json';

//fetch card details from session storage return as JSON
let data = JSON.parse(sessionStorage.getItem('cardDetails'));

export default function ViewCardsSection({
  title,
  columns,

}) {

  //set document title
  document.title = "Shift Tech Home";


  //check if data is null
  if (data !== null) {
    //map out data into row
    const rowData = data.map((item, index) => {

      //decryt data ( card_number, exp_date, cvc)
      const cardNo = CryptoJS.AES.decrypt(item.card_number, decryptKey.key).toString(CryptoJS.enc.Utf8);
      const cardCvc = CryptoJS.AES.decrypt(item.cvv, decryptKey.key).toString(CryptoJS.enc.Utf8);
      const cardExpDate = CryptoJS.AES.decrypt(item.expiry_date, decryptKey.key).toString(CryptoJS.enc.Utf8);

      // mask card number, cvc, expiry date
      const masked_card_number = cardNo.replace(/^[\d-\s]+(?=\d{4})/, "************");
      const masked_card_cvc = cardCvc.replace(/.+(.{0})$/, "******");
      const masked_exp_date = cardExpDate.replace(/.+(.{0})$/, "****" + "/" + "****");

      return {
        id: index ? index : 0,
        cardHolder: item.name,
        cardNumber: masked_card_number,
        country_code: item.country_code,
        timeStamp: moment(item.timestamp).format("DD-MM-YY HH:mm:ss A"),
        updatedAt: moment(item.updatedAt).format("DD-MM-YY HH:mm:ss A"),
        //not displayed but passed for edit screen
        cvc: masked_card_cvc,
        expiry_date: masked_exp_date,
        unmasked_card_exp_date: cardExpDate,
        unmasked_card_number: cardNo,
        unmasked_card_cvv: cardCvc
      }
    })

    return (
      <ViewCardsContainer>

        <ViewCardsTitle>{title}</ViewCardsTitle>
        <DataGrid
          columns={columns}
          rows={rowData}
          pageSize={6}
          rowsPerPageOptions={[6]}
          checkboxSelection
          disableSelectionOnClick />

      </ViewCardsContainer>
    )
  } else {
    return (
      <ViewCardsContainer>

        <ViewCardsTitle>{title}</ViewCardsTitle>
        <ViewWidgetWrapper>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: NoData,
              renderSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={400}
            width={400} />
        </ViewWidgetWrapper>

      </ViewCardsContainer>
    )
  }

}
