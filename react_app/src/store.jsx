import { createStore } from "redux";

// Todo の状態を保存するstore を作る

const initialState = {
    todos: [
        {
            id: 1,
            text: "hoge",
            complete: false
        },
        {
            id: 2,
            text: "hige",
            complete: true
        }
    ]
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = createStore(reducer);

export default store;
