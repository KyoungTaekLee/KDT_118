// 13 세미 콜론은 언제 사용하는가?
// 세미콜론은 JS에서 문장을 종결하는데 사용
// 문장을 구분할 때

// 14 자바스크립트에서 대소문자를 구분하는 예
// 자바스크립트는 대소문자를 구별합니다. 이는 변수 이름, 함수 이름, 객체 프로퍼티 이름 등 모든 식별자에 적용됩니다.
// 대소문자를 구별하는 예시
let myVariable = 10;
let MyVariable = 20;

console.log(myVariable); // 출력: 10
console.log(MyVariable); // 출력: 20

// 15 자바스크립트에서 사용하는 데이터 타입들을나열해보기
// number, string, boolean,undefined, null, object, array, function, symbl

// 16 자바스크립트에서 변수를 어떻게 선언하나요?
// var, let, const 를 사용하여 변수를 선언

// 17 null과 undefined의 차이점은?
// null은 변수를 선언 후 null이라는 값이 없음을 나타내느 특별한 값을 할당 한 것
// undefined는 변수가 선언되었지만 값이 할당되지 않음

// 18 자바스크립트에서 truthy와 falsy값은 무엇인가?
// 자바스크립트에서 truthy와 falsy는 불리언(Boolean) 컨텍스트에서 평가되는 값들을 나타냅니다. 
// truthy : 0이아닌 모든 숫자, 빈 문자열을 제외한 문자열, 모든 객체, 빈 배열을 제외한 모든 배열, 모든 함수, 불리언 값 true
// falsy : 숫자 0, 빈 문자열, null, undefined, NaN(Not a Number), 불리언 값 false

// 19 typeof 연산자를 사용해 변수의 타입을 확인하는 코드
let a = 10;

console.log(typeof(a));

// 20 자바스크립트에서 ==과 ===의 차이는?
// 둘다 비교 연산자 이지만 ==는 값이 같은지 비교, ===는 값과 타입 모두 같은지 비교

// 21 변수 x에 값 10을 할당하고, x의 값이 10인지 확인하는 코드
let x = 10;
console.log(x);

// 22 +,-,*,/ 연산자를 사용해 간단한 산술 연살을 하는 코드를 클래스로 작성

class Calculator{
  constructor(){

  }

  add(x,y){
    return x+y;
  }

  minus(x,y){
    return x-y;
  }

  multiply(x,y){
    return x*y;
  }

  divide(x,y){
    if(y===0){
      throw new Error('y가 0이야')
    }
    return x/y;
  }

  remain(x,y){
    return x%y;
  }

  exchange(x,y){
    let z = 0;
    z = x;
    x = y;
    y = z;

    return x,y;
  }
}

const calculator = new Calculator();

console.log(calculator.add(4,5))
console.log(calculator.exchange(10,2))

function exchange(x,y){
  let z = 0;
  z = x;
  x = y;
  y = z;

  return {newX : x, newY: y};
}
const result = exchange(4,5)
console.log(exchange(4,5))
console.log(result.newX)
console.log(result.newY)