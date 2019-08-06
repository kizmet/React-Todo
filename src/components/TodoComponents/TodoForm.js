import React, { Component } from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({text:''})
    }

    handleClearCompleted = e => {
        e.preventDefault();
        this.props.handleClearCompleted()
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleOnSubmit}>
                <label>Add Task
                <input
                        value={this.state.text}
                        name='text'
                        id='submit-botton'
                        type='text'
                        placeholder="Add ToDo"
                        onChange={this.handleOnChange}

                    />
                </label>
                <input type="submit" />

            </form>
            <button type="submit" onClick={this.props.handleClear}>Clear All Todos</button>
            <button type="submit" onClick={this.props.handleClearCompleted}>Clear All Completed</button>
            </>
        )
    }
}

export default TodoForm;