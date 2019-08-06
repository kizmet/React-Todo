import React, { Component } from 'react';
//is a component that takes in the `todo` data and displays the task to the screen.
import './Todo.css'

class Todo extends Component {

    handleComplete = e => {
        this.props.handleComplete(this.props.id)
    }

    handleDoubleClick = e => {
        this.props.handleDoubleClick(this.props.id)
    }
    render() {
            return (
                <li className={`item ${this.props.status ? 'completed': 'open'}`} onClick={this.handleComplete} onDoubleClick={this.handleDoubleClick}>
                    {this.props.text}
                    </li>
            )
        }
}

export default Todo;