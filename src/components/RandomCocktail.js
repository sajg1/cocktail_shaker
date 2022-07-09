import '../App.css'
import React from 'react';


const RandomCocktail = (props) => {
  return (
    <div className="App-header">
      <p>To get your Random Cocktail: </p><button onClick={props.getCocktail}>Click me</button>
      { props.cocktail && <div>
            <p>Drink Name: {props.cocktail.name}</p>
            <img src={props.cocktail.image} alt="Drink img"></img>
          </div>
      }
    </div>
  );

}

export default RandomCocktail;
