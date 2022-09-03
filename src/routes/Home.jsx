import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";



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
            <ul>{JSON.stringify(todos)}</ul>
        </>
    )
}

function mapStateToProps(state) {
    return {todos : state};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (text) => dispatch(actionCreator.addTodo(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
