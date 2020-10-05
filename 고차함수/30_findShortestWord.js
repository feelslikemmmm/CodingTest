
//문제 : 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.
//입력 : 인자 1: arr 임의의 요소가 담긴 배열
//출력 : string 타입을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
//배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
//빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
//주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.
function findShortestWord(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const arr2 = arr.filter(function (el) {
    return typeof el === 'string';
  });
  
  if(arr2.length === 0) {
    return '';
  }

  return arr2.reduce(function (value1, value2) {
    if (value1.length <= value2.length) {
      return value1;
    } else {
      return value2;
    }
  });
}
