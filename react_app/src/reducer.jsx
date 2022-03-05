import { ADD_TODO, COMPLETED_TODO, DELETED_TODO } from "./action";

const initialState = {
    todos: []
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
        case DELETED_TODO:
            return {
                todos: state.todos.filter((todos) => todos.id !== action.payload),
            }
        default:
            return state
    }
};
