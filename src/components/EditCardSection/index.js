import React from 'react'
import { 
  Column1,
  Column2,
  EditContainer, 
  EditHeading, 
  EditRow, 
  EditWrapper,
  Header,
  Heading,
  Img,
  ImgWrap,
  Subheading,
  TextWrapper,
 } from './EditElements'

export default function EditCardSection({
imgStart,
lightText,
darkText,
img,
lightTextDesc,
alt
}) {
  return (
    <EditContainer>

<EditWrapper>
  
                <EditRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <EditHeading lightText={lightText}>Edit Card</EditHeading>
                        <Heading lightTextDesc={lightTextDesc}>{}</Heading>
                        <Subheading darkText={darkText}>{}</Subheading>
                    </TextWrapper>
                </Column1>

                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={'avatar'}/>
                    </ImgWrap>
                </Column2>
            </EditRow>

     
          </EditWrapper>
    </EditContainer>
  )
}
