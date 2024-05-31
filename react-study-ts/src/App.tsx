import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // state를 사용해 이 배열의 상태를 관리해야 함. 
  const todos = [// 문자열 배열이 아닌 Todo 객체 배열
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];
  // 코드에 이상이 없고 구조가 명확함을 알 수 있다. 

  // onAddTodo의 파라미터가 될 함수
  const addTodoHandler = (todoText: string) => {
    // TODO: state를 사용해 배열 관리하기 
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/> 
      <Todos items={todos}/>
    </div>
  );
}

export default App;
