import Cocktail from '../components/Cocktail';
import CocktailBySpiritForm from '../components/CocktailBySpiritForm';
import React, { useState } from 'react';
import axios from 'axios';


export default function Main() {

  const [currentCocktailData, setCurrentCocktailData] = useState(null);

  // a function to setup the cocktaildata object structure, including the
  // ingredients and measures lists.
  function cocktailSetup(cocktail_response) {
    const res = cocktail_response.data;
    const random_cocktail = res['drinks'][0]
    // sort ingredients and measures into lists
    const ingredients = []
    const measures = []
    for (const [key,value] of Object.entries(random_cocktail)) {
      if (key.includes("strIngredient")) {
        if (value !== null) {
          let new_object = {};
          new_object[key] = value;
          ingredients.push(new_object)
        }
      }
      else if (key.includes("strMeasure")) {
        if (value !== null) {
          let new_object = {};
          new_object[key] = value;
          measures.push(new_object)
        }
      }
    }
    console.log("Ingredients: ",ingredients)
    console.log("Measures: ",measures)
    setCurrentCocktailData({
      id: random_cocktail.idDrink,
      name: random_cocktail.strDrink,
      glass: random_cocktail.strGlass,
      ingredients: ingredients,
      measures: measures,
      instructions: random_cocktail.strInstructions,
      image: random_cocktail.strDrinkThumb
    })
  }


  function getRandomCocktailData() {
    axios({
        method: "GET",
        url: "/random-cocktail"
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

  return (
    <React.Fragment>
      <CocktailBySpiritForm cocktailBySpirit={currentCocktailData} getCocktail={getRandomCocktailData} getCocktailBySpirit={getCocktailBySpirit} />
      <Cocktail cocktail={currentCocktailData} />
    </ React.Fragment>
  )
}
