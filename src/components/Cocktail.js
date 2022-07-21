import React from 'react';


const Cocktail = (props) => {

  const handleLikeClick = (event) => {
    event.preventDefault();
    props.likeDrink()
  }

  return (
    <div className="">
      { props.cocktail &&
        <div>
          <button onClick={handleLikeClick}>👍</button>
        </div>
      }
    </div>
  );

}

export default Cocktail;
