
//문제) 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
//입력) 인자 1: num (number 타입의 정수)
//출력) boolean 타입을 리턴해야 합니다.
//주의사항) 반복문(while)문을 사용해야 합니다.
//for문 사용은 금지됩니다.
//나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
//0은 짝수로 간주합니다.
function isOdd(num) {
  if (num < 0) {
    num = -num;
  }
  while (num >= 0) {
    if (num === 0) {
      return false;
    } 
    else if (num === 1) {
      return true;
    }
    num = num - 2;
  }
}
