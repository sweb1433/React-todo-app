import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './component/main'

var tasksList = ["Task 1", "Task 2", "Task 3"]
var tasks = localStorage.getItem('storedItem');
if(tasks){
    tasksList = JSON.parse(tasks);
}
ReactDOM.render(
    // <h1>hello world!!!</h1>,
        <Todo tasks = {tasksList}/>,
    document.getElementById('todo')
);