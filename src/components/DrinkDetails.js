import React from 'react';

const DrinkDetails = (props) => {



  if (props.cocktail == null) {
    return null;
  }

  return (
    <div className="App-header">
      {props.cocktail &&
        <div>
          <h3>{props.cocktail.name}</h3>
            <p>This should be presented in a {props.cocktail.glass}.</p>
            <table>
              <tbody>
                <tr>
                  <td>Ingredients | </td>
                  {props.cocktail.ingredients.map((ingredient) => <td key={Object.keys(ingredient)[0]}>{Object.values(ingredient)[0]}</td>)}
                </tr>
                <tr>
                  <td>Measures | </td>
                  {props.cocktail.measures.map((measure) =><td key={Object.keys(measure)[0]}>{Object.values(measure)[0]}</td>)}
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
