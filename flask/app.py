from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Main</h1><a href='/hello'>Go to Hello World</a>"

@app.route('/hello')
def hello():
    count = request.args.get("count")

    # If no number has been entered yet, show the form
    if count is None:
        return '''
            <form>
                <input name="count" placeholder="How many times?">
                <button>Show</button>
            </form>
        '''

    try:
        count = int(count)
    except ValueError:
        return "<p>Error: please enter a whole number.</p><a href='/hello'>Back</a>", 400

    if count < 1 or count > 1000:
        return "<p>The number must be between 1 and 1000.</p><a href='/hello'>Back</a>", 400

    for i in range(count):
        print("Hello World")  # print in the terminal

    return "<br>".join(["Hello World"] * count)  # output on the page

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)