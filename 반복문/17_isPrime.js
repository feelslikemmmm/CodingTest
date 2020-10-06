
//문제) 수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.
//입력) 인자 1 : num number 타입의 수
//출력) boolean 타입을 리턴해야 합니다.
//주의사항) 
function isPrime(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = false;
  if(num === 2){
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      result = false;
      break;
    }
    else {
      result = true;  
    }
  }
  return result;
}
