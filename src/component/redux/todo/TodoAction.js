import { CREATE_TODO, DELETE_TODO} from "./TodoTypes";

export const createTodoList = (data, id) => {
    return {
        type: CREATE_TODO,
        payload: data,
        id: id
    }
}

// export const editTodoList = (id, data) => {
//     return{
//         type: EDIT_TODO,
//         payload: data,
//         id: id
//     }
// }

export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        id: id
    }
}

// export const LIST_TODOS = () => {
//     return{
//         type: LIST_TODOS
//     }
// }