from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

# intro
@app.route('/intro')
def intro():
    return render_template('service_intro.html')

@app.route('/begeIntro')
def begeIntro():
    return render_template('bege_intro.html')

@app.route('/service', methods=['POST'])
def service():
    name = request.form['input']
    return render_template('service.html', name=name)

@app.route('/begeCheck')
def begeCheck():
    return render_template('bege_check.html')

@app.route('/begeFinish')
def begeFinish():
    return render_template('bege_finish.html')

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000,debug=True)