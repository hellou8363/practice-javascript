function add () {
  // console.clear(); // 1. 콘솔창 clear
  console.group("add"); // 2. 그룹 로그 생성 준비
  console.debug(`add() invoked.`); // 3. 개별 로그 출력(호출 로그)

  let i, sum = 0;

  console.log("\t + arguments:", arguments);

  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  } // for

  console.log(`수행결과: ${sum}`); // 4. 개별 로그 출력
  console.groupEnd(); // 5. 그룹 로그 종료
}; // add

add();
add(2);
add(2, 3);
add(2, 3, 4);

// -----

function add2(...rest) { // Rest(나머지) Parameter => 가변인자
  console.group('ADD2');
  console.debug(`add() invoked.`);

  let i, sum = 0;

  console.log('\t + rest: ' + rest);

  rest.forEach(value => sum += value);

  console.log(`수행결과: ${sum}`);
  console.groupEnd();
} // add2

add2(1, 2, 3, 4, 5);