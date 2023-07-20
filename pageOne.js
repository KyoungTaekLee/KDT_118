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

// 7
// undefined은 변수를 선언하고 값을 할당하지 않은 상태, null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 즉, undefined는 자료형이 없는 상태이다.
// 따라서 typeof를 통해 자료형을 확인해보면 null은 object로, undefined는 undefined가 출력되는 것을 확인할 수 있다.

// 8
