import React, { useEffect } from 'react';
import '../styles/LikedCocktails.css'

const LikedCocktails = (props) => {


  useEffect(() => {
    props.getLiked()
  }, [props])

  return(
    <div className='liked-component'>
      <h2>List of your liked Cocktails</h2>
      { props.liked &&
        <div>
          <ul>
            {props.liked.map((cocktail, index) => <li style={{textDecoration:'none'}} key={index}>{cocktail.name}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default LikedCocktails;
