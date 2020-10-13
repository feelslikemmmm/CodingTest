//문제) 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
//'hello'를 secret 3으로 암호화한 경우: 'khoor'
//'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
//입력) 인자 1 : str string 타입의 알파벳 문자열
//출력) string 타입을 리턴해야 합니다.
//주의사항) 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
//3개 이상 연속되는 문자만 압축합니다.
function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  let count = 1;

  let comparison = str[0];
  str = str + ' ';
  
  for(let i = 1; i < str.length; i++) {
    if(comparison === str[i]) {
      count ++;
    }
    else {
      if(count >= 3) {
        result = result + `${count}${comparison}`;
      }
      else {
        result = result + comparison.repeat(count);
      }
      comparison = str[i];
      count = 1;
    }
  }
  return result;
}
