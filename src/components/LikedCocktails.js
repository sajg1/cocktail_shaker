import React from 'react';
import '../styles/LikedCocktails.css'

const LikedCocktails = (props) => {

  const handleClick = (event, id) => {
    event.preventDefault();
    console.log(typeof(id.toString()))
    props.deleteCocktail(id);
  }

  if (props.liked == null) {
    return(
      <div className="no-list-entries">
        <h2 className='list-heading'>List of your Liked Cocktails</h2>
        <p>You have not yet added any cocktails to your liked List</p>
      </div>
    )
  }

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
                    <td><button onClick={event => handleClick(event, cocktail.id)}>Delete</button></td>
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
