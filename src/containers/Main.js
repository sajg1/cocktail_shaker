import RandomCocktail from '../components/RandomCocktail';
import React, { useState } from 'react';
import axios from 'axios';


export default function Main() {

  const [cocktailData, setCocktailData] = useState(null);

  function getRandomCocktailData() {
    axios({
        method: "GET",
        url: "/random-cocktail"
      })
      .then((response) => {
        const res = response.data;
        const random_cocktail = res['drinks'][0]
        console.log(res)
        setCocktailData({
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

  return(
    <RandomCocktail cocktail={cocktailData} getCocktail={getRandomCocktailData}/>
  )
}
