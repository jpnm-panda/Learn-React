import { ADD_TODO, COMPLETED_TODO } from "./action";

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
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
        case COMPLETED_TODO:
            return {
                todos: state.todos.map((todos) => {
                    if (todos.id !== action.payload) return todos;
                    return {
                        ...todos,
                        complete: true
                    };
                }),
            }
        default:
            return state
    }
};
