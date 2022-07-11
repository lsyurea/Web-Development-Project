from flask import Flask, render_template
from datetime import datetime
import requests

app = Flask(__name__)

@app.route('/')
def home():
    cur_year = datetime.now().year
    return render_template("index.html", year=cur_year)  # external file in css is not rendered

@app.route('/blog/<num>')
def get_blog(num):  # need to put num keyword here for url building
    response = requests.get(url="https://api.npoint.io/dc93589edd6e7a16af56")
    all_posts = response.json()
    return render_template("blog.html", posts=all_posts)


if __name__ == "__main__":
    app.run(debug=True)
