import React from 'react';
import '../styles/MoreInfo.css';

const MoreInfo = (props) => {

  if (props.info !== null) {
    return(
      <div>
        <h3>{props.info.name}</h3>
        <p>Glassware: {props.info.glass}</p>
        <h5>Instructions</h5>
        <p>{props.info.instructions}</p>
      </div>
    )
  }
}

export default MoreInfo;
