export const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Math.random(),
        text: text,
        complete: false,
    },
});

export const COMPLETED_TODO = "COMPLETED_TODO";

export const completedTodo = (id) => ({
    type: COMPLETED_TODO,
    payload: id
});
