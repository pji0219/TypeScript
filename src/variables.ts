var score1 = 0; // 타입스크립트 변수와 상수 선언 방식도 자바스크립트와 같이 var, let, const 키워드를 사용한다.
let score2  = 200;
const defaultSore = 0;

// var
function outer() {

    function inner() {
        var score = 0;
    }

    console.log(score); // var로 선언한 변수는 함수 단위의 scope이기 때문에 선언된 함수 밖에서는 사용할 수 없다.
}

function outer2() {

    if (true) { // var는 함수 단위의 scope이기 때문에 if문 블록에 있는 것은 if문 밖에서 사용 가능하다.
        var score3 = 0;
    }

    console.log(score3);
}

// let
function outer3() {
    if (true) { // let은 블록 scope 이기 때문에 밖에서는 사용할 수 없다.
        let score4 = 0;
    }

    console.log(score4);
}

// 타입 선언

function outer4() {
    if (true) { // 타입스크립트는 변수에 값을 처음에 할당하게 될 경우 타입이 지정 되게 되어 있다.
        let score5 = 0; // 처음에 숫자 타입으로 할당됨
        score5 = 30; //  그래서 같은 숫자 타입은 괜찮지만
        score5 = '30'; // 문자열 타입으로 할당 하면 오류남
    }
}

function outer5() {
    if (true) { 
        let score6 // 변수 선언시 아무 값도 할당하지 않으면 타입이 any 타입이 된다.
        score6 = 30;
        score6 = "30"; // 그래서 숫자, 문자열 타입 아무거나 할당해도 오류가 뜨지 않는다.
    }

    if(true) {
        let score7: number; // 타입을 고정하고 싶으면 이렇게 고정 시킬 수 있다.
        score7 = 10;
        score7 = "10"; // 타입이 숫자로 고정 되어 있기에 문자열을 할당할 수 없다.
    }
}

// const

function outer6() {
    if (true) {
        const score8 = 10; // 상수는 한번 선언하면 바꿀 수 없는 값이기 때문에 선언시에 초기값을 꼭 넣어줘야 한다. 그리고 상수는 어짜피 재할당이 불가능 하기 때문에 타입을 안정해줘도 된다.
    }

    console.log(score8); // let과 마찬가지로 블록 scope이기 때문에 if문 밖에서 사용할 수 없다.
}

// var는 함수 단위 scope
// let, const는 블록 단위 scope 이다.
// var와 let은 재할당이 가능하고 const는 불가능 그리고 const는 초기값을 꼭 넣어줘야한다.
// 타입스크립트에서는 var, let, const 모두 초기에 선언된 값의 타입으로 타입이 설정됨
// var와 let에 아무 값도 설정하지 않고 선언하면 any타입이 되어서 아무 타입의 값을 할당 시킬 수 있다.
// 이때에 타입을 주어서 타입을 고정 시킬 수 있다.

