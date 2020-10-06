//문제) 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.
//입력) 인자1 : arr number 타입을 요소로 갖는 배열
//출력) number 타입을 리턴해야 합니다.
//주의 사항) 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.

function computeSumOfAllElements(arr) {
// TODO: 여기에 코드를 작성합니다.
    let result = arr.reduce((arr1, arr2) =>{
      return arr1 + arr2;
    }, 0);
    if(arr.length === 0) {
      return 0;
    }
    return result;
}
