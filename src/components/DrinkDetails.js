import React from 'react';
import '../styles/Details.css';

const DrinkDetails = (props) => {


  const handleLikeClick = (event) => {
    event.preventDefault();
    props.likeDrink()
  }

  if (props.cocktail == null) {
    return null;
  }

  return (
    <div className="details-component">
      {props.cocktail &&
        <div className="details-box">
          <h4>You're random cocktail is a.......</h4>
          <h3>{props.cocktail.name}</h3>
          <img src={props.cocktail.image} alt="Missing Cocktail" ></img>
          <button className="like-button" onClick={handleLikeClick}>Like this cocktail 👍</button>
          <p>This should be presented in a {props.cocktail.glass}.</p>
          <table className="details-table">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {props.cocktail.ingredients.map((ingredient, index) => <td key={index}>{ingredient.ingredient}</td>)}
              </tr>
              <tr>
                {props.cocktail.measures.map((measure, index) =><td key={index}>{measure.measure}</td>)}
              </tr>
            </tbody>
          </table>
          <p>{props.cocktail.instructions}</p>
        </div>
      }
    </div>
  )
}

export default DrinkDetails;
