import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


const Detail = (props) => {
    const paramId = useParams().id;
    const {id, text} = props.todos.find(todo => todo.id === parseInt(paramId));
    const createdDate = new Date(id);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (<>
        <h1>{text}</h1>
        <h3>Created at : {createdDate.toLocaleDateString('ko-KR', options)}</h3>
    </>);
}

function mapStateToProps(state){ 
    return {todos : state}
}

export default connect(mapStateToProps)(Detail);
