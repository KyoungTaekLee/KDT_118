// 1
console.log('hello world');

// 2
let a = 10;

// 3
let b = "hello, ";
let c = "javaScript!";

console.log(b+c);

// 4
const sum = (a,b) =>{
  let sum = 0;
  sum = a+b;
  return sum;
}
console.log("두 수의 합은 : ", sum(5,10))

function sumone(a,b){
  let sum = 0;
  sum = a+b;
  return sum;
}
console.log("두두두 : ", sumone(5, 11));

// 5
for(let i = 1; i < 11; i++){
  console.log(i);
}

// 6
const test = (parameter) => {
  if ((parameter % 2) === 1) {
    console.log("홀수")
  } else if ((parameter % 2) === 0) {
    console.log("짝수")
  }
}
test(10);
test(11);

// 7 JavaScript에서 null과 undefined의 차이점
// undefined은 변수를 선언하고 값을 할당하지 않은 상태, null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 즉, undefined는 자료형이 없는 상태이다.
// 따라서 typeof를 통해 자료형을 확인해보면 null은 object로, undefined는 undefined가 출력되는 것을 확인할 수 있다.

// 8 자바스크립트에서 식별자로 사용될 수 있는 예 들기
// 식별자는 자바스크립트에서 변수, 함수, 객체, 클래스 등을 만들 때 사용되는 이름입니다

// 9 const, let, var의 차이점을 설명
// const
// 값 재할당 불가
//  블록 범위 변수로 블록 내에서 선언된 경우 블록 외부에서 접근 불가
// let
// 값을 재할당 가능
//  블록 범위 변수로 블록 내에서 선언된 경우 블록 외부에서 접근 불가
// 초기화되지 않은 상태로 사용할 수 없음
// var
// let과 유사하지만 블록 범위가 아닌 함수 범위 변수
// 초기화되지 않은 상태로 사용가능, 이 경우 undefined로 값 할당
// ES6에서 도입된 const와 let 으로 인해 var의 사용은 권장되지 않음

// 10 자바 스크립트에서는 주석을 어떻게 다나?
// 한줄주석은 //를 사용하고 여러줄 주석은 /* */를 사용한다

// 11 자바 스크립트에서 사용할 수 있는 특수 문자는?
// 산술 연산자 중 +,-,*  
// 할당 연산자 중 =, +=
// 비교 연산자 중 ==, ===, !==
// 마침표, 대괄호

// 12 use strict는 무엇, 어떻게 사용하나?
// 'use strict'는 자바스크립트의 엄격 모드(Strict Mode)를 활성화하는데 사용되는 특별한 디렉티브
// 오류 감지, 보안 강화, 성능 최적화