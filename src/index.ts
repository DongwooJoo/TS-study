import TodoItem from "./TodoItem"

// 타입 추론: 선언문과 초기화를 진행했기 때문에, 이 내용을 보고, data라는 변수의 타입이 지정됨
const data = [
  { id: 1, task: '장보기', complete: true },
  { id: 2, task: 'TS 학습하기', complete: false },
];

console.log("My Todo List");

// 타입 추론: i를 선언과 동시에 초기화 -> 타입을 추론 -> number 타입을 지정해주는 것과 똑같음
for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}

// primitive types(원시 타입)
let name: string = 'Kim';
let age: number = 20;
let hasName: boolean = true;

let nullValue: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'yellow', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5];

class Person {
}

let person: Person = new Person();

let point: { x: number; y: number } = {
    x: 10,
    y: 20, 
}