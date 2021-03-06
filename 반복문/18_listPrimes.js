
//문제) 수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.
//입력) 인자 1 : num number 타입의 정수 (num >= 2)
//출력) string 타입을 리턴해야 합니다. 2-3-5-7의 형식으로 리턴해야 합니다.
//주의사항) 이중 반복문(double for loop)을 사용해야 합니다.
function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 2){
    return '2';
  }
  
  let answer = '2-3-';
  let check = true;

  for(let i = 2; i <= num; i++) {
    if(i % 2 === 0 || i % 3 === 0){
      continue;
    }
    else {
      let sqrtNum = Math.floor(Math.sqrt(i));
      for(let j = 3; j <= sqrtNum; j+=2){
        if(i % j === 0) {
          check = false;
          break;
        } 
        else {
          check = true;
        }
      }
      if(check) {
        answer = answer + i + '-';
      }
    }
  }
  if(answer.slice(-1) === '-') {
    answer = answer.slice(0, -1);
  }
  return answer;
}
