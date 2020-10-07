//문제) 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.
//입력) 인자 1 : arr string 타입을 요소로 갖는 배열
//출력) string 타입을 리턴해야 합니다.
//주의사항) 각 문자열의 길이는 다양합니다. 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
function readVertically(arr) {
  // code goes here
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let el = arr[i];
    for(let j = 0; j < arr[i].length; j++) {
      if(result.length === j) {
        result.push(el[j]);
      }
      else {
        result[j] = result[j] + el[j];
      }
    }
  }
  return result.join('');
}

