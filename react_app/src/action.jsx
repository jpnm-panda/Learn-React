export const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Math.random(),
        text: text,
        complete: false,
    },
});
