import React from 'react';
import '../styles/LikedCocktails.css'

const LikedCocktails = (props) => {


  return(
    <div className='liked-component'>
      <h2 className="list-heading">List of your liked Cocktails</h2>
      { props.liked &&
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Glassware</th>
                <th>Instructions</th>
              </tr>
            </thead>
            <tbody>
              {props.liked.map((cocktail) =>
                <React.Fragment>
                  <tr>
                    <td key={cocktail.id}>{cocktail.name}</td>
                    <td key={cocktail.id}>{cocktail.glass}</td>
                    <td key={cocktail.id}>{cocktail.instructions}</td>
                  </tr>
                </React.Fragment>
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default LikedCocktails;
