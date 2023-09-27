from flask import Flask, request
from flask_cors import CORS, cross_origin
import pygsheets
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"

@app.route('/')
def hello_world():
    table = request.args.get('table')
    data = request.args.get('data')
    print(table)
    print(data)

    # -------
    gc = pygsheets.authorize(client_secret='client_secret_587261443852-189ipdvrihhnmr4vf2dl0ffng1q5bilo.apps.googleusercontent.com.json')
    # Open spreadsheet and then worksheet
    sh = gc.open('Review')
    wks = sh.sheet1
    wks.update_value(table, data)
    # -------
    return table



if __name__ == '__main__':
    app.run()