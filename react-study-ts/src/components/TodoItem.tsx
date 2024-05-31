import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void }> = (props) => {// props프로퍼티는 언제나 객체 타입
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    );
}

export default TodoItem;