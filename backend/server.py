from flask import Flask
import requests

app = Flask(__name__)
base_url = "http://www.thecocktaildb.com/api/json/v1/1"



@app.route('/random-cocktail')
def random_cocktail():
    response = requests.get(f"{base_url}/random.php")
    results = response.json()
    return results
