import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {

  // 이제 컨텍스트 훅을 사용해서 프로퍼티를 여기서 전달해줄 필요가 사라짐 
  // 컴포넌트에서 컨텍스트를 사용할 수 있기 때문 
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
