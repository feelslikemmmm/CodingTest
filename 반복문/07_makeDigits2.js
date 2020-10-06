
//문제) 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.
//입력) 인자 1: num number 타입의 정수 (num >= 1)
//출력) string 타입을 리턴해야 합니다.
//주의사항) 반복문(while)문을 사용해야 합니다.
//숫자(number string) 사이를 '-'로 구분합니다. ('1-3-5-7-9')
function makeDigits2(num) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = '';

  let n = 1;
  while(n <= num) { 
    if (num !== n) {  
      answer = answer + n + '-';
    }
    else {
      answer = answer + n;
    }
    n++
  }
  return answer
}
