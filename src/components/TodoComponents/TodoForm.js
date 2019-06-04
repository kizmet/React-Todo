import React, { Component } from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(e) {
        this.props.onChange(e.target.value);
    }
    handleOnSubmit(e) {
        this.props.onSubmit(e)
        e.preventDefault();

    }
    render() {
        const text = this.props.text;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Add Task
                <input
                        value={text}
                        id='submit-botton'
                        type='text'
                        placeholder="Add ToDo"
                        onChange={this.handleOnChange}

                    />
                </label>
                <input type="submit" />

            </form>
        )
    }
}

export default TodoForm;