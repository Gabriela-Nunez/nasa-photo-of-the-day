import React from 'react';

const NasaPhoto = (props) => {
  return(
    <div>
      <h1>{props.photo.title}</h1>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} />
      <p>{props.photo.explanation}</p>
    </div>
  )

}


export default NasaPhoto;