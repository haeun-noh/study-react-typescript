import {useRef} from 'react';// 레퍼런스 생성 가능

// 사용자에게 입력창을 제공하고 사용자가 입력한 Todo의 내용을 가져올 것
const NewTodo: React.FC<{}> = () => {
    // useRef만으로는 이 레퍼런스가 input에 연결될지를 모른다. 
    // input에 넣을수도, button에 넣을수도 있게 된다.
    // 그래서 이 레퍼런스에 저장될 데이터가 어떤 타입인지를 밝혀야 한다.
    // useRef 자체가 제네릭 타입으로 정의되어 있으므로 제네릭을 사용할 것이다.

    // 또한 기본값을 직접 설정하지 않으면 에러가 난다. 
    // 이 레퍼런스에 다른 요소가 할당되어 있을 수 있기 때문
    const todoTextInput = useRef<HTMLInputElement>(null);

    // 폼 제출 함수
    const submitHandler = (event: React.FormEvent) => {// onSubmit 이벤트를 수신하면 자동적으로 받게 됨
        event.preventDefault();

        // 사용자가 입력한 값 가져오기 - Ref사용
        // ? - 레퍼런스에 아직 값이 설정되지 않았을 수도 있기 때문에 생긴다.
        // ? - 타입스크립트에게 '일단 값에 접근해보고 접근이 가능하다면 입력된 값을 가져와 enteredText를 저장해'
        // enteredText의 타입을 보면 string | undefined인데 이는 enteredText가 실제 value를 가져올 수 있는지 반드시 알아야 할 필요는 없다는 뜻.

        // 만약 실제 레퍼런스가 요소와 연결돼있음을 확신한다면 ! 를 사용할 수 있다. 
        // ! - 이 값이 null이 될 수 있다는 것은 알지만 이 시점에서는 절대 null이 아님을 알려준다. 
        // 그래서 null이 아님을 100% 확신할 때만 사용할 것 
        // enteredText의 타입은 string만이 남게 된다. 
        const enteredText = todoTextInput.current!.value;// 실제 값이 들어있다 
        if ( enteredText.trim().length === 0 ) {
            // throw an error 
            return;
        }

        
    }

    return (
        // 만약 form의 onSubmit에 할당된 함수의 event의 타입이 React.FormEvent가 아니라면 에러발생
        <form onSubmit={submitHandler}> 
            <label htmlFor="text">Todo text</label>{/* htmlFor로 label과 input을 연결 */}
            <input type="text" id="text" ref={todoTextInput}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;