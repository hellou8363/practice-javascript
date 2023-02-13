## Study Record
\
**이벤트 등록 메서드**  
단독 이벤트 등록 메서드  
```
$("이벤트 대상 선택").이벤트 등록 메서드(function() {
  자바스크립트 코드;
});
```
\
그룹 이벤트 등록 메서드
```
$("이벤트 대상 선택").on("이벤트 종류1, 이벤트 종류2, ...", function() {
    자바스크립트 코드;
});

$("이벤트 대상 선택").on({
  "이벤트종류1 이벤트종류2 ... ": function() {
    자바스크립트 코드;
  }
});

$("이벤트 대상 선택").on({
  "이벤트 종류1": function() {자바스크립트 코드; 1},
  "이벤트 종류2": function() {자바스크립트 코드; 2},
  ...
});
```
\
\
**강제 이벤트 발생**
```
$("이벤트 대상").단독 이벤트 등록 메서드();
$("이벤트 대상").trigger("이벤트 종류");
```
\
\
**이벤트 제거 메서드**
```
$("이벤트 대상").off("제거할 이벤트 종류");
```
\
\
**click() 이벤트 메서드**
```
$("이벤트 대상 선택").click(function() {자바스크립트 코드;});
$("이벤트 대상 선택").on("click", function() {자바스크립트 코드;});
```
\
\
**dblclick() 이벤트 메서드**
```
$("이벤트 대상 선택").click();
```
\
\
**```<a>, <form>```태그에 클릭 이벤트 적용시 기본 이벤트 차단**  
return false를 이용한 차단 방식
```
$("a 또는 form").이벤트 메서드(function() {
  자바스크립트 코드;
  return false;
});
```
preventDefault() 메서드를 이용한 차단 방식
```
$("a 또는 form").이벤트 메서드(function(e) {
  // prevent는 막다, Default는 기본 이벤트를 의미
  e.preventDafault(); 
});
```
\
\
**마우스 이벤트 - mouseover()**
```
$("이벤트 대상 선택").mouseover(function() {자바스크립트 코드;});
$("이벤트 대상 선택").on("mouseover", function() {자바스크립트 코드;});

// mouseover 이벤트 강제 발생
$("이벤트 대상 선택").mouseover();
```
\
\
**마우스 이벤트 - mouseout()**
```
$("이벤트 대상 선택").mouseout(function() {자바스크립트 코드;});
$("이벤트 대상 선택").on("mouseout", function() {자바스크립트 코드;});

// mouseout 이벤트 강제 발생
$("이벤트 대상 선택").mouseout();
```
\
\
**마우스 이벤트 - hover()**
```
$("이벤트 대상 선택").hover(
  function() {마우스 오버시 실행될 코드},
  function() {마우스 아웃시 실행될 코드}
);
```
\
\
**마우스 이벤트**
- clientX
- clientY
- pageX
- pageY
- screenX
- screenY
- layerX
- layerY
- button

\
\
**키보드 이벤트**
- keyCode
- altKey
- ctrlKey
- shiftKey

\
\
**전체 이벤트**
- target
- cancelBubble
- stopPropagation()
- preventDefault()

\
\
**Ajax 메서드**
\
이벤트 핸들러 내 this를 사용하는 경우가 잦으므로 Arrow fuction보다는 function을 사용한다.  
EDD: 이벤트 주도 개발  
\
type: 이벤트명
target: 이벤트 발생한 요소노드(target == currentTarget)  
timestamp: 이벤트 발생 시점
\
Live Event: jquery만의 기능  
