import '../App.css'
import React from 'react';


const Cocktail = (props) => {
  return (
    <div className="App-header">
      { props.cocktail &&
        <div>
          <p>Drink Name: {props.cocktail.name}</p>
          <img src={props.cocktail.image} alt="Drink img"></img>
        </div>
      }
    </div>
  );

}

export default Cocktail;
