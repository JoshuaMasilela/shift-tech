import React, { useEffect, useState } from 'react'
import {
  Column1,
  Column2,
  CountryForm,
  EditContainer,
  EditRow,
  EditWrapper,
  DropwDown,
  Heading,
  BannedListWrapper
} from './BannedElements';
import { DataGrid } from '@mui/x-data-grid';
import ReactGlobe from 'react-globe';

// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { SubmitCardButton } from '../ButtonElements';
import useForm from '../useForm';
import SuccessDialog from '../Dialogs/SuccessDialog';
import ErrorDialog from '../Dialogs/ErrorDialog';

//fetch card details from session storage return as JSON
let data = JSON.parse(sessionStorage.getItem('blockedCountries'));

export default function BannedCSection({
  width,
  height,
  addTitle,
  viewTitle,
  columns
}) {

  //set document title
  document.title = "Banned Countries";
  const {
    handleCountrySubmit,
    handleCountryChange,
    setBannedError,
    setBannedSuccess,
    bannedError,
    bannedSuccess,
    country,
    bannedMessage
  } = useForm();

  //close success dialog
  const handleCloseSuccess = () => {
    setBannedSuccess(false);
    return false; // stop function
  }

  //handle error dialog close 
  const handleClose = () => {
    setBannedError(false);
    return false; // stops function
  };

  const [globe, setGlobe] = useState(null);
 
  // simple and extensive options to configure globe
  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'gold',
    pointLightIntensity: 1.5,
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };

  if (!data) {
    return (
      <EditContainer>

        <EditWrapper>
          <EditRow>
            <Column1>
              <Heading >{addTitle}</Heading>
              <CountryForm onSubmit={handleCountrySubmit}>
                <DropwDown
                  value={country}
                  onChange={handleCountryChange} />
                <SubmitCardButton type={'submit'}>Submit Country</SubmitCardButton>

              </CountryForm>

            </Column1>

            <Column2>
              <Heading>{viewTitle}</Heading>
              <ReactGlobe
                height={height}
                width={window.screen.width / 2}
                options={options}
                onGetGlobe={setGlobe}
                onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
              />
            </Column2>
          </EditRow>
        </EditWrapper>
      </EditContainer>
    )
  } else {
    //if data exists map it out
    const markers = data.map((item, index) => {

      return {
        id: index,
        city: item.country_name,
        color: 'red',
        coordinates: [item.country_lat, item.country_lng],
        code: item.country_code,
        value: index,
        latlng: item.country_lat + ", " + item.country_lng
      }
    })
    return (
      <EditContainer>

        <EditWrapper>

          <EditRow>
            <Column1>
              <Heading>{addTitle}</Heading>
              <CountryForm onSubmit={handleCountrySubmit}>
                <DropwDown
                  value={country}
                  onChange={handleCountryChange} />

                <SubmitCardButton type={'submit'}>Submit Country</SubmitCardButton>

              </CountryForm>
            </Column1>

            <Column2>
              <Heading>{viewTitle}</Heading>
              <ReactGlobe
                height={height}
                width={window.screen.width / 2}
                markers={markers}
                options={options}
                onGetGlobe={setGlobe}
                onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
              />

              <BannedListWrapper>
                <DataGrid
                  columns={columns}
                  rows={markers}
                  pageSize={6}
                  rowsPerPageOptions={[6]}
                  checkboxSelection
                  disableSelectionOnClick />
              </BannedListWrapper>
            </Column2>
          </EditRow>

        </EditWrapper>

        <SuccessDialog
          open={bannedSuccess}
          onClose={handleCloseSuccess}
          message="Country Banned Success"
        />

        <ErrorDialog
          open={bannedError}
          onClose={handleClose}
          message={"bannedMessage"} />
      </EditContainer>
    )
  }

}
