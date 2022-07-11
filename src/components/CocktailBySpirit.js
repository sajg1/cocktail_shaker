import '../App.css'
import React, { useState } from 'react';

const CocktailBySpirit = (props) => {

const [spirit, setSpirit] = useState({
  name: ""
})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(spirit)
}

  return (
    <div classname="App-header">
      <form onSubmit={handleSubmit}>
        <label htmlFor='spirit-selector'>Choose your starter spirit:</label>
        <select name='spirit-selector' id='spirit-selector' onChange={(e) => setSpirit({...spirit, name:e.target.value})} value={spirit.name}>
          <option value="gin">Gin</option>
          <option value="bourbon">Bourbon</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="whiskey">Whiskey</option>
          <option value="rum">Rum</option>
        </select>
        <input type="submit" value="Find your Cocktail!" />
      </form>
      <div>
        <p>Name: Drink Name</p>
        <img src="" alt="Cocktail"></img>
      </div>
    </div>
  )
}

export default CocktailBySpirit
