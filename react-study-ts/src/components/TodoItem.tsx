const TodoItem: React.FC<{text: string}> = (props) => {// props프로퍼티는 언제나 객체 타입
    return (
        <li>{props.text}</li>
    );
}

export default TodoItem;