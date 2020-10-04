//문제: 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.
//입력 : 인자 1 func number 타입을 입력받아 number 타입을 리턴하는 함수
//인자 2 : arr number 타입을 요소로 갖는 배열, arr[i]는 0 이상의 정수
//출력 : 배열을 리턴해야 합니다.
//주의사항 : 반복문(for)문을 사용해야 합니다. arr.map 사용은 금지됩니다. 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
function mapCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  let arr2 = [];
  for(let value of arr){
    arr2.push(func(value));
  }
  return arr2;
}
