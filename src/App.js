import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };

    this.handleText = this.handleText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let savedData = localStorage.getItem('items');
    try {
      savedData = JSON.parse(savedData);
      this.setState(Object.assign({}, this.state, savedData));
    } catch (err) {
      console.log('error');
    }
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state));
  }  

  handleText(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      completed: false,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleChange(text) {
    this.setState(state => ({
      text: text
    }));
  }

  handleRemove(e) {}

  render() {
    const {text} = this.state.text;
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList
            items={this.state.items}
          />
          <div>
            <TodoForm
              text={text}
              onChange={this.handleChange}
              onSubmit={this.handleText}


            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;