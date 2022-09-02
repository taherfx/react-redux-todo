import { CREATE_TODO, DELETE_TODO } from "./TodoTypes";

const initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    // const [id, payload] = action
    switch(action.type){
        case CREATE_TODO:
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id: action.id,
                        data: action.payload
                    }
                ] 
            }
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter(x => {
                    return x.id !== action.id;
                  })
            }        
        default: return state
    }
}