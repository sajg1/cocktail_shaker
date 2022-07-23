import React from 'react';
import Cocktail from '../components/Cocktail';
import CocktailBySpiritForm from '../components/CocktailBySpiritForm';
import DrinkDetails from '../components/DrinkDetails';

const Home = (props) => {
  return(
    <div>
      <CocktailBySpiritForm className="cocktail-component" cocktailBySpirit={props.currentCocktailData} getCocktail={props.getRandomCocktailData} getCocktailBySpirit={props.getCocktailBySpirit} />
      <Cocktail className="cocktail-component" cocktail={props.cocktail} likeDrink={props.likedDrink}/>
      <DrinkDetails className="cocktail-component" cocktail={props.cocktail} />
    </div>
  )
}

export default Home;
