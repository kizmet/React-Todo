import React from 'react';
import { render } from 'react-dom';
import App from './App';

const TASKS = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: true
    }
  ];
render(<App tasks={TASKS} />, document.getElementById('root'));

