import React, { useEffect, useState } from 'react'
import {
  Column1,
  Column2,
  CountryForm,
  EditContainer,
  EditRow,
  EditWrapper,
  DropwDown
} from './BannedElements';
import ReactGlobe from 'react-globe';

// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Geocode from "react-geocode";
import { SubmitCardButton } from '../ButtonElements';
import { CircularProgress } from '@mui/material';
import useForm from '../useForm';


export default function BannedCSection({
  width,
  height
}) {

  //fetch card details from session storage return as JSON
let data = JSON.parse(sessionStorage.getItem('blockedCountries'));


  // support rendering markers with simple data
  const markers = [
    {
      id: 'marker1',
      city: 'Singapore',
      color: 'red',
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    {
      id: 'marker2',
      city: 'New York',
      color: 'red',
      coordinates: [40.73061, -73.935242],
      value: 25,
    },
    {
      id: 'marker3',
      city: 'San Francisco',
      color: 'red',
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    {
      id: 'marker4',
      city: 'Beijing',
      color: 'red',
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    {
      id: 'marker5',
      city: 'London',
      color: 'red',
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    {
      id: 'marker6',
      city: 'Los Angeles',
      color: 'red',
      coordinates: [29.7604, -95.3698],
      value: 54,
    },
  ];

  // simple and extensive options to configure globe
  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'gold',
    pointLightIntensity: 1.5,
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };


  const {
    handleCountrySubmit,
    handleCountryChange,
    country
  } = useForm();
  const [globe, setGlobe] = useState(null);
  console.log(globe); // captured globe instance with API methods

  // const blockCountry = async () => {
  
  //   try {
  //     if (selected !== '') {
  //       setLoading(true);
  //       // Get array from local storage, defaulting to empty array if it's not yet set
  //       let countriesArray = await JSON.parse(sessionStorage.getItem('blockedCountries')) ? JSON.parse(sessionStorage.getItem('blockedCountries')) : [];

  //       console.log("Countries array error: "+countriesArray ?countriesArray : 'Array empty')
  //         // Checking if email already exists
  //         if (countriesArray.some(country => country.country_name === selected)) {

  //           alert('country already blocked')
  //           return false; // stops the function execution
  //         }
  //         // geocode location
  //          Geocode.fromAddress(selected).then(
  //           async (response) => {
  //             const { lat, lng } = response.results[0].geometry.location;
  //             const { name } = response.results[0].address_components[0].long_name;
  //             const { code } = response.results[0].address_components[0].short_name
  //    console.log(name)
  //             // create values as objects
  //             const countryInfo = {
  //               country_name: name,
  //               country_code: code,
  //               country_lat: lat,
  //               country_lng: lng,
  //               timestamp: new Date(),
  //             };
  //             console.log(countryInfo)


  //             //push data into array
  //             await countriesArray.push(countryInfo)

  //             //add new data to array
  //             await sessionStorage.setItem('blockedCountries', JSON.stringify(countryInfo));
             
  //             setLoading(false)
  //             //refresh page
  //             window.location.reload();
  //           },
  //           (error) => {
  //             console.error(error);
  //           }
  //         ).catch((err) => {
  //           console.log("Geocode error: " + err)
  //         });

  //       return false;
  //     }
  //   } catch (error) {
  //     console.log("Error blocking country: " + error)
  //   }
  // }

  //handle submit
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //  await blockCountry();
  // }
  return (
    <EditContainer>

      <EditWrapper>

        <EditRow>
          <Column1>

            <CountryForm onSubmit={handleCountrySubmit}>
              <DropwDown
                value={country}
                onChange={handleCountryChange} />


 <SubmitCardButton type={'submit'}>Submit Country</SubmitCardButton>

            </CountryForm>


          </Column1>

          <Column2>

            <ReactGlobe
              height={height}
              width={window.screen.width / 2}
              markers={markers}
              options={options}
              onGetGlobe={setGlobe}
              onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
            />
          </Column2>
        </EditRow>

      </EditWrapper>


    </EditContainer>
  )
}
