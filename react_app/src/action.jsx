// 追加機能のAction を定義
export const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Math.random(),
        text: text,
        complete: false
    },
});

// 完了機能のAction を定義
export const COMPLETED_TODO = "COMPLETED_TODO";

export const completedTodo = (id) => ({
    type: COMPLETED_TODO,
    payload: id
});

// 削除機能のAction を定義
export const DELETED_TODO = "Deleted_TODO";

export const deletedTodo = (id) => ({
    type: DELETED_TODO,
    payload: id
});

// 完了取り消し機能のAction を定義
export const RETURNED_TODO = "RETURNED_TODO";

export const returnedTodo = (id) => ({
    type: RETURNED_TODO,
    payload: id
});
