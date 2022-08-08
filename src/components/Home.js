import React from 'react';
import Cocktail from '../components/Cocktail';
import CocktailBySpiritForm from '../components/CocktailBySpiritForm';
import DrinkDetails from '../components/DrinkDetails';

const Home = (props) => {
  return(
    <div className="row">
      <div className="col-sm-6">
        <CocktailBySpiritForm className="cocktail-component" cocktailBySpirit={props.currentCocktailData} getCocktail={props.getRandomCocktailData} getCocktailBySpirit={props.getCocktailBySpirit} />
      </div>
      <div className="col-sm-6">
        <DrinkDetails className="cocktail-component" cocktail={props.cocktail} likeDrink={props.likedDrink}/>
      </div>
    </div>
  )
}

export default Home;
