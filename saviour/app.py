from flask import Flask, request, render_template
import requests

app = Flask(__name__)
DEBUG = True
url = 'https://newsapi.org/v1/sources?&apiKey=aed9659f383f4b28b6ba9d30a3cb78c0'

@app.route('/')
def home():
    r = requests.get(url)
    rjson = r.json()
    hits  = rjson['sources']
    gaming = []
    print gaming
    for item in hits:
        if item['category'] == 'gaming':
            gaming.append(item)
    return render_template('index.html', gaming=gaming)

@app.route('/outlet')
def outlet():
    r = r.json()
    hits = rjson['sources']
    gaming = []
    for item in hits:
        item['category'] == 'gaming':
            gaming.append(item)
    return render_template('outlet.html', gaming= gaming)

if __name__ == '__main__':
    app.run()
