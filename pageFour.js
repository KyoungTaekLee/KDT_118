// 43 비어있는 배열 선언하는 코드 작성
let array = [];
console.log(typeof (array));
console.log(array)

// 44 1부터 5까지의 숫자를 원소로 갖는 배열을 선언하는 코드를 작성해보기
for (let i = 0; i < 5; i++) {
  array.push(i + 1);
}

console.log(array)

// 45 배열에 새로운 원소를 추가하는 코드를 작성
array.push()

// 46 배열에서 특정 원소를 제거하는 코드
const numbers = ['hi', 2, 3, 4, 5];

const filterArray = numbers.filter((num) => num > 3);
console.log(filterArray);

// 47 배열의 길이를 확인하기
console.log(filterArray.length);

// 48 배열의 모든 원소를 순회하며 출력하는 코드 작성
for (let i of numbers) {
  console.log(i)
}

// 49 배열의 특정 원소의 인덱스를 찾는 코드 작성
console.log(numbers.indexOf('hi'));

// 50 인자 없이 'hello, world'를 출력하는 함수를 선언하는 코드 작성
const helloworld = () => {
  console.log('hello, world');
}

helloworld();

// 51 두 수를 더하는 함수를 선언하는 코드
const sum = (a, b) => {
  return a + b;
}

console.log(sum(3, 4));

// 52 함수 표현식과 함수 선언식의 차이점
// 노션에 정리

// 53 화살표 함수를 사용해 두 수를 곱하는 함수를 선언하는 코드 작성
const multiply = (x, y) => {
  return x * y;
}

console.log(multiply(5, 4))

// 54 콜백함수를 사용하는 코드 작성

const call = (name) => {
  console.log(`저기요${name}`);
}

const phone = (callback) => {
  console.log('나 먼저')
  setTimeout(() => {
    console.log('나 먼저2')
    callback('test');
  }, 2000)
}

phone(call);

// 55 클로저에 대한 설명하고 예를 들어보세요
// 노션에 정리

// 56 함수에 기본 값을 설정하는 코드를 작성
// 노션에 정리

// 57 비어있는 클래스를 선언하기

class introduce{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  hello(){
    console.log(`hello, my name is ${this.name}`)
  }
}

const test = new introduce('taek', 26);
test.hello();