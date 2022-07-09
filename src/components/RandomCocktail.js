
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'


export default function RandomCocktail() {

  const [cocktailData, setCocktailData] = useState(null);

  function getData() {
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
    <div className="App-header">
      <p>To get your Random Cocktail: </p><button onClick={getData}>Click me</button>
      {cocktailData && <div>
            <p>Drink Name: {cocktailData.name}</p>
            <img src={cocktailData.image} alt="Drink img"></img>
          </div>
      }
    </div>
  );
}
