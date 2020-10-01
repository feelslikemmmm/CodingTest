//문제: 두 개의 함수와 수(num)를 입력받아 num에 함수들을 num에 가까운 순서대로 적용한 결과를 리턴해야 합니다.
//입력 : 인자 1 func number 타입을 입력받아 임의의 타입을 리턴하는 함수
//인자 2 : func2 number 타입을 입력받아 number 타입을 리턴하는 함수
//인자 3 : num number 타입의 수
//출력 : 마지막으로 호출되는 함수(func1)의 리턴 타입을 따릅니다.
//주의사항 : 입력받은 함수가 어떤 일을 하는지는 중요하지 않습니다.
function compose(func1, func2, num) {
  // TODO: 여기에 코드를 작성합니다.
  const result1 = func2(num);
  const result2 = func1(result1);
  return result2;
}
