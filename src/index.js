// import _ from 'lodash';
import './style.css';
import Todos from './todo';
import addTasks from './appendTodo';

import todoInput from './postTodo';

document.getElementById('task-input').addEventListener('keypress', todoInput,false);

window.onload = addTasks(JSON.parse(localStorage.getItem('todos')));