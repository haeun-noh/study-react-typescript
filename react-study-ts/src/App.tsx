import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [// 문자열 배열이 아닌 Todo 객체 배열
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];
  // 코드에 이상이 없고 구조가 명확함을 알 수 있다. 

  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
