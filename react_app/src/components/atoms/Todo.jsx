import React from "react";

// Todo コンポーネントの定義
export const Todo = (props) => {
    // props
    const { todoText, textTitle, todos, onChange, onClick, disabled } = props;
    return (
        <div>
            <p className="title">{ textTitle }</p>
            <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo} className="list-row">
                        <p>{todo}</p>
                        <button onClick={() => onClickComplete(index)}>完了</button>
                        <button onClick={() => onClickDelete(index)}>削除</button>
                    </li>
                  );
             })}
             </ul>
        </div>
    );
};
