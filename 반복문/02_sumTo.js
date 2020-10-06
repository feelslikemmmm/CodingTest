//문제) 수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다
//입력) 인자 1: num (number 타입의 정수 (num >= 0))
//출력) number 타입을 리턴해야 합니다.
//주의사항) 반복문(for)문을 사용해야 합니다

function sumTo(n) {
// TODO: 여기에 코드를 작성합니다.
  let sumNum = 0;
  for (let i = 0; i <= n; i++ ) {
    sumNum = sumNum + i;
  } 
  return sumNum;
}
