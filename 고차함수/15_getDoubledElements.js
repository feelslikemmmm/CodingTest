
//문제 : 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴해야 합니다.
//입력 : 인자 1 : arr number 타입을 요소로 갖는 배열
//출력 : 새로운 배열을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.


function getDoubledElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = arr.map(function(el) {
    return el*2;
  })
  return result;
}
