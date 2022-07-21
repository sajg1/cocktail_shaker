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
      <button onClick={props.getLikedCocktailsList}>Update State</button>
      { props.likedCocktails &&
      <div>
      <p>Name: {props.likedCocktails[2].name}</p>
      <p>Glassware: {props.likedCocktails[2].glass}</p>
      <div>
      <h6>Ingredients</h6>
      {props.likedCocktails[2].ingredients.map((ingredient, index) =><p key={index}>{ingredient.ingredient}</p>)}
      </div>
      </div>
      }
    </div>
  )
}

export default Home;
