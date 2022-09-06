
import { configureStore, createSlice } from "@reduxjs/toolkit";



const todos = createSlice({
    name : 'todosReducers',
    initialState : [],
    reducers : {
        add : (state, action) => {
            state.push({text : action.payload , id : Date.now()});
        },
        remove : (state,action) => state.filter(todo => action.payload !== todo.id)
    }
});

const store = configureStore({ reducer : todos.reducer});

export const { add , remove } = todos.actions;

export default store;
