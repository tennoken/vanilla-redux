import {createStore} from 'redux';


const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


const addTodo = (text) => {
  return {
    type : ADD_TODO,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type : DELETE_TODO,
    id
  }
}


const reducer = (state = [], action) => {
  console.log(action);
  switch(action.type){
    case ADD_TODO:
      return [...state, {text : action.text, id : Date.now()}];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

const displayTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = "Delete";
    btn.addEventListener('click', (e) => {
      
      dispatchDeleteTodo(e);
    })
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
}

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
}


const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.subscribe(displayTodos);




const onSubmit = (e) => {
  e.preventDefault();
  console.log(input.value);
  const todos = input.value;
  input.value = "";
  dispatchAddTodo(todos);
}


form.addEventListener("submit", onSubmit);




