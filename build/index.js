"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
// 타입 추론: 선언문과 초기화를 진행했기 때문에, 이 내용을 보고, data라는 변수의 타입이 지정됨
const data = [
    { id: 1, task: '장보기', complete: true },
    { id: 2, task: 'TS 학습하기', complete: false },
];
console.log("My Todo List");
// 타입 추론: i를 선언과 동시에 초기화 -> 타입을 추론 -> number 타입을 지정해주는 것과 똑같음
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}
// primitive types(원시 타입)
let name = 'Kim';
let age = 20;
let hasName = true;
let nullValue = null;
let nothing = undefined;
// built in objects
let now = new Date();
// Array
let colors = ['red', 'yellow', 'blue'];
let numbers = [1, 2, 3, 4, 5];
class Person {
}
let person = new Person();
let point = {
    x: 10,
    y: 20,
};
