
//문제 : 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.
//입력 : 인자 1 : records 객체를 요소로 갖는 배열 
//인자 2 : value string 타입의 문자열
//출력 : number 타입을 리턴해야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
//arr.reduce를 사용해 풀어야 합니다.
//빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
function calculateScore(records, value) {
  // TODO: Your code here!
  const result = records.reduce( function (el, el2) {
    if(el2.animal === value) {
      return el + el2.score;
    } else {
      return el;
    }
  }, 0);
  return result;
}

