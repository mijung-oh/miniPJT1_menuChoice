from flask import Flask, render_template
import requests
app = Flask(__name__)


# 1. 사용자가 접속할 경로를 작성
@app.route('/')
def hello_world():
    # 2. 그 경로로 접속했을 때 호출할 함수 작성

    # 3. 할 일 . . .
    # ex) api 호출, 응답 결과 받아서 가공 등

    # 4. 사용자에게 데이터 보여주기
    return 'Hello, World!'

# variable routing
@app.route('/greeting/<string:name>/')
def name(name):
    # ex) /name/미정
    return f'{name} 안녕!'



# render_template 사용해보기
# 사용자에게 보여줄 데이터를 html에 담기
@app.route('/posts')
def posts():
    # HTML 반환해주기
    # 반드시 templates 폴더 안에 위치해야합니다.
    # render_template 불러와야함
    return render_template('posts.html')


@app.route('/<string:name>/<int:age>/posts')
def blog(name, age):
    # name: 수현, 여진, 미정, 도연 ...

    message = '안녕하세요 ^^'

    numbers = [1, 2, 3, 4, 5]

    # 왼쪽은 html에서 사용할 변수명, 오른쪽은 현재 함수내의 변수명
    return render_template('blog.html', name=name, age=age, m=message, numbers=numbers)


@app.route('/cat')
def cat():
    api_url = 'https://api.thecatapi.com/v1/images/search'
    response = requests.get(api_url).json()
    
    cat_img_url = response[0]['url']
    return render_template('cat.html', cat_img_url=cat_img_url)
# 파일 수정 시, 자동으로 반영해주는 코드.
# 서버 껐다 킬 필요 없음.
# 이제부터 python app.py로 서버 실행!
if __name__ == '__main__':
    app.run(debug=True)