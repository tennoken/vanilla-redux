import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { add } from "../store";



const Home = ({todos, addTodo}) => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
        addTodo(text);
    }

    return (
        <>
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>{todos.map(todo => <Todo key={todo.id} {...todo}/>)}</ul>
        </>
    )
}

function mapStateToProps(state) {
    return {todos : state};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (text) => dispatch(add(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
