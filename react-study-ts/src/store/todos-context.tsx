import React, {useState} from 'react';
import Todo from '../models/todo';

// 타입 정의를 복사해서 사용하는 대신 타입은 한 번만 정의하고 정의한 그 값을 그 타입이 필요한 모든 위치에 사용할 것이다. - 타입 별칭 사용
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

// 나중에 컨텍스트 훅을 사용할 때 필요할 것
// 이제 Todo를 더이상 App.tsx에서 관리할 필요가 없어짐.
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

// context를 제공해주는 컴포넌트
// 함수형 컴포넌트 
const TodosContextProvider: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);// 이 state가 Todo 배열을 관리한다. 

    // onAddTodo의 파라미터가 될 함수
    const addTodoHandler = (todoText: string) => {
        // TODO: state를 사용해 배열 관리하기 

        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        })
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    // value에서 에러발생 - contextValue의 형태와 TodosContext의 형태가 다르다.
    // addTodo는 매개변수를 받지 않는다고 정의했는데 실제로는 todoText: string을 받음.
    // 즉 contextValue 객체를 생성할 때 어떤 타입의 데이터를 받을건지 contextValue안에 정의하지 않았기 때문이다. 
    return <TodosContext.Provider value={contextValue}>

    </TodosContext.Provider>
};

export default TodosContextProvider;