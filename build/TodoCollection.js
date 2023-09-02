"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
class TodoCollection {
    // TodoCollection 클래스를 인스턴스화 하는 생성자 함수
    // 파라미터: 유저 이름, todoItem을 타입으로 같는 빈 배열
    // TodoItem의 배열을 파라미터로 전달해준다면 TodoItem들은 이 itemMap에 저장
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    // includeComplete -> true: 모든 할일 목록 반환
    // includeComplete -> false: 완료 목록을 제외한 할일 목록 반환
    getTodoItems(includeComplete) {
        // 반환값이 배열이기 때문에, Map에 있는 value들을 배열로 만들어줘야함
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete
        // 1. item의 모든 값을 꺼냄
        // 2. 조건에 맞는 것들만 filter 해서 새로운 배열 생성
        // includeComplete는 모든 할일 목록을 반환한다. true를 쓰면 모든 할일 목록 반환하게 한다.
        // includeComplete이 true가 아니고, !item.complete이 true이면
        // 즉, item.complete이 false이면 완료(complete이 아닌)목록을 제외한 할일 목록을 반환한다.
        );
    }
    // 완료된 목록을 제거하는 메서드
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    // todoitem의 상태를 변경하는 메서드
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollection;
