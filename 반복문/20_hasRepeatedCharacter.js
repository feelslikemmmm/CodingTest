
//문제) 문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.
//입력) 인자 1 : str string 타입의 문자열
//출력) boolean 타입을 리턴해야 합니다.
//입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.
//주의사항) 이중 반복문(double for loop)을 사용해야 합니다.
//빈 문자열을 입력받은 경우에는 false을 리턴해야 합니다.
function hasRepeatedCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = false;
  for(let i = 0; i < str.length; i++) {    
    for(let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return true;
      } 
      else {
        answer = false;
      }
    } 
    if (answer){
      return answer;
    }
  } 
  return answer;
}
