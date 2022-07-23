import React, { useEffect } from 'react';

const LikedCocktails = (props) => {

  useEffect(() => {
    props.getLiked()
  }, [])

  return(
    <div>
      <h2>List of your liked Cocktails</h2>
      { props.liked &&
        <div>
          <ul>
            {props.liked.map((cocktail, index) => <li key={index}>{cocktail.name}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default LikedCocktails;
