## Study Record
\
자바스크립트: 웹 문서를 동적으로 제어하기 위해 고안된 프로그래밍 언어  
\
**웹 삼총사**
- HTML: 모델 담당
- CSS: 뷰 담당
- JavaScript: 제어 담당

\
**자바스크립트의 역할**
- 요소의 추가 및 삭제
- CSS 및 HTML 요소의 스타일 변경
- 사용자와의 상호작용
- 폼의 유효성 검증
- 마우스와 키보드 이벤트에 대한 스크립트 실행
- 웹 브라우저 제어 및 쿠키 등의 설정과 조회
- AJAX 기술을 이용한 웹 서버와의 통신

\
**자바스크립트 작성 방법**
- 대소문자를 구분하여 작성
- 문장은 세미콜론(;)으로 구분
- 큰따옴표("")와 작은따옴표('')를 구분하여 사용

\
**자바스크립트 포함 방법**
- ```<head>``` 또는 ```<body>``` 태그 내 삽입 가능
  ```
  <head>
    <script>
      // JavaScript 코드 작성
    </script>
  </head>
  <body>
    <script>
      // JavaScript 코드 작성
    </script>
  </body>
  ```
- HTML 태그 안 속성값으로 정의
  ```
  <button type="button" onclick="alert('자바스크립트')">버튼 클릭</button>
  ```
- 별도로 작성 후 HTML 문서에 참조하는 방법
  ```
  <script src="myscript.js"></script> // HTML 문서와 같은 디렉터리에 있는 경우
  <script src="./ejs/myscript.js"></script> // HTML 문서와 다른 디렉터리에 있는 경우
  <script src="http:// ..(생략).. /myscript.js"></script> // HTML 문서와 다른 서버 디렉터리에 있는 경우
  ```
  기능 단위로 분리된 여러 개의 자바스크립트 파일 참조 방식으로 사용

\
**데이터 타입**
- 기본형 타입
  - number / string / boolean / array / object / null / undefined
- 참조형 타입

\
**표현식의 타입을 얻어내는 방법**  
typeof 연산자를 사용 => 단항 연산자  
```typeof 타입명```

\
**웹브라우저의 Console Tab에서 바로 사용가능한 함수**
- inspect(object): object에 대한 타입/멤버들을 모두 알려줌  
  => typeof 보다 정확
- keys(object): object의 속성명들만 추출해 배열로 보여줌
- values(object): object의 값들만 추출해 배열로 보여줌

