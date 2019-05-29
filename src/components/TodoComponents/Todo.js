import React, { Component } from 'react';

function TodoTask(props) {   
    const taskClass = i => {return  i}
        return (
        <li
            className={`task ${
                taskClass(props.completed ? "completed":"active")
                }`}
        >
        {props.task}</li>
            
        );
    

}   

class Todo extends React.Component {
    render () {
        const rows = [];
        let lastTask = null;
        this.props.tasks.forEach((task) => {
            if (task.task !== lastTask) {
                rows.push(
                    <TodoTask 
                    tasks={this.props.tasks}
                    task={task.task}
                    key={task.id}
                    completed={task.completed}
                    />
                );
             
            }
            lastTask=task.id;
        });
        return (
            <ul>
                {rows}
            </ul>
        )
    }
}

export default Todo;