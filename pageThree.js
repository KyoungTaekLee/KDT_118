//29 if문 사용해서 짝수 홀수 판단
const evenOdd = (number) => {
  if ((number) % 2 === 1) {
    console.log('This is Odd')
  } else if ((number) % 2 === 0) {
    console.log('This is Even')
  }
}

evenOdd(5);
evenOdd(4);

// 30 for문을 사용하여 1부터 10까지의 수를 출력하는 코드
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// 31 30번을 while문으로 수정
let i = 0;
while (i < 10) {
  console.log(i + 1)
  i++;
}

// 32 switch문 사용
let j = 20;

switch (true) {
  case j < 30:
    console.log('멈춰')
    break;
  case j > 30:
    console.log('떙')
  default:
    console.log('hi')
}

// 33 try catch문 사용

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }

    return a / b;
  } catch (error) {
    console.error("에러를 처리합니다:", error.message);
    return null;
  }
}

// divideNumbers 함수 호출
console.log(divideNumbers(10, 2)); // 출력: 5
console.log(divideNumbers(5, 0));  // 출력: 에러를 처리합니다: 0으로 나눌 수 없습니다.   (결과: null)
console.log(divideNumbers(8, 4));  // 출력: 2

// 34 continue문 사용하여 짝수만 출력
for (let i = 0; i < 10; i++) {
  if ((i % 2) === 0) {
    continue;
  }
  console.log(i + 1);
}

// 35 break문 사용하여 반복문 중단
for (let i = 0; i < 10; i++) {
  console.log(i);
  break;
}

// 36 비어있는 객체 선언
let a = {};
console.log(typeof (a))

// 37 속성 'name'이 'John'이고 'age'가 30인 객체를 생성하는 코드 작성
let b = { name: 'John', age: 30 };
console.log(b)

// 38 객체의 속성에 접근하는 두 가지 방법 작성
// 1 점 표기법
console.log(b.name);
// 2 괄호 표기법
console.log(b['name'])

// 39 객체에 새로운 속성을 추가하는 코드 작성
b.sex = 'man';
console.log("추가 : " , b);

// 40 객체의 속성을 삭제하는 코드 작성
delete b.sex;
console.log("삭제 : ",b)

// 41 객체의 모든 속성을 순회해서 코드 출력
for(let key in b){
    if(b.hasOwnProperty(key)){
      console.log(key)
    }
}

const keyArray = Object.keys(b);
console.log(keyArray)
console.log(typeof(keyArray))

for (let key of keyArray) {
  console.log(`${key}`);
}

// this 키워드에 대해 설명하고 예를 보여줘
// this 키워드는 JavaScript에서 함수 내부에서 사용되며, 현재 실행 중인 함수가 속한 객체를 가리키는 참조를 제공합니다.
function fun() {
  this.name = "하이";
  return {
    name: "바이",
    speak: function () {
      console.log(this.name);
    },
  };
}

function arrFun() {
  this.name = "하이";
  return {
    name: "바이",
    speak: () => {
      console.log(this.name);
    },
  };
}

const fun1 = new fun();
fun1.speak(); // 바이

const fun2 = new arrFun();
fun2.speak(); // 하이