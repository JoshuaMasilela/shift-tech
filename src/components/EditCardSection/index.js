import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Column1,
  Column2,
  ContentWrap,
  EditContainer,
  EditHeading,
  EditRow,
  EditWrapper,
  Eye,
  Header,
  Heading,
  Img,
  ImgWrap,
  Subheading,
  TextWrapper,
} from './EditElements';

export default function EditCardSection({
  imgStart,
  lightText,
  darkText,
  img,
  lightTextDesc,
  alt,

}) {
  //document name
  document.title = "Edit";

  // useLocation to get state params
  const location = useLocation();

  //declare params as child state
  const {
    card_holder,
    card_number,
    timeStamp,
    card_exp,
    card_cvc,
    ms_card,

  } = location.state;

  //mask variable declaration
  const [maskCardNumber, setNumberMaskToggle] = useState(false);

  // toggle mask data 
  const maskToggle = () => {
    setNumberMaskToggle(!maskCardNumber)
  }

  return (
    <EditContainer>

      <EditWrapper>

        <EditRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <EditHeading lightText={lightText}>{card_holder}</EditHeading>
              <ContentWrap>
                <Heading lightTextDesc={lightTextDesc}>{maskCardNumber ? card_number : ms_card}</Heading>
                <Eye onClick={maskToggle} />
              </ContentWrap>
              <Heading lightTextDesc={lightTextDesc}>{card_cvc}</Heading>
              <Heading lightTextDesc={lightTextDesc}>{card_exp}</Heading>
              <Subheading darkText={darkText}>{timeStamp}</Subheading>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrap>
              <Img src={img} alt={'avatar'} />
            </ImgWrap>
          </Column2>
        </EditRow>


      </EditWrapper>
    </EditContainer>
  )
}
