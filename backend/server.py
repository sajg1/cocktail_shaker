from flask import Flask, request
from pprint import pprint
import json
import requests
import random

app = Flask(__name__)
base_url = "http://www.thecocktaildb.com/api/json/v1/1"

@app.route('/random-cocktail')
def random_cocktail():
    response = requests.get(f"{base_url}/random.php")
    results = response.json()
    return results

@app.route('/cocktail-by-spirit/<spirit>')
def cocktail_by_spirit(spirit):
    # full list of cocktails by spirit
    response = requests.get(f"{base_url}/filter.php?i={spirit}")
    response.raise_for_status()
    json = response.json()
    cocktail_list = json['drinks']
    # select 1 cocktail using randint
    num = random.randint(0, len(cocktail_list)-1)
    selected_cocktail_id = cocktail_list[num]["idDrink"]
    # request json for full details on selected cocktail
    selected_response = requests.get(f"{base_url}/lookup.php?i={selected_cocktail_id}")
    result = selected_response.json()
    return result

@app.route('/add-liked-cocktail/', methods=["POST"])
def addLikedCocktail():
    content = request.get_json(force=True)
    pprint(content.get('currentCocktailData'))
    return content






if __name__ == "__main__":
    app.run(debug=True)
