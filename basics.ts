/**
Primitives: number, string, boolean
More complex types: arrays, objects
Funtion types, parameters
 */

let age: number; // 변수 선언

age = 12;
age = 12.1; // 실수도 포함

let userName: string; // 소문자로 시작한다.

let isInstructor: boolean;
isInstructor = true;


// let hobbies: null;
// hobbies = 12;// 오류 발생

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

var person: {
	name: string;
	age: number;
}
person = {
	name: 'Max',
	age: 32
};

// var person: any;

// person = {
// 	// isEmployee: true;// 오류 발생
// };

// 배열로 만들려면 뒤에 []를 붙여야 함.
let people: {
	name: string;
	age: number;
}[];