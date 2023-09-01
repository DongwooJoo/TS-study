"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // 프로퍼티 타입 정의
    // 접근 지정자를 부여할 수 있음
    // private, public, protected
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
        // 초기화
    }
    // class에 포함되기 때문에, 메서드
    // parameter 없기 때문에, return 값의 타입을 void로 지정
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`);
    }
}
// 외부로 export
exports.default = TodoItem;
