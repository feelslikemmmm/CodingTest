
//문제 : 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 각 객체의 'name' 속성을 요소로 갖는 배열을 리턴해야 합니다.
//입력 : 인자 1 : arr 객체를 요소로 갖는 배열
//arr[i]는 'name', 'age' 속성을 갖는 객체
//'name' 속성은 string 타입
//출력 :string 타입을 요소로 갖는 배열을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getOnlyNames(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map(function(el) {
    return el.name;
  });
}
