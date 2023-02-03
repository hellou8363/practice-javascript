var text1 = "함수 선언 전 호출";
var text2 = "함수 선언 후 호출";

printMsg(text1);

function printMsg(msg) {
  console.log(`pringMsg(${msg}) invoked.`);
}

printMsg(text2);