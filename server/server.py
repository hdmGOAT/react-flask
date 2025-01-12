from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route("/api/members")
def members():
    return jsonify({"members": ["1", "2", "3"]})

if __name__ == "__main__":
    app.run(debug=True)