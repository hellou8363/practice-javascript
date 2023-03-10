## Study Record
\
**자바스크립트 객체**
- 사용자 정의 객체: 사용자가 직접 객체의 속성과 메소드를 정의하여 사용하는 객체  
  (예: Car(), House(), Hotel())
- 내장 객체: 자바스크립트 프로그램 자체에서 정의하여 사용자에게 제공하는 객체  
  (예: Object(), Array(), Date())

\
\
**내장 객체의 종류**
- 브라우저 객체 모델(BOM, Browser, Object Model): 웹 브라우저의 각종 요소를 객체로 표현  
  (예: navigator, screen, location, frames, history, XMLHttpRequest)
- 문서 객체 모델(DOM, Document Object Model): 웹 문서의 각종 요소를 객체로 표현
- 전역 자바스크립트 객체(Globa JavaScript Objects): 자바스크립트 프로그램 전체에서 사용하는 내장 객체  
  (예: Object, Array, Function)

\
\
**객체 변수를 이용하여 객체 생성**
```
var car = {
  name: "Sonata",
  speed: 100,
  color: "white",
  door: 4,
  start: function () {
    return this.speed + 10;
  },
};
```
car: 객체 변수  
name, speed, color, door: 속성명  
"Sonata", 100, "white", 4: 속성값  
start: 메소드명  
function() { ... }: 메소드 정의(함수 형식)   
\
\
**객체 속성 접근 방법**
- 객체명.속성명
- 객체명['속성명']
\
\
**자바스크립트로 제어할 요소를 찾아 결과를 출력하는 방법**
- innerHTML 속성 이용
  ```
  document.getElementById("carname").innerHTML;
  ```
  웹 문서 안에서 아이디가 "carname"인 요소를 찾아 내용을 출력
- textContent 속성 이용
  ```
  var cname = document.getElementById("carname");
  cname.textContent;
  ```
  웹 문서 안에서 아이디가 "carname"인 요소를 찾아서 cname 변수에 반환한 후 cname 변수의 내용을 출력

\
\
**arrow function의 this**  
arrow function에서의 this는 최상위 객체인 window를 의미하므로  
객체 메소드 선언 시, 함수표현식을 사용하고
arrow function은 일반적인 함수나, 익명함수를 만들 때 사용한다.
\
\
**DOM 구조**  
- ```<html>``` == root node(= 요소 node)
- ```<html>```의 하위 태그 == 요소 node
- 태그의 속성 == 속성 node
- 태그 내 텍스트 == 텍스트 node

\
\
**요소 선택자**
- ```document.getElementById()```: (구)방식, 해당 id 요소를 반환
- ```document.querySelector()```: 해당 요소가 여러 개일 경우 첫 번째 요소를 반환
- ```document.querySelectorAll()```: 일치하는 요소들을 배열 형태로 반환

\
\
**DOM EVENT**
```
[ Object ]
     |                                                        (W3Schools.com > Event Attributes)
     |-- EventTarget => Event 가 발생하는 대상(Target) : 모든 요소노드는 기본적으로 이벤트 발생!!!
                |
                |-- Node
                       |
                       |-- Element
                               |
                               |-- HTMLElement
                                          |
                                          |-- HTML<태그이름>Element
```
\
\
**Object 함수 이용**  
sample1.html, sample2.html 참고  
delete 키워드로 객체는 삭제 가능 (변수의 경우, undefined)  
\
\
**Date 객체**  
Date 생성자의 작성 형식  
 ```
 var d = new Date();
 var d = new Date(millisecondes);
 var d = new Date(dateString);
 var d = new Date(year, month, day, hours, seconds, milliseconds);
 ```
\
\
**문서 객체 모델(DOM)**
- 웹 문서를 메모리로 읽어 들여 트리 구조로 변환
- 문서의 각종 요소는 요소 노드로, 텍스트는 텍스트 노드로 변환
- 변환된 트리 구조를 이용하면 자바스크립트로 웹 문서를 조작할 수 있음

\
\
**문서 객체 생성**
- ```createElement()```: 요소 노드를 생성
- ```createTextNode()```: 텍스트 노드를 생성
- ```appendChilde()```: 요소 노드를 body 객체에 추가

\
\
**문서 객체 속성값 설정**
- 객체 변수 사용: 객체변수.속성 = '값';
- 속성 메소드 사용: setAttribute(속성, 값); => 현업에서 사용

\
\
**문서 객체 스타일 변경**  
```
document.getElementById(id).style.속성명 = '속성값';
```
\
\
특정 태그 또는 여러 태그들에 이벤트 핸들러를 설정하려면  
아래와 같은 4가지의 개념을 알고 있어야 한다.  

1. Event Target: 어떤 이벤트가 발생하는 태그(들)  
2. Event Type: 발생할 이벤트의 유형(onclick -> 마우스 클릭 이벤트)  
(3) Event Listener: 이벤트가 발생하길 기다리는 자(예: onClick 속성)  
(4) Event Handler: 이벤트가 발생했을 때, 이벤트를 처리하는 자  