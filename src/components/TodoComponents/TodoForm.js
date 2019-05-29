import React, { Component } from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Add ToDo"></input>
                <input type="button" value="Add Tasks"/>
                <input type="button" value="Remove Completed"/>
            </form>
        )
    }
}

export default TodoForm;