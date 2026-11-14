import json
import os
from flask import Flask, jsonify

app = Flask(__name__)
app.json.sort_keys = False      # keep "English" before "Finnish"
app.json.ensure_ascii = False   # show ä and ö as they are, not as ä

# Find dictionary.json in the same folder as this .py file,
# no matter which folder the program is started from

folder = os.path.dirname(os.path.abspath(__file__))
dictionary_path = os.path.join(folder, "dictionary.json")

# Read the dictionary from the JSON file once when the server starts

with open(dictionary_path, encoding="utf-8") as file:
    dictionary = json.load(file)


@app.route("/translate/<word>")
def translate(word):
    english = word.lower()        # case-insensitive search

    if english in dictionary:
        response = {
            "English": english,
            "Finnish": dictionary[english]
        }
        return jsonify(response)

    return jsonify({"error": "Word not found"}), 404


# Optional: list of all English words

@app.route("/words")
def words():
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)