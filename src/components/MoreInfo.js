import React from 'react';
import '../styles/MoreInfo.css';

const MoreInfo = (props) => {

  if (props.info !== null) {
    return(
      <div>
        <h3 className="name">{props.info.name}</h3>
        <div className="instructions">
          <h5>Instructions</h5>
          <p>{props.info.instructions}</p>
        </div>
        <div className='row'>
          <div className="col-sm-6 ingredients">
            <h5>Ingredients</h5>
            <ul className="list-unstyled">
              {props.info.ingredients.map((ingredient) =>
                <li>{ingredient.ingredient}</li>
              )}
            </ul>
          </div>
          <div className="col-sm-6 measures">
            <h5>Measures</h5>
            <ul className="list-unstyled">
              {props.info.measures.map((measure) =>
                <li>{measure.measure}</li>
              )}
            </ul>
          </div>
        </div>
        <p className="glassware">This cocktail should be served in a {props.info.glass}</p>
      </div>
    )
  }
}

export default MoreInfo;
