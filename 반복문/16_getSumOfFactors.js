
//문제) 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.
//입력) 인자 1 : num number 타입의 수
//출력) number 타입을 리턴해야 합니다.
//주의사항) 반복문(for)문을 사용해야 합니다.
//Math.pow, 거듭제곱 연산자 사용은 금지됩니다. (거듭제곱은 자바스크립트 표준 내장 객체인 Math 객체를 통해 쉽게 구할 수 있습니다.)
function getSumOfFactors(num) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = 0;
  for(let i = 0; i <= num; i++) {
    if(num % i === 0){
      answer += i;
    }
  }
  return answer;
}
