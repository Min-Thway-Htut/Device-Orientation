from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='templates')

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()

    result = data['value'] * 2
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True, port=5004)

