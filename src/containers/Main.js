import Cocktail from '../components/Cocktail';
import CocktailBySpiritForm from '../components/CocktailBySpiritForm';
import React, { useState } from 'react';
import axios from 'axios';


export default function Main() {

  const [currentCocktailData, setCurrentCocktailData] = useState(null);

  function getRandomCocktailData() {
    axios({
        method: "GET",
        url: "/random-cocktail"
      })
      .then((response) => {
        const res = response.data;
        const random_cocktail = res['drinks'][0]
        console.log(res)
        setCurrentCocktailData({
          name: random_cocktail.strDrink,
          image: random_cocktail.strDrinkThumb
        })
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
      const res = response.data;
      const cocktail = res['drinks'][0]
      console.log(res)
      setCurrentCocktailData({
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb
      })
    })
    .catch((error) => {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    })
  }

  return (
    <React.Fragment>
      <CocktailBySpiritForm cocktailBySpirit={currentCocktailData} getRandomCocktail={getRandomCocktailData} getCocktailBySpirit={getCocktailBySpirit} />
      <Cocktail cocktail={currentCocktailData} />
    </ React.Fragment>
  )
}
