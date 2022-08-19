import React, {useState} from 'react';
import '../styles/MakeYourOwn.css';

const MakeYourOwn = (props) => {

  const [customCocktail, setCustomCocktail] = useState({
    name: "",
    glass: "",
    instructions: ""
  })

  return(
    <div className='row make-row'>
      <div className='col-sm-6 make-your-own'>
        <form>
          <label>Cocktail Name</label>
          <input type="text" onChange={(e) => setCustomCocktail({...customCocktail, name: e.target.value})}></input>
          <label>Glassware</label>
          <input type="text" onChange={(e) => setCustomCocktail({...customCocktail, glass: e.target.value})}></input>
          <label>Instructions</label>
          <textarea name='instructions' form="make-your-own" onChange={(e) => setCustomCocktail({...customCocktail, instructions: e.target.value})} placeholder="Enter your instructions..."></textarea>
        </form>
      </div>
      <div className='col-sm-6 review-submission'>
        <h4 className="review-div-title">Review your Cocktail</h4>
        <table className='table-results'>
          <tr>
            <th className='review-header'>Name</th>
            <td className='review-result-tight'>{customCocktail.name}</td>
          </tr>
          <tr>
            <th className='review-header'>Glassware</th>
            <td className='review-result-tight'>{customCocktail.glass}</td>
          </tr>
          <tr>
            <th className='review-header'>Instructions</th>
            <td className='review-result-expand'>{customCocktail.instructions}</td>
          </tr>
          <button>Submit Cocktail</button>
        </table>
      </div>
    </div>
  )
}

export default MakeYourOwn;
