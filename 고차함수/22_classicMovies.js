
//문제 : 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.
//입력 : 인자 1 arr 객체를 요소로 갖는 배열 / arr[i]는 'title', 'year' 등의 속성을 갖는 객체, 'year' 속성은 number 타입 (1 이상의 정수)
//인자 2: year number 타입의 연도 (1 이상의 정수)
//출력 :string 타입을 요소로 갖는 배열을 리턴해야 합니다.
//각 요소는 영화 제목 by 영화 감독의 형태를 가져야 합니다.
//주의사항 : 반복문(for, while) 사용은 금지됩니다.
function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  const pastYear = arr.filter(function (el) {
    return el.year < year;
  });
  return pastYear.map(function (el) {
    return `${el.title} by ${el.director}`;
  });
}