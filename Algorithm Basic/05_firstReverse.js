<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>05_firstReverse</title>
</head>
<body>
  <script>
    //문제) 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.
    //입력) 인자 1 : str string 타입의 문자열
    //출력) string 타입을 리턴해야 합니다. 
    //주의 사항) 
    function firstReverse(str) {
      // code here ... :)
      return str.split('').reverse().join('');
      
    }
  </script>
</body>
</html>