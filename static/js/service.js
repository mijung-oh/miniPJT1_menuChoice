var imgArray= new Array();
imgArray[0]="static/images/z.jpg";  //사진
imgArray[1]="static/images/네네양념.jpg"; //사진
imgArray[2]="static/images/짜장면.jpg";    //사진
imgArray[3]="static/images/피자알볼로-단호박.jpg";    //사진

var nameArray=new Array();
nameArray[0]="굽네양념치킨";
nameArray[1]="네네양념치킨";
nameArray[2]="짜장면";
nameArray[3]="피자알볼로-단호박"

function showImage()
{
    var randomNum=Math.round(Math.random()*3);
    var objImg=document.getElementById("Img");
    var objInf=document.getElementById("Text");
    
    objImg.src=imgArray[randomNum];
    objInf.innerHTML=nameArray[randomNum];
}
