import { ADD_TODO } from "./action";

const initialState = {
    todos: [
        {
            id: Math.random(),
            text: "hoge",
            complete: true
        },
        {
            id: Math.random(),
            text: "hige",
            complete: false
        }
    ]
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload],
            };
        default:
            return state
    }
};
