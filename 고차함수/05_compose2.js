//문제: 두 개의 함수를 입력받아  두 함수가 결합된 새로운 함수를 리턴해야 합니다.
//입력 : 인자 1 func number 타입을 입력받아 임의의 타입을 리턴하는 함수
//인자 2 : func2 number 타입을 입력받아 number 타입을 리턴하는 함수
//인자 3 : num number 타입의 수
//출력 : 함수를 리턴해야 합니다.
//리턴되는 함수는 정수를 입력받아 func2, func1의 순으로 적용합니다.
//주의사항 : 입력받은 함수가 어떤 일을 하는지는 중요하지 않습니다.
function compose2(func1, func2) {
  // TODO: 여기에 코드를 작성합니다.
  const resultFunc = function(value) {
    return func1(func2(value));
  }
  return resultFunc;
}
