  // id가 map인거 불러오기
  var mapContainer = document.getElementById('map'),
    mapOptions = {
    center: new kakao.maps.LatLng(35.192583, 126.813564),
    level: 5,
  };
  // 지도 생성
  var map = new kakao.maps.Map(mapContainer, mapOptions);

  // 키워드 검색 맵
  var places = new kakao.maps.services.Places();
  // 키워드로 장소 검색
  // searchPlaces();

  function searchPlaces() {
    //위치+채식으로 검색이 된다.
    var keyword = document.getElementById('keyword').value + '롯데마트';
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    places.keywordSearch( keyword, callback); 
    }

  // 위도, 경도가 담길 리스트
  // 변수명을 location으로하니까 무한새로고침 발생,,
  // var loc = [];
  var loc = [
    {
      title: '장덕 세븐일레븐',
      latlng: new kakao.maps.LatLng(35.192450,126.813498)
    }
  ]
  // 검색한 키워드 기준으로 찾은 장소 이름과 x,y값을 loc배열에 넣는다.
  var callback = function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      for(var i=0; i<result.length; i++){
        t=result[i]['place_name']
        l=new kakao.maps.LatLng(result[i]['x'], result[i]['y']);
        loc.push({title:t,latlng:l})
        }
      }
    };
    console.log(loc)
    // loc을 돌면서 해당 지점에 마크표시를 한다.
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for(var i=0; i<loc.length; i++){
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35); 
    
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: loc[i].latlng, // 마커를 표시할 위치
          title : loc[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
        });
      console.log(loc[i].latlng);
    
  }  
