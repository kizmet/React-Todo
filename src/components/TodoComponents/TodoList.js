import React, { Component } from "react";
import Todo from "./Todo";

const TodoList = props =>{
  
    return (
      <ul>
        {console.log(props.items) || props.items.map(item => 
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            handleComplete={props.handleComplete}
            handleDoubleClick={props.handleDoubleClick}
            status={item.completed}
          >
          
          </Todo>
        )}
      </ul>
    )
  
};

export default TodoList;
