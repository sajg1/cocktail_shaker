import Cocktail from '../components/Cocktail';
import CocktailBySpiritForm from '../components/CocktailBySpiritForm';
import DrinkDetails from '../components/DrinkDetails';
import React, { useState} from 'react';
import '../styles/Main.css'
import axios from 'axios';


export default function Main() {

  const [currentCocktailData, setCurrentCocktailData] = useState(null);
  const [likedCocktailsList, setLikedCocktailsList] = useState(null);

  // a function to setup the cocktaildata object structure, including the
  // ingredients and measures lists.
  function cocktailSetup(cocktail_response) {
    const res = cocktail_response.data;
    const cocktail = res['drinks'][0]
    // sort ingredients and measures into lists
    const ingredients = []
    const measures = []
    for (const [key,value] of Object.entries(cocktail)) {
      if (key.includes("strIngredient")) {
        if (value !== null) {
          let new_object = {};
          new_object.ingredient = value;
          ingredients.push(new_object)
        }
      }
      else if (key.includes("strMeasure")) {
        if (value !== null) {
          let new_object = {};
          new_object.measure = value;
          measures.push(new_object)
        }
      }
    }
    setCurrentCocktailData({
      id: cocktail.idDrink,
      name: cocktail.strDrink,
      glass: cocktail.strGlass,
      ingredients: ingredients,
      measures: measures,
      instructions: cocktail.strInstructions,
      image: cocktail.strDrinkThumb
    })
  }

  function getLikedCocktailsList() {
    axios({
      method: "GET",
      url: "/liked-cocktails"
    })
    .then((response) => {
      console.log(response)
      setLikedCocktailsList(response['data']['output'])
    })
    .catch((error) => {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    })
  }


  function getRandomCocktailData() {
    axios({
        method: "GET",
        url: "/random-cocktail"
    })
    .then((response) => {
      cocktailSetup(response)
      console.log(currentCocktailData)
    })
    .catch((error) => {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    })
  }


  function getCocktailBySpirit(spirit) {
    axios({
      method: "GET",
      url: '/cocktail-by-spirit/'+ spirit
    })
    .then((response) => {
      cocktailSetup(response)
    })
    .catch((error) => {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    })
  }

  function addLikedDrink() {
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('/add-liked-cocktail/', {currentCocktailData}, {
      headers:headers
    })
    .then((response) => {
      console.log(response)
    })
    .then((error) => {
      console.log(error)
    })
  }


  return (
    <React.Fragment>
      <h1 className="logo">CocktailShaker</h1>
      <CocktailBySpiritForm className="cocktail-component" cocktailBySpirit={currentCocktailData} getCocktail={getRandomCocktailData} getCocktailBySpirit={getCocktailBySpirit} />
      <Cocktail className="cocktail-component" cocktail={currentCocktailData} likeDrink={addLikedDrink}/>
      <DrinkDetails className="cocktail-component" cocktail={currentCocktailData} />
      <button onClick={getLikedCocktailsList}>Update State</button>
      { likedCocktailsList &&
      <div>
        <p>Name: {likedCocktailsList[2].name}</p>
        <p>Glassware: {likedCocktailsList[2].glass}</p>
        <div>
          <h6>Ingredients</h6>
          {likedCocktailsList[2].ingredients.map((ingredient, index) =><p key={index}>{ingredient.ingredient}</p>)}
        </div>
      </div>
      }

    </ React.Fragment>
  )
}
