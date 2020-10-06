//문제) 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.
//입력) 인자1 : arr number 타입의 정수로 구성된 배열
//출력) number 타입을 리턴해야 합니다
//주의 사항)
function getLargestElement(arr) {
// TODO: 여기에 코드를 작성합니다.
  return Math.max.apply(null, arr);
}
