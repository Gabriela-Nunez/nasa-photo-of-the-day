import React from 'react';
import styled from 'styled-components';


const StyledPhoto = styled.div`
  max-width: 100%;

  color: ${pr => pr.theme.textColor};
`;


const StyledText = styled.p`
  max-width: 80%;
  margin-left: 10%;
  text-align: center;
`;

const NasaPhoto = (props) => {
  return(
    <StyledPhoto>
      <h1>{props.photo.title}</h1>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} alt="NASA photo"/>
      <StyledText>{props.photo.explanation}</StyledText>
    </StyledPhoto>
  )

}


export default NasaPhoto;