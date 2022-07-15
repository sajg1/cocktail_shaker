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
          <p>Drink Name: {props.cocktail.name}</p>
          <img src={props.cocktail.image} alt="Drink img"></img>
          <button onClick={handleLikeClick}>👍</button>
        </div>
      }
    </div>
  );

}

export default Cocktail;
