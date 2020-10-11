//문제) 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.
//입력) 인자 1 : str string 타입의 문자열
//출력) number 타입을 리턴해야 합니다 (0 이상의 정수)
//주의사항) 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
//숫자(digit)는 연속해서 등장하지 않습니다.
function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  const num = '0123456789';

  if(str === '') {
    return 0;
  }

  let sum = 0;
  let pureStr = '';
  for(let i = 0; i < str.length; i++) {
    if(num.includes(str[i])) {
      sun = sum + Number(str[i]);
    }
    else if (str[i] !== ' ') {
      pureStr = pureStr + str[i];
    }
  }
  return Math.round(sum / pureStr.length);
}
