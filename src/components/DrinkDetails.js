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
          <div className='row'>
            <div className="col-sm-6 ingredients even">
              <h5>Ingredients</h5>
              <ul className="list-unstyled">
                {props.cocktail.ingredients.map((ingredient) =>
                  <li>{ingredient.ingredient}</li>
                )}
              </ul>
            </div>
            <div className="col-sm-6 measures even">
              <h5>Measures</h5>
              <ul className="list-unstyled">
                {props.cocktail.measures.map((measure) =>
                  <li>{measure.measure}</li>
                )}
              </ul>
            </div>
          </div>
          <p>{props.cocktail.instructions}</p>
        </div>
      }
    </div>
  )
}

export default DrinkDetails;
