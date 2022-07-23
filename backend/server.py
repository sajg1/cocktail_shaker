from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import fields, Schema
from pprint import pprint
import json, jsonify, requests, random

app = Flask(__name__)
base_url = "http://www.thecocktaildb.com/api/json/v1/1"

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///likedcocktails.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

# enables the conversion between SQLAlchemy row object to dict
def row_to_dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = getattr(row, column.name)

    return d

# database model
class Cocktail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    glass = db.Column(db.String(100), nullable=False)
    ingredients = db.Column(db.Text(), nullable=False)
    measures = db.Column(db.Text(), nullable=False)
    instructions = db.Column(db.Text(), nullable=False)
    image = db.Column(db.String(250), nullable=False)

# db.init_app(app)
# db.create_all()

# Marshmallow Schema to convert SQL object to JSON
class CocktailSchema(Schema):
    class Meta:
        fields = ("id", "name", "glass", "ingredients", "measures", "instructions", "image")
        # id = fields.Integer()
        # name = fields.String()
        # glass = fields.String()
        # ingredients = fields.List(fields.Dict(keys=fields.String(), values=fields.String()))
        # measures = fields.List(fields.Dict(keys=fields.String(), values=fields.String()))
        # instructions = fields.String()
        # image = fields.String()

# READ
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

@app.route('/liked-cocktails')
def all_liked_cocktails():
    all = Cocktail.query.all()
    cocktail_list = []
    # Convert db row to object and convert
    # ingredients and measures back to list
    for cocktail in all:
        dict = row_to_dict(cocktail)
        dict['ingredients'] = json.loads(dict['ingredients'])
        dict['measures'] = json.loads(dict['measures'])
        cocktail_list.append(dict)
    # Object serialization and deserialization
    cocktail_schema = CocktailSchema(many=True)
    output = cocktail_schema.load(cocktail_list)
    return {"output" : output}

# CREATE A COCKTAIL FOR DB
@app.route('/add-liked-cocktail/', methods=["POST"])
def add_liked_cocktail():
    content = request.get_json(force=True)
    cocktail_data = content.get('currentCocktailData')
    # convert lists to strings for db entry
    ingredients_str = json.dumps(cocktail_data['ingredients'])
    measures_str = json.dumps(cocktail_data['measures'])
    id = cocktail_data['id']
    if Cocktail.query.get(id):
        print("Already in db")
        return "Already in db"
    new_cocktail = Cocktail(
        id=cocktail_data['id'],
        name=cocktail_data['name'],
        glass=cocktail_data['glass'],
        ingredients=ingredients_str,
        measures=measures_str,
        instructions=cocktail_data['instructions'],
        image=cocktail_data['image']
    )
    db.session.add(new_cocktail)
    db.session.commit()
    # liked_cocktail = LikedCocktail()
    return "Complete"








if __name__ == "__main__":
    app.run(debug=True)
