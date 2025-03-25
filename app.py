from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv
load_dotenv()

# app = Flask(__name__)
app = Flask(__name__, static_folder="static", template_folder="templates")

# API_KEY = config.API_KEY
# BASE_URL = config.BASE_URL

API_KEY = os.getenv("API_KEY")
BASE_URL = os.getenv("BASE_URL")

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get("city")
    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    weather_url = f"{BASE_URL}/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(weather_url)
    if response.status_code != 200:
        return jsonify({"error": "City not found"}), 404
    data = response.json()
    return jsonify(data)

@app.route("/forecast", methods=["GET"])
def get_forecast():
    city = request.args.get("city")
    if not city:
        return jsonify({"error": "City parameter is required"}), 400
    forecast_url = f"{BASE_URL}/forecast?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(forecast_url)

    if response.status_code != 200:
        return jsonify({"error": "City not found"}), 404
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
