## Study Record
\
**Ajax 관련 메서드**
- load(): 외부 콘텐츠를 가져올 때 사용
- $.ajax(): 데이터를 서버에 HTTP POST, GET 방식으로 전송할 수 있으며, HTML, XML, JSON, 텍스트 유형의 데이터를 요청할 수 있는 통합적인 메서드로 $.post(), $.get(), $.getJSON() 메서드의 기능을 하나로 합쳐 놓은 것이라 볼 수 있음
  ```
  $.ajax({
    url: "전송 페이지(action url)",
    type: "전송 방식(GET, POST 방식)",
    data: "전송할 데이터",
    dataType: "요청한 데이터 형식(html, xml, json, text, jsonp)",
    success: function(data) {
      전송 성공 시 실행될 코드;
    },
    error: function() {
      전송 실패 시 실행될 코드;
    }
  });
  ```
- $.post(): 데이터를 서버에 HTTP POST 방식으로 전송한 후 서버 측의 응답을 받을 때 사용
- $.get(): 데이터를 서버에 HTTP GET 방식으로 전송한 후 서버 측의 응답을 받을 때 사용
- $.getJSON(): 데이터를 서버에 HTTP GET 방식으로 전송한 후 서버 측의 응답을 JSON 형식으로 받을 때 사용
- $.getScript(): Ajax를 이용하여 외부 자바스크립트를 불러옴  
  ```
  $("button").click(function() {
    $.getScript("demo_ajax_script.js");
  });
  ```
- .ajaxStop(function() {...}): 비동기 방식으로 서버에 응답 요청이 완료되었을 때 함수 실행
- .ajaxSuccess(function() {...}): ajax 요청이 성공적으로 완료되면 함수 실행
- .ajaxComplete(function() {...}): ajax 통신이 완료되면 함수 실행

\
\
**가상데이터 생성**  
https://www.mockaroo.com/  
\
\
**동일 출처 원칙**  
참고링크: https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy  
동일 출처 원칙(SOP, same-origin policy): 어떤 출처에서 불러온 문서나 스크립트가 다른 출처에 가져온 리소스와 상호작용하는 것을 제한하는 중요한 보안 방식으로 이 정책은 잠재적으로 해로울 수 있는 문서를 분리함으로써 공격받을 수 있는 경로를 줄여준다.  
비동기 요청 -> 동일출처원칙(SOP) -> 위반(Violation) -> CORS policy violation(Cross-Origin Resource Sharing)  
출처의 정의: 두 URL의 프로토콜, 포트, 호스트가 모두 같아야 동일한 출처라고 할 수 있으며, 스킴/호스트/포트튜플이나 튜플(2개 이상의 요소가 전체를 구성하는 집합)이라고 하기도 한다.  
\
다른 출처의 json 파일을 불러왔을 때 console에 출력되는 문구
```
Access to XMLHttpRequest at 'http://eunhye:8080/members.json' from origin 'http://127.0.0.1:5501' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
\
\
**XHR 객체의 readyState 속성값의 의미**  
범위: 0 ~ 4
- 0: XHR객체를 생성하고 초기화가 안된 상태(new)
- 1: XHR객체를 초기화한 상태(open)
- 2: XHR객체로 요청을 보낸 상태(send)
- 3: XHR객체가 응답을 받고있는 상태(미완료)
- 4: XHR객체가 응답을 완전히 받은 상태(완료)