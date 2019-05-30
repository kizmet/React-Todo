import React, { Component } from 'react';


class TodoForm extends React.Component {
    render() {
        const inputText = this.props.inputText;
        
        return (
            <form>
                <input 
                value={inputText}
                type="text" 
                placeholder="Add ToDo"
                />
                <input 
                type="button" 
                //value="Add Tasks"
                onClick = {this.value.onClick}
                />
                <input type="button" value="Remove Completed"/>
            </form>
        )
    }
}

export default TodoForm;