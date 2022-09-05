import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";


const Todo = ({text,id,  deleteTodo}) => {

    return (
    <li>
        <Link to={`/${id}`}>
            {text} <button  onClick={deleteTodo}>DEL</button>
        </Link>
    </li>
    )
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteTodo : () => dispatch(actionCreator.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
