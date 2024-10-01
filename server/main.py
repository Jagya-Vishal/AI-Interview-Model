from flask import Flask, jsonify # type: ignore
from flask_cors import CORS

app = Flask(__name__)
cors =CORS(app,origins='*')

@app.route("/api/users",methods=['GET'])
def users():
    return jsonify(
        {
            "users":[
                'Vishal',
                'Nikhil',
                'Khushi',
                'Tirth'
            ]
        }
    )

if __name__=="__main__":
    app.run(debug=True, port=8080)