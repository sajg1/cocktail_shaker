import Home from '../components/Home';
import NavBar from '../components/NavBar';
import LikedCocktails from '../components/LikedCocktails';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <h1 className="logo">CocktailShaker</h1>
      < NavBar />
      <Routes>
        <Route exact path="/" element={<Home
          cocktailBySpirit={currentCocktailData}
          likedCocktails={likedCocktailsList}
          getRandomCocktailData={getRandomCocktailData}
          getCocktailBySpirit={getCocktailBySpirit}
          getLikedCocktailsList={getLikedCocktailsList}
          likedDrink={addLikedDrink}
          cocktail={currentCocktailData}/>}/>
        <Route   // UPDATED HERE
          path="/liked-cocktails"
          element={<LikedCocktails liked={likedCocktailsList}/>}
        />
      </Routes>
    </Router>
  )
}
