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
