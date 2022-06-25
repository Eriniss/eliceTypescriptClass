// * 타입스크립트(ts) 기본


// 타입스크립트 개요
// 자바스크립트의 한계를 보완하기 위해 탄생


// 타입스크립트를 쓰는 이유
// 동적 타입을 정적으로 선언할 수 있다.
// 타입 유추를 통한 타입 제어가 가능하다.
// 컴파일 시점에 오류를 포착할 수 있다.
// js에서 찾을 수 없는 추가 코드 기능을 제공한다.

{
  // ts
  let a: number = 1;
  a = 3;
  a = 'b'; // Error
}

{
  // ts
  const sum = (a: number, b:number) => { // 각각의 변수에 타입 지정
    return a + b; 
  }

  console.log(1, 2); // 3
}


// * ts의 기본 type


// ts의 기본 type
// ts는 js 코드에 변수나 함수 등 type을 정의할 수 있다.
// type을 나타내기 위해서 타입표기(type annotation)를 사용한다.
// ts의 type은 기본 자료형, 참조 자료형, 추가 제공 자료형으로 나뉜다.

// 기본 자료형
// object와 reference 형태가 아닌 실제 값을 저장하는 자료형
// string, boolean, number, null, undefined, symbol(ES6)

// 참조 자료형
// 
