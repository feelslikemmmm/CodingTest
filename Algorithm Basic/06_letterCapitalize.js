//문제) 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.
//입력) 인자 1 : str string 타입의 문자열
//출력) string 타입을 리턴해야 합니다. 
//주의 사항) 단어는 공백 한 칸으로 구분합니다.
//연속된 공백이 존재할 수 있습니다.
//빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++ ) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    str = words.join(' ');
  }
  return str;
}
