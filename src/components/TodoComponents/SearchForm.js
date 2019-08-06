import React, { Component } from 'react';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleSearch = e => {
        this.props.handleSearch(e.target.value)
    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <label>Search Todos
                <input
                        value={this.props.search}
                        name='text'
                        id='submit-botton'
                        type='text'
                        placeholder="Search ToDos"
                        onChange={this.handleSearch}

                    />
                </label>

            </form>
            
        )
    }
}

export default SearchForm;