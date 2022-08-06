import React from 'react';

const MoreInfo = (props) => {

  if (props.info !== null) {
    return(
      <div>
        <h4>{props.info.glass}</h4>
      </div>
    )
  }
}

export default MoreInfo;
