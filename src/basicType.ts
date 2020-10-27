// 기본 타입과  타입 어노테이션
// 타입스크립트는 자바스크립트의 기본타입들은 다 지원하고 그 외 몇 가지의 다른 타입들을 지원한다.

let numValue: number; // es5 이전의 원시적인 5개의 타입들
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined; // undefined 와 null 타입은 최하위 타입이라서 다른 모든 타입들에 할당 가능
let nullValue: null; // 여기까지
let objValue: object; // 레퍼런스 타입의 오브젝트
let symbolValue: symbol; // es6에 추가된 원시 타입인 심볼
// 총 7개 지원

numValue = 1; // 숫자형 타입을 지정 했기에 숫자만 할당 가능


stringValue = "hello"; // 문자열 타입을 지정 했기에 문자만 할당 가능
stringValue = 'hello';
stringValue = ` 
hello
${1+1} 
hi 
`; // ` 사용시 개행 가능
// 템플릿 리터럴 사용시 안의 표현식이 계산이 예와 같이 1+1 연산을 하는 것이면 연산 후 결과가 문자열로 할당 됨


booleanValue = true; // 블리언 타입은 true 또는 false 할당 가능


undefinedValue = undefined; // undefined 와 null 타입은 최하위 타입이라서 다른 모든 타입들에 할당 가능
nullValue = null;


objValue = { name: 'park'}; // 객체 할당 가능
objValue = new String(33); // 형 변환을 시킬 때 객체에서 변환 되는 것으로 인식해서 오류가 나지 않는다.


symbolValue = Symbol(); // 심볼타입은 심볼이라는 함수를 통해서만 생성할 수 있다.


let nameList: string[]; // 배열에 대한 타입 설정
nameList = ['1', '2'];
nameList.push('3'); // 배열의 내장 함수를 쓸 때도 문자 타입만 사용할 수 있다.


let user: { name: string, score: number }; // 객체의 타입을 설정할 때 이렇게 인라인으로 설정할 수 있다.
user = { // name과 score를 키로 갖는 객체만 만들 수 있다.
    name: 'park',
    score: 100
}


let tuple2: [number, string]; // 튜플은 배열에 할당될 타입과 갯수를 설정, 즉 숫자형1개, 문자열 1개가 총2개가 할당 될 수 있다.
let tuple3: [number, number, number];
tuple2 = [1, 'hello'];
tuple3 = [1, 2, 3];