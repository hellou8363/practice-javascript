## Study Record
\
**jQuery 시작**  
CDN: Content Delivery Network  
\
\
확장자
- min: 압축
- map: 다운로드, 압축된 버전에 대한 매핑
- slim: 

\
\
**CDN 다운로드 방식에서 integrity 속성**  
integrity 속성의 해시코드 값과 src 속성의 해시코드 값을 비교하여 XSS 방지  
\
\
**jquery-migrate**  
https://cdnjs.com/libraries/jquery-migrate  
\
\
jQuery 문서 자체가 defer  
\
\
**선택자**
- 선택한 요소에 지정한 스타일을 적용
  ```
  $("CSS 선택자").css("스타일 속성명", "값");
  ```
- 선택한 요소에 지정한 속성을 적용
  ```
  $("CSS 선택자").attr("속성명", "값");
  ```
$ => function, selector ($ === jQuery)  
.css => method  
\
\
**jQuery Startup Code**  
```
$(document).ready(callback); // document: DOM tree 전체선택
$(window).load(callback); // window: 브라우저(거의 쓰지 않음)
$(callback); // 가장 많이 사용
```
- ready: 모든 태그의 DOM tree가 완성되면 수행
- load: 리소스 파일(예: 이미지)까지 모두 다운로드 된 후 수행  
  load는 모든 자원을 다운로드 받은 후 수행되므로 가장 마지막에 수행된다.

\
\
**jQuery는 Style을 인라인 방식으로 지정**  
