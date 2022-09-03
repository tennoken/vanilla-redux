import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";


const addTodo = (text) => {
    return {
    type : ADD,
    text
    }
}

const deleteTodo = (id) => {
    return {
    type : ADD,
    id
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD : 
            return [...state, {text : action.text , id : Date.now()}]
        case DELETE :
            return state.filter(todo => action.id !== todo.id);
        default:
            return state;
    }
}

const store = createStore(reducer);


export const actionCreator = {
    addTodo,
    deleteTodo
}

export default store;
