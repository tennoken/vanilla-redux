import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {remove } from "../store";


const Todo = ({text,id,  deleteTodo}) => {

    return (
    <li>
        <Link to={`/${id}`}>{text}</Link>
        <button  onClick={deleteTodo}>DEL</button>
    </li>
    )
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteTodo : () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
