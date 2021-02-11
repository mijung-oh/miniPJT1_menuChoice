# 설 mini 프로젝트 - 오늘 뭐먹지?🍕



- 프로젝트 개요

  html, css에서 기본 문법 + 조금 확장?(Grid, flex, bootstrap) + api 사용까지 배운 후 

  복습 겸 프로젝트 경험으로 배운 것을 활용하여서 진행

  -> 아직 많은 것을 배운 것이 아니기 때문에, 작고 소중한(?) 프로젝트..

  많은 아이디어들이 나왔고, 현실적으로 우리가 짧은 기간내에 해낼 수 있다고 생각이 든 프로젝트! - `오늘 뭐먹지?`

  매일 똑같은 메뉴에 질리거나, 뭘 먹고 싶은지 모르는 사람들에게 메뉴선택에 도움을 줄 수 있는 서비스이다. 🍗🥓🍘🍳🍤



- 진행 과정

  1. **home.html**

     -> 앞으로 쌓여질 우리의 프로젝트들이 모여있는 메인 홈페이지이다.

     아직은 한개밖에 없지만! 차곡차곡 쌓일 예정이다~~~ 🥰

     navbar는 practice하면서 만들어놨던 코드 그대로 가져왔다 ㅎㅎ

     모달로 로그인창이 있고, 창을 줄이면 햄버거 버튼이 생기는 구조이다.

     bootstrap에서 card 코드를 가져와서 쌓여질 프로젝트들을 담아놨고,

     그 중 첫 번째 카드에 이번에 만든 프로젝트를 넣었다.

     - grid를 적용하려고 하는데, class="card"가 있는 div태그에 col를 넣었을 땐 적용이 안되고, div 태그 자체를 article로 묶어서 col을 하니까 적용된다. 왜일까..??

       -> 회의를 통해 해결함. div태그에는 width가 인라인태그로 설정되어 있었기 때문!

  2. **service_intro.html**

     ```html
     <div class="intro">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqhuXJDsoR2MdAXHlyyI4usp42GqXNg5bqg&usqp=CAU" alt="">
         <div class="over-img">
         <form action="/service" method = "post">
           <input type="text" id="input" name = "input" placeholder="이름을 입력하세요!!">
           <button type="submit" class="btn btn-warning" onclick="alert('제출 완료!')">시작하기 GOGO!</button>
         </form>
        
         </div>
       </div>
     ```
     
     
     
     intro 부분에 대한 코드이다.
     
     이름을 입력하면 이름을 post로 보내서 다음 페이지에 계속 나오게 했다.
     
     먼저 form 태그를 만들어서 action에는 데이터를 보낼? 주소를 적는다.
     
     그리고 method드로 post를 적용시킨다.
     
     버튼을 누르면 데이터와 함께 post함수가 실행(?) 되고,
     
     ```python
     @app.route('/service', methods=['POST'])
     def service():
         name = request.form['input']
         return render_template('service.html', name=name)
     ```
     
     post함수를 받은 후 service()가 실행이 되어서 form태그에서 input태그에서 적힌 name 데이터를 request를 사용해 불러온 후 service.html 파일에 데이터와 함께 return한다.
     
  3. **service.html**

     ```html
     <div class="choice p-relative">
       <!-- 음식 사진 -->
       <div class="food-img p-relative">
         <img id="Img" alt="네네 양념치킨">
         <div class="corner d-flex flex-column">
           <button style="font-family: 'Do Hyeon', sans-serif;" type="button" onclick="showImage()" class="btn btn-dark f-size-15rem mb-1">응 아니야~</button>
           <a href="#">
             <button style="font-family: 'Do Hyeon', sans-serif;" type="button" class="btn btn-warning f-size-15rem mb-1">{{ name }}쓰 Pick!</button>
           </a>
           
         </div>
       </div>
       <!-- 음식 이름 -->
       <div id="Text" class="f-bold text-white p-absolute name f-size-4rem"></div>
     </div>
     ```

     

     다음은 실제 랜덤메뉴를 보여주는 코드이다.

     중간쯤에 {{ name }} 을 볼 수 있을 것이다. app.py에서 같이 return된 name 데이터가 저기에 들어간다고 보면 된다! 따라서 사용자가 적은 이름이 저 위치로 들어간다 ㅎㅎ

     살짝 어려웠던 부분은 `응 아니야~` 버튼을 누르면 랜덤으로 음식 사진과 텍스트가 바뀌게 하는 것이었다. 

     슬쩍 구글링을 해본 결과 자바스크립트를 이용하면 뚝-딱 해결할 수 있었다.

     

     ```javascript
     var imgArray= new Array();
     imgArray[0]="static/images/굽네양념.jpg";  //사진
     imgArray[1]="static/images/네네양념.jpg"; //사진
     
     var nameArray=new Array();
     nameArray[0]="굽네양념치킨";
     nameArray[1]="네네양념치킨";
     
     function showImage()
     {
         var randomNum=Math.round(Math.random()*3);
         var objImg=document.getElementById("Img");
         var objInf=document.getElementById("Text");
         
         objImg.src=imgArray[randomNum];
         objInf.innerHTML=nameArray[randomNum];
     }
     
     ```

     

     다음은 랜덤으로 메뉴와 텍스트를 뽑아주는 자바스크립트 코드이다.

     두 개의 array 객체를 만들어서 인덱스로 img와 name을 맞춰주었다.

     (딕셔너리로 하려고 했지만 실패....*)

     showImage() 함수는 랜덤으로 데이터를 바꿔주는 함수이다.

     먼저 random() 함수를 사용하여 랜덤값을 뽑아내 randomNum에 담아두고,

     id가 Img인 태그를 objImg에,, id가 Text인 태그를 objInf에,, 담아두었다.

     따라서 objImg에는 service.html의 img태그이고,

     objInf에는 service.html의 음식 이름을 보여주는 div태그이다.

     

     > 여기서 어려웠던 부분은 '과연 텍스트가 자동으로 대체될 수 있을까?' 였다.
     >
     > 열심히 구글링을 해본 결과 `innerHTML` 이라는 좋은 속성? 이 존재했다!
     >
     > 저것을 사용하면 div태그 사이에 있는 text를 마음대로 변경할 수 있다!!

     

     

     

- 아직도 미해결인 궁금증 😵
  - service.html 코드에서 button태그를 보면 인라인태그로 스타일-font가 지정되어있는 것을 볼 수 있다. 클래스태그로 font 스타일을 저장한 다음에 class안에 넣었는데 적용되지 않았다,,, 저렇게 인라인태그로 설정해야 적용되었다..!! 왜일까?????
  - 모든 html에 공통인 태그(navbar, footer) 를 모든 html 파일에 적지 않고 할 수 있는 방법은 없을까?



- 💪향후 발전방향 💪
  - ui를.... 좀 바꿔보자....!!!
  - service.html에서 원하는 음식이 pick된 후, '{{ name }}쓰 Pick!' 버튼을 누른 후의 화면을 아직 구성하지 못했다. 추후에 지도api를 이용해서 텍스트를 받아 사용자 주변에 있는 음식점을 보여주는 기능을 만들어보고 싶다!
  - 팀원이 진행했던 카카오톡 화면도 구현해보고 싶다..!!! (iframe???)



- ✔ pjt 피드백 

  - 이번 프로젝트를 통해 Grid에 대해서 조금 더 이해할 수 있었다. 앞으로 어떻게 사용해야 하는지 정확히(?) 알 것 같다!

  - 짧은 기간내에 원하는 기능 대부분을 구현할 수 있게 되어서 뿌듯했다,,

  - flask에서 디렉토리를 나눈다는 말을 이제서야 확실히 이해하게 되었다..

    (친구가 했던말 계속 이해 못하고 있었던 것 같다 껄껄)

  - 보통 html태그 안에서 a태그 사용하면 href에 'service.html'이런 식으로 넣는데, flask로 서버를 작동시켜서 실행해보니 에러가 났다. 그 부분을 app.py에서 지정된 경로로 설정해줘야 한다는 부분이 새로웠다!