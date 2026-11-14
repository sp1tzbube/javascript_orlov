from flask import Flask, jsonify

app = Flask(__name__)
app.json.sort_keys = False  # keep "Number" before "isPrime"


def is_prime(number):
    """Return True if number is a prime number, otherwise False."""
    if number < 2:
        return False
    divisor = 2
    while divisor * divisor <= number:
        if number % divisor == 0:
            return False
        divisor += 1
    return True


@app.route("/prime_number/<int:number>")
def prime_number(number):
    response = {
        "Number": number,
        "isPrime": is_prime(number)
    }
    return jsonify(response)


if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)