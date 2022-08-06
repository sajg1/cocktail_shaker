import React, {useState} from 'react';
import MoreInfo from './MoreInfo';
import '../styles/LikedCocktails.css'

const LikedCocktails = (props) => {

  const [moreInfo, setMoreInfo] = useState(null);

  const handleMoreInfoClick = (event, cocktail) => {
    event.preventDefault();
    setMoreInfo({
      glass: cocktail.glass,
      instructions: cocktail.instructions,
      ingredients: cocktail.ingredients,
      measures: cocktail.measures
    })

  }

  const handleRemoveClick = (event, id) => {
    event.preventDefault();
    console.log(typeof(id.toString()))
    props.deleteCocktail(id);
  }

  if (props.liked.length === 0) {
    return(
      <div className="container">
        <h2 className='list-heading'>List of your Liked Cocktails</h2>
        <p>You have not yet added any cocktails to your liked List</p>
      </div>
    )
  }

  return(
    <div className='container'>
      <h2 className="list-heading">List of your liked Cocktails</h2>
      { props.liked &&
        <div className="row">
          <div className="col-sm-10">
          <table>
            <thead>
              <tr className="table-headers">
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.liked.map((cocktail) =>
                <React.Fragment>
                  <tr className="cocktail-row">
                    <td key={cocktail.image}><img src={cocktail.image} alt="cocktail-image"/></td>
                    <td key={cocktail.name}>{cocktail.name}</td>
                    <td className="more-info" key={cocktail.name} onClick={event => handleMoreInfoClick(event, cocktail)}><button>More Info...</button></td>
                    <td><button onClick={event => handleRemoveClick(event, cocktail.id)}>Remove Cocktail</button></td>
                  </tr>
                </React.Fragment>
              )}
            </tbody>
          </table>
          </div>
          <div className='col-sm-2'>
            <MoreInfo info={moreInfo}/>
          </div>
        </div>
      }
    </div>
  )
}

export default LikedCocktails;
