from flask import Flask
import requests

app = Flask(__name__)
url = "http://www.thecocktaildb.com/api/json/v1/1/random.php"



@app.route('/random-cocktail')
def random_cocktail():
    response = requests.get(url)
    results = response.json()
    print(results)
    return results
