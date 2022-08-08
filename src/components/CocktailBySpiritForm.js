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
    <div className="form-container">
      <form className="form-only" onSubmit={handleSubmit}>
        <label htmlFor='spirit-selector'>Choose your starter spirit:</label>
        <select className="form-select form-select-sm mb-3 spirit-select" name='spirit-selector' id='spirit-selector' onChange={(e) => setSpirit({...spirit, name:e.target.value})} value={spirit.name}>
          <option value="" disabled hidden>Select your base spirit...</option>
          <option value="gin">Gin</option>
          <option value="bourbon">Bourbon</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="whiskey">Whiskey</option>
          <option value="rum">Rum</option>
        </select>
        <input type="submit" value="Find your Cocktail!" />
      </form>
      <p>Or</p>
      <div className="roll-dice">
        <label>Just roll the dice: </label>
        <button onClick={() => props.getCocktail()}>Click me</button>
      </div>
    </div>
  )
}

export default CocktailBySpiritForm;
