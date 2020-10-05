
//문제 : 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.
//남학생들의 정보는 리턴하는 배열에서 제외합니다. 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
//입력 : 인자 1 : arr
//배열을 요소로 갖는 배열
//arr[i]는 임의의 타입을 요소로 갖는 배열

//출력 : number 타입을 리턴해야 합니다.
//주의사항 : 합을 구할 때 number 타입만 고려해야 합니다.
function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const arrConcat = arr.reduce((el, el2) => {
    return el.concat(el2);
  });

  const arrNumber = arrConcat.filter( (el) => {
    return typeof el === 'number';
  });

  return arrNumber.reduce( (n,n2) => {
    return n + n2;
  }, 0);
}

