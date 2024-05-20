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

var person: Person;
person = {
	name: 'Max',
	age: 32
};

// var person: any;

// person = {
// 	// isEmployee: true;// 오류 발생
// };

// 배열로 만들려면 뒤에 []를 붙여야 함.
let people: Person[];


// 타입 추론
let course = 'React - The Complete Guide';// 강좌 제목 저장

// course = 12341;// 오류 발생 => 타입 추론이 사용되었기 때문!


// 유니온 타입
let courses: string | number | boolean = 'hihi';

courses = 12341;// 오류가 발생하지 않음!


// 타입 별칭
type Person = {
	name: string;
	age: number;
}