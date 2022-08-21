import React, {useState} from 'react';
import '../styles/MakeYourOwn.css';

const MakeYourOwn = (props) => {

  const [customCocktail, setCustomCocktail] = useState({
    name: "",
    glass: "",
    ingredients: [],
    measures: [],
    instructions: ""
  })

  const handleAddIngredientAndMeasure = (event) => {
    event.preventDefault()
    let ingredient = {ingredient: document.getElementById('ingredient').value}
    console.log("Array or not:", customCocktail.ingredients)
    setCustomCocktail(customCocktail => customCocktail.ingredients.push(ingredient))
    document.getElementById('ingredient').value = "";
    console.log(customCocktail)
  };

  return(
    <div className='row make-row'>
      <div className='col-sm-6 make-your-own'>
        <form>
          <label>Cocktail Name</label>
          <input type="text" onChange={(e) => setCustomCocktail({...customCocktail, name: e.target.value})}></input>
          <label>Glassware</label>
          <input type="text" onChange={(e) => setCustomCocktail({...customCocktail, glass: e.target.value})}></input>
          <label>Ingredients and Measures</label>
          <input type="text" id="ingredient" name="ingredient" placeholder="Ingredient"></input>
          <input type="text" id="measure" name="measure" placeholder="Measure..."></input>
          <button onClick={handleAddIngredientAndMeasure}>Add ingredient</button>
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
          <tr>
            <th className='review-header'>Ingredients</th>
            <td className='review-result-expand'>{customCocktail.ingredients}</td>
          </tr>
          <button>Submit Cocktail</button>
        </table>
      </div>
    </div>
  )
}

export default MakeYourOwn;
