
//문제 : 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.
//입력 : 인자 1 arr 객체를 요소로 갖는 배열 / arr[i]는 'name', 'age' 속성을 갖는 객체 / 'age' 속성은 number 타입 (0 이상의 정수)
//출력 :string 타입을 요소로 갖는 배열을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//빈 배열이 주어진 경우에는 빈 배열을 리턴해야 합니다.
function getOnlyAllowedToDrink(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const filter = arr.filter(function(obj) {
    return obj.age >= 18;
  });
  return filter.map(function(obj) {
    return obj.name
  });
}
