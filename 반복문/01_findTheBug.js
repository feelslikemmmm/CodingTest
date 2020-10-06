//문제) 문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다.
//입력) 인자 1: word (string타입의 단어)
//출력) number 타입을 리턴해야 합니다.
//주의사항) 반복문을 사용해야 합니다. #기호가 없는 경우 undefined를 출력해야 합니다.
function findTheBug(word) {
// TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < word.length; i++){
    if(word[i] === '#'){
      return i;
    };
  };
  return undefined;
};