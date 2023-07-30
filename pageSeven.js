// 90 Promise.all을 사용해 여러 Promise를 동시에 실행하는 코드를 작성
// 비동기 작업을 수행하는 함수 (Promise를 사용)
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // 비동기 작업 수행 (여기서는 간단히 userId로부터 사용자 데이터를 가져오는 것으로 가정)
//       const user = { id: userId, name: `User${userId}`, email: `user${userId}@example.com` };
//       resolve(user); // 비동기 작업 완료 시 데이터를 resolve
//     }, Math.random() * 2000);
//   });
// }

// // 여러 Promise를 동시에 실행하는 함수
// async function fetchMultipleUsers() {
//   try {
//     const userIds = [1, 2, 3, 4, 5];

//     // Promise.all()을 사용하여 여러 비동기 작업을 동시에 실행
//     const promises = userIds.map(userId => fetchUserData(userId));
//     const users = await Promise.all(promises);

//     console.log("Fetched users:", users);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // 실행
// fetchMultipleUsers();


// 93 Proxy를 사용해 객체 속성 접근하여 제어하기
// const target = {
//   name: 'John',
//   age: 30,
// };

// const handler = {
//   get: function (target, property) {
//     console.log(`Getting ${property}`);
//     return target[property];
//   },
// };

// const proxy = new Proxy(target, handler);

// console.log(proxy)
// console.log(proxy.name); // Proxy를 통해 name 프로퍼티에 접근
// console.log(proxy.age);  // Proxy를 통해 age 프로퍼티에 접근

const target = {
  name: 'John',
  age: 30,
};

const handler = {
  set: function (target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);

proxy.age = 31; // Proxy를 통해 age 프로퍼티에 값을 설정

// 94 Reflect API를 사용해 객체의 속성 조작
const obj = {
  name: "John",
  age: 30,
};

// Reflect.set()를 사용하여 객체의 속성 값을 변경
console.log("Before:", obj); // { name: 'John', age: 30 }

const propertyToSet = "age";
const newValue = 31;

const result = Reflect.set(obj, propertyToSet, newValue);

if (result) {
  console.log("Successfully changed property:", propertyToSet);
} else {
  console.log("Failed to change property:", propertyToSet);
}

console.log("After:", obj); // { name: 'John', age: 31 }
