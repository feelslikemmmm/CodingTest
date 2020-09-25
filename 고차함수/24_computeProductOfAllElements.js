
//문제 : number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴해야 합니다.
//입력 : 인자 1: number 타입을 요소로 갖는 배열
//출력 : number 타입을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//arr.reduce를 사용해 풀어야 합니다.
//빈 배열을 입력받은 경우, 1을 리턴해야 합니다.
function computeProductOfAllElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce(function(value, value2) {
    return value * value2;
  },1)
}
