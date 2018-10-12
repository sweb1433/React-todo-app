import React from 'react';
import {AddNewTask} from './addtask';
import {TodoAppList} from './appList'

export class Todo extends React.Component {
    constructor(props){
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);


    }
    updateList(text){
        var updatedTasks = this.state.tasks;
        // updatedTasks.push(text); add to top
        updatedTasks.unshift(text); //add to bottom

        this.setState({
            tasks: updatedTasks
        });
        this.updateLocalStorage(updatedTasks);
    }
    removeTask(text){
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text),1);
        this.setState({
            tasks: updatedTasks
        });
        this.updateLocalStorage(updatedTasks);

    }
    updateLocalStorage(updatedTasks){
        console.log('task Updated')
        localStorage.setItem('storedItem', JSON.stringify(updatedTasks));
    }

    render(){
        return(
            <div>
            <h1>Todo App</h1>
            <AddNewTask updateList={this.updateList}  />
            <TodoAppList tasks = {this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}