//문제) 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.
//입력) 인자 1 : str string 타입을 요소로 갖는 문자열, 문자열의 길이는 최대 20
//출력) 배열을 리턴해야 합니다.
//주의 사항) 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
//가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let maxLength = 20;
    let minLength = 0;
  
    let maxIdx = 0;
    let minIdx = 0;
  
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length >= minLength) {
        minLength = arr[i].length;
        minIdx = i;
      }
  
      if(arr[i].length <= maxLength) {
        maxLength = arr[i].length;
        maxIdx = i;
      }
    }
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(i !== minIdx && i !== maxIdx) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
}
