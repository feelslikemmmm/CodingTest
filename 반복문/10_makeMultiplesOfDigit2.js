
//문제) 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.
//입력) 인자 1: num1 number 타입의 정수 (num >= 0) 이상의 정수), num2
//출력) number 타입을 리턴해야 합니다.
//주의사항) 반복문(for)문을 사용해야 합니다.
//num1이 num2보다 작지 않을 수도 있습니다.
//0은 2의 배수가 아니라고 가정합니다.
function makeMultiplesOfDigit2(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if(num1 === 0 && num2 === 0){
    return 0;
  }
  if(num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let answer = 0;
  for (let i = num1; i <= num2; i++) {
    if(i % 2 === 0 && i !== 0) {
      answer ++;
    }
  }
  return answer;
}
