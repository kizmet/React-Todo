import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searching: false
    };
  }

  componentDidMount() {
    let savedData = localStorage.getItem("items");
    try {
      savedData = JSON.parse(savedData);
      this.setState(Object.assign({}, this.state.items, savedData));
      
    } catch (err) {
      console.log("error");
    }
  }

  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state));
  }

  handleSubmit = item => {
    const newItem = {
      text: item,
      completed: false,
      id: Date.now()
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  handleDoubleClick = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  handleClearAll = () => {
    this.setState({ items: [] });
  };

  handleClearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    });
  };

  handleComplete = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  handleSearch = e => {
    e.length > 1 ?
    this.setState({
      searching: true,
      filtered: this.state.items.filter(item => item.text.includes(e))
    })
    : this.setState({
      searching: false
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm handleSearch={this.handleSearch} />
        <div>
          <TodoList
            items={
              this.state.searching ? this.state.filtered : this.state.items
            }
            handleComplete={this.handleComplete}
            handleDoubleClick={this.handleDoubleClick}
          />
          <div>
            <TodoForm
              onSubmit={this.handleSubmit}
              handleClear={this.handleClear}
              handleClearCompleted={this.handleClearCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
