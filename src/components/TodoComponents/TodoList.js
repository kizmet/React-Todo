import React, { Component } from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm";



class TodoList extends React.Component {
    render() {
        return (
            <div>
                <Todo tasks={this.props.tasks}/>
                <TodoForm />
            </div>
        )
    }
}

export default TodoList;

