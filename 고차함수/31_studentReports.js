
//문제 : 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.
//남학생들의 정보는 리턴하는 배열에서 제외합니다. 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
//입력 : 인자 1 : students
//객체를 요소로 갖는 배열
//arr[i]는 'name', 'gender' 등의 속성을 갖는 객체
//'grades' 속성은 number 타입을 요소로 갖는 배열
//'grades' 속성이 빈 배열인 경우는 없다고 가정합니다.

//출력 : string 타입을 리턴해야 합니다.
//반복문(for, while) 사용은 금지됩니다.
//배열을 리턴해야 합니다.
//배열로 되어 있는 학생들의 성적을 number 타입의 평균값으로 변형해야 합니다.
//주의사항 : 'female'는 여학생, 'male'는 남학생입니다.
function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  const females = students.filter(function (el) {
    return el.gender === 'female';
  });

  return females.map(function (el) {
    const sum = el.grades.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    const avg = sum / el.grades.length;

    el.grades = avg;
    return el;
  });
}

