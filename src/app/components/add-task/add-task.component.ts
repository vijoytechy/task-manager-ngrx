import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/task/task.actions';
import { Task } from '../../state/task/task.model';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

    taskTitle: string = '';
    showAlert: boolean = false;
    constructor(private store: Store) { }

    onAddTask() {
        if (this.taskTitle.trim() !== '') {
            const newTask: Task = {
                id: Math.floor(Math.random() * 1000),
                title: this.taskTitle,
                completed: false
            };

            this.store.dispatch(addTask({ task: newTask }));
            this.taskTitle = '';
            this.showAlert = true;
        }
    }
}
