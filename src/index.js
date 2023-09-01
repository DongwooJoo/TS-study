// To-do list 프로젝트 설명
// 1. TodoItem class 정의
// 1-1. js로 클래스 정의
// 1-2. ts로 클래스 정의

// todoitem의 프로퍼티
// 1. id: task의 id
// 2. task: task 이름
// 3. complete: 완료 상태
// 4. printDetails: 출력

class TodoItem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`
        );
    } 
}

const data = [
    { id: 1, task: "장보기", complete: true },
    { id: 2, task: "TS 학습하기", complete: false }
]

let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);
console.log(todoItem);

for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}