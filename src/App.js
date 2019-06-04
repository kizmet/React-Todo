import React from 'react';
//import TodoList from './components/TodoComponents/TodoList';
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      inputText: "",
      id:Date.now()
    }
  }
  addToInput(input) {
    this.setState({ input:  + input });
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <Todo 
            tasks={this.props.tasks}
            completed={this.state.completed}
           />
          <TodoForm 
          completed={this.state.completed}
          inputText={this.state.input}
          onClick={() => this.addToInput(inputText)}
          
          />
        </div>
      </div>
    );
  }
}





export default App;