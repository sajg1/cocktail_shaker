from flask import Flask

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Stephen",
        "about": "Hello, I'm the developer!"
    }

    return response_body
