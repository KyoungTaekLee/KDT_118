// 61 static 키워드가 무엇인지 설명하고 예를 들기
//  주로 정적 변수와 정적 함수의 개념으로 자주 사용됩니다. 

// 62 get, set 접근자
// Getter와 Setter 메서드를 사용함으로써 멤버 변수에 직접 접근하지 않고도 클래스의 속성을 제어할 수 있습니다. 이를 통해 클래스의 내부 구현을 외부에 노출하지 않으면서도 데이터를 안전하게 다룰 수 있습니다. 또한 이러한 접근자 메서드들은 필요에 따라 값을 조작하거나 반환하는 로직을 추가로 구현할 수 있기 때문에 유연성을 제공합니다.

// 63 클래스의 인스턴스를 생성하는 코드 작성

class hellohi {

  constructor(name, age) {
    this.n = name;
    this.a = age;
  }

  set(name) {
    this.n = name;
  }

  get() {
    // console.log(this.n);
    return this.n;
  }
}

const a = new hellohi('taek', 20);

const b = a.get();

console.log(b)

//  모듈의 기본 사용 목적과 장점을 설명

// 71 Math객체 사용하여 원주율 계산
const pi = Math.PI;
console.log(pi)

// 72  Date객체를 사용해 현재 시간 출력
const date = new Date();
console.log(date.toLocaleString())

const jsonobject = `{
  "name" : "taek",
  "age" : 26,
  "skill" : "javaScript"
}`

const JsonGo = JSON.parse(jsonobject);
console.log(JsonGo);