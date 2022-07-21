import React, { useState } from 'react';
import '../styles/Form.css';

const CocktailBySpiritForm = (props) => {

const [spirit, setSpirit] = useState({
  name: ""
})

const handleSubmit = (e) => {
  e.preventDefault()
  props.getCocktailBySpirit(spirit.name)
}

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <label htmlFor='spirit-selector'>Choose your starter spirit:</label>
        <select name='spirit-selector' id='spirit-selector' onChange={(e) => setSpirit({...spirit, name:e.target.value})} value={spirit.name}>
          <option value="" selected disabled hidden>Select your base spirit...</option>
          <option value="gin">Gin</option>
          <option value="bourbon">Bourbon</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="whiskey">Whiskey</option>
          <option value="rum">Rum</option>
        </select>
        <input type="submit" value="Find your Cocktail!" />
      </form>
      <p>OR</p>
      <p>Just roll the dice: </p><button onClick={props.getCocktail}>Click me</button>
    </div>
  )
}

export default CocktailBySpiritForm;
