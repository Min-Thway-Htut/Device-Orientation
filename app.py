from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/send_data', methods=['POST'])
def receive_data():
    if request.is_json:
        data = request.get_json()  # Parse the JSON data from the request
        alpha = data.get('alpha')
        beta = data.get('beta')
        gamma = data.get('gamma')

        # Log received data for debugging purposes
        print(f"Received data: alpha={alpha}, beta={beta}, gamma={gamma}")

        # Respond back with a success message
        return jsonify({'status': 'success', 'message': 'Data received successfully'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Content-Type must be application/json'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
