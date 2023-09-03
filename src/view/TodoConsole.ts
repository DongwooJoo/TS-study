// 사용자 입력을 받는 곳
// inquirer 기본 모듈 -> 에러 발생
// @types/inquirer -> 타입스크립트용 inquirer 라이브러리
import inquirer from 'inquirer';
import TodoCollection from '../service/TodoCollection';
import TodoItem from '../model/TodoItem';
import { data } from '../data';
import { Commands } from '../model/Commands';
    
class TodoConsole {
    private todoCollection: TodoCollection;

    private showCompleted: boolean;

    constructor() {
        this.showCompleted = true;
        const sampleTodos: TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task, item.complete)
        );

        this.todoCollection = new TodoCollection('My Todo List', sampleTodos);
    }

    displayTodoList(): void{
        console.log(
            `=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`
        )
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach((item) => item.printDetails());
    }

    promptUser(): void{
        console.clear();
        this.displayTodoList();

        inquirer
            .prompt({
            type: 'list',
            name: 'command',
            message: 'Choose option',
            choices: Object.values(Commands),
            })
            .then((answer) => {
                switch (answer["command"]) {
                    case Commands.Toggle:
                        this.showCompleted = !this.showCompleted;
                        this.promptUser();
                        break;
                    case Commands.Add:
                        this.promptAdd();
                        break;
                }
        });
    }

    promptAdd(): void {
        console.clear();
        inquirer.prompt({
            type: "input",
            name: "add",
            message: "Enter task :"
        }).then((answers) => {
            if (answers["add"] !== "") {
                this.todoCollection.addTodo(answers["add"]);
            }
            this.promptUser();
        })
    }
}

export default TodoConsole;