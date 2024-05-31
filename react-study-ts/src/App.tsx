import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // state를 사용해 이 배열의 상태를 관리해야 함. 
  // 문제발생 - 빈 배열을 넘김으로써 어떤 타입의 배열이 나올지를 예상하지 못함.
  // todos의 타입이 never인 이유임.
  // 이건 이 배열이 항상 비어있어야 한다는 뜻
  // useState는 제네릭 함수이므로 어떤 타입의 배열인지를 알려줄 수 있다. 
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
