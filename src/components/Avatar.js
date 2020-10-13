import React from 'react';

function Avatar(props) {
  return(
    <div>
      <img src={props.image} alt=''/>
    <h2>{props.firstName} 
      <span style={{textTransform:'uppercase'}}> {props.lastName}</span>
    </h2>
    </div>
  );
}


export default Avatar;