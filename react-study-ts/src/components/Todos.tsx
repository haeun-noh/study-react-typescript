import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

// React.FC: 리액트 패키지에 정의된 타입
// 이를 통해 이 함수가 함수형 컴포넌트로 동작한다는 걸 명확히 한다. 
// React.FC는 제네릭 타입이다. 

// <{}> 안에 새로 만들 props를 정의한다.
// 이렇게 추가함으로써 FC타입 내부의 기능을 밖으로 꺼낸 것이다.

// FC타입의 기능: 여기에 어떤 객체 타입을 정의하든 객체의 기본타입, chilren 프로퍼티와 합쳐주는 기능
const Todos: React.FC<{ items: Todo[] }> = (props) => {// 클래스 이름은 타입으로 사용가능 
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />// key는 TodoItem에서 받지 않아도 FC 기본타입이 key를 컴포넌트에 추가해 사용할 수 있게 된다. 
            ))}
        </ul>
    );
}

export default Todos;// export를 통해 파일 밖에서도 접근 가능하도록 설정