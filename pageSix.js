// 75 Set 객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성
// 79 이터레이터 인터페이스를 가진 객체를 생성하는 코드 작성
const myArray = [1, 2, 3, 4, 5];

// 배열에 대한 이터레이터 생성
const iterator = myArray[Symbol.iterator]();

// 이터레이터를 사용하여 배열의 요소 순회
let nextItem = iterator.next();
while (!nextItem.done) {
  console.log(nextItem.value);
  nextItem = iterator.next();
  nextItem = iterator.next();
}

// 81 제너레이터 함수를 선언하고 그것을 사용하는 코드를 작성하기
function* getUserInput() {
  const name = yield "Enter your name:";
  const age = yield "Enter your age:";
  yield `Hello, ${name}! You are ${age} years old.`;
}

const inputGenerator = getUserInput();

console.log(inputGenerator.next()); // 출력: { value: "Enter your name:", done: false }
console.log(inputGenerator.next("John")); // 출력: { value: "Enter your age:", done: false }
console.log(inputGenerator.next(30)); // 출력: { value: "Hello, John! You are 30 years old.", done: false }
console.log(inputGenerator.next()); // 출력: { value: undefined, done: true }

function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// 84 피보나치 수열 생성을 위한 제너레이터 객체 생성
const fibonacci = fibonacciGenerator();

// 처음 10개의 피보나치 수 출력
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}

// 85 setTImeout을 사용해 1초 후에 'hello world"출력하는 코드
// setTimeout(() => {
//   console.log('hello world')
// }, 1000)

// 86 Promise  선언
const promiseTest = new Promise((resolve, reject) => {
  setTimeout(() => {
    const test = 0;
    if (typeof (test) === 'number') {
      resolve(`정수형 맞아`);
    } else {
      reject(`정수 아니야`)
    }
  }, 2000)
})

// then, catch 문으로 처리
promiseTest
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error);
  })

// async과 await 사용
async function PT(){
  try{
    const a = await promiseTest;
    console.log(a)
  }catch{
    throw new Error;
  }
}

PT();
  // 레스토랑(콜백 함수)
function kitchen(order, callback) {
  console.log(`주방에서 주문한 ${order}를 요리중...`);
  setTimeout(() => {
    console.log(`${order}가 준비되었습니다!`);
    callback(); // 주문자(메인 함수)에게 전화를 걸어서 준비 완료를 알림
  }, 3000); // 3초 후에 음식이 준비됨
}

// 주문자(메인 함수)
function customer() {
  console.log(" 주문자: 음식 주문을 합니다.");
  kitchen("스테이크", function () {
    console.log("주문자: 감사합니다!");
  });
}

customer();
