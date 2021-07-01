// 다른 js파일이랑 변수명 같아도 상관없는지?
var imgArray= new Array();
imgArray[0]="static/images/김치.jpg";  //사진
imgArray[1]="static/images/라면.jpg"; //사진
imgArray[2]="static/images/젤리.jpg";    //사진
imgArray[3]="static/images/크림리조또.jpg";    //사진

var nameArray=new Array();
nameArray[0]="김치";
nameArray[1]="라면";
nameArray[2]="젤리";
nameArray[3]="크림리조또"

// 채식이 맞으면 1, 아니면 0
var checkArray = new Array();
checkArray[0] = 0;
checkArray[1] = 0;
checkArray[2] = 0;
checkArray[3] = 0;

var currentName;
var currentIDX;
var answerCount = 0;
var percent = (answerCount/4)*100;
// 다음문제 가기 버튼 보여주는 함수
function view(){
  document.getElementById("nextButton").style.display = "block";
}
//다음문제로 가면 작성되어있던 설명 사라짐
function hidden(){
  document.getElementById("begeText").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
}
// 다 끝나면 실행되는 함수
function finish(){
  var objImg=document.getElementById("begeImg");
  var objText=document.getElementById("begeName");
  objImg.src = "static/images/채식.jpg";
  objText.innerHTML = '당신의 채식관심도는 '+(answerCount/4)*100+'%입니다.';
  // yes, no, 다음문제 보러가기 버튼 삭제
  document.getElementById("YesOrNo1").style.display = "none";
  document.getElementById("YesOrNo2").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("store").style.display = "block";
}
function check(value){
    if(checkArray[currentIDX] == value){
      //채식문제 맞힌 경우
      alert('정답!');
      answerCount += 1;
    }
    else{
      alert('땡!');
      showText(currentIDX);
    }
  //다음문제로 가기버튼 생성
  view();
}
//다음문제가기 버튼 누르면 실행되는 함수
function showbegeImage(value)
{
    hidden();
    var objImg=document.getElementById("begeImg");
    var objName=document.getElementById("begeName");
    // 새로고침할땐 1 -> 한 개의 이미지만 띄워줌
    if(value == 1){
      objImg.src=imgArray[0];
      objName.innerHTML=nameArray[0]+'는(은) 채식음식일까요 아닐까요?';
      currentName = nameArray[0];
      currentIDX = 0
    }
    else{
      if(currentIDX+1 == 4){
        alert('끝!!');
        finish();
      }
      else{
        //0,1,2,3
        objImg.src=imgArray[currentIDX+1];
        objName.innerHTML=nameArray[currentIDX+1]+'는(은) 채식음식일까요 아닐까요?';
        currentName = nameArray[currentIDX+1];
        currentIDX += 1
      }        
    }
    
}
function showText(currentIDX){
  var vege = {}
  vege[0] = '김치는 채식음식이 아닙니다! 배추라서 채식이라고 생각할 수 있지만, 젓갈이 들어갑니다. 젓갈은 물고기의 살, 알, 창자 등을 소금에 절인 음식이기 때문에 완전 채식이 아닙니다.'
  vege[1] = '라면, 국수, 우동, 수제비 등 국과 면류는 채식음식이 아닙니다! 컵라면이나 우동같은 경우 대부분 쇠고기 분말, 돼지고기 분말이 들어가고 식당에서 파는 경우도 고기나 멸치, 꽃게 같은 해산물 베이스인 육류를 사용합니다. 또한, 밀가루 반죽 시 계란을 넣었을 가능성도 있습니다.'
  vege[2] = '젤리는 채식음식이 아닙니다!\
  젤리는 동물의 뼈, 연골, 가죽에서 콜라겐을 추출하여서 만든 것이기 때문입니다.\
  대체음식으로는 양갱, 곤약 등이 있습니다!'
  vege[3] = '크림 리조또는 채식음식이 아닙니다!\
  크림버섯리조또 같은 것은 채소와 밥이니까 채식이라고 생각할 수 있지만,\
  크림은 우유로 만든 유제품이기 때문에 동물성 음식입니다.\
  크림이 들어가면 동물성 크림일 확률이 크기때문에 식당에 가면 식물성 크림인지 물어보세요!\
  대체음식으로는 동물성 크림, 두유 사용 등이 있습니다!'
  var obgText = document.getElementById("begeText");
  document.getElementById("begeText").style.display = "block";
  obgText.innerHTML=vege[currentIDX];
}