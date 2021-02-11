from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def test():
    return render_template('test.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/intro')
def intro():
    return render_template('service_intro.html')

@app.route('/service', methods=['POST'])
def service():
    name = request.form['input']
    return render_template('service.html', name=name)

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000,debug=True)