"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 사용자 입력을 받는 곳
// inquirer 기본 모듈 -> 에러 발생
// @types/inquirer -> 타입스크립트용 inquirer 라이브러리
const inquirer_1 = __importDefault(require("inquirer"));
const TodoCollection_1 = __importDefault(require("../service/TodoCollection"));
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
const data_1 = require("../data");
const Commands_1 = require("../model/Commands");
class TodoConsole {
    constructor() {
        this.showCompleted = true;
        const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
        this.todoCollection = new TodoCollection_1.default('My Todo List', sampleTodos);
    }
    displayTodoList() {
        console.log(`=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`);
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach((item) => item.printDetails());
    }
    promptUser() {
        console.clear();
        this.displayTodoList();
        inquirer_1.default
            .prompt({
            type: 'list',
            name: 'command',
            message: 'Choose option',
            choices: Object.values(Commands_1.Commands),
        })
            .then((answer) => {
            switch (answer["command"]) {
                case Commands_1.Commands.Toggle:
                    this.showCompleted = !this.showCompleted;
                    this.promptUser();
                    break;
            }
        });
    }
}
exports.default = TodoConsole;
