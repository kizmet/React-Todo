import React, { Component } from 'react';
//is a component that takes in the `todo` data and displays the task to the screen.
import TodoList from './TodoList'; 

class Todo extends Component  {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <li className={`${this.props.status}`}>
                {this.props.text}
                <button>Remove</button>
                </li>
        )
    }
}

export default Todo;