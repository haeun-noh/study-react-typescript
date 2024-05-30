// Todo의 형태 정의
// interface or type or class

// 값이 할당되는 부분이 없다면 에러발생 == 인스턴스화가 되지 않는다
class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();// Todo를 만들면 id는 자동생성됨.
    }
}

export default Todo;