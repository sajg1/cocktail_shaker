import React, { useEffect } from 'react';
import '../styles/LikedCocktails.css'

const LikedCocktails = (props) => {


  useEffect(() => {
    props.getLiked()
  }, [props])

  return(
    <div className='liked-component'>
      <h2 className="list-heading">List of your liked Cocktails</h2>
      { props.liked &&
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Glassware</th>
              <th>Instructions</th>
            </tr>
            {props.liked.map((cocktail, index) =>
              <React.Fragment>
                <tr>
                  <td key={index}>{cocktail.name}</td>
                  <td key={index}>{cocktail.glass}</td>
                  <td key={index}>{cocktail.instructions}</td>
                </tr>
              </React.Fragment>
            )}
          </table>
        </div>
      }
    </div>
  )
}

export default LikedCocktails;
