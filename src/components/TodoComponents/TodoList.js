import React, { Component } from 'react';
import Todo from "./Todo";


const TodoList = (props) => {
      const items=props.items;
      const todos = items.map((item) => (
        <Todo key={item.id.toString()}
          text={item.text}
          status={item.completed.toString()}
           />
      ))

    return (
      <ul>
        {todos}
      </ul>
    )
  
}

export default TodoList;
