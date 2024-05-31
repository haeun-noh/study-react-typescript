import React, { useContext } from 'react';

import TodoItem from './TodoItem';
// Provider가 아닌 Context를 import함. 그래서 여기에 해당 context를 활용할 수 있는 것.
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

// todosCtx 덕분에 프로퍼티에 대한 타입 정의도 삭제할 수 있다. props가 사용되지 않기 때문이다. 대신 컨텍스트를 사용한다. 
const Todos: React.FC = () => {

    // 해당 값의 타입은 자동적으로 TodosContextObj 타입이 지정됨
    // props인수대신 사용 
    const todosCtx = useContext(TodosContext);// todosCtx에 context를 받아 접근 가능

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;