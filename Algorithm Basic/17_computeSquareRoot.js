//문제)문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
//입력) 인자 1 : num number 타입의 정수 (num >= 2)
//출력) number 타입을 리턴해야 합니다.
//최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
//주의사항) Math.sqrt 사용은 금지됩니다.
function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) {
      base = base + diffs[i];
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2));
}