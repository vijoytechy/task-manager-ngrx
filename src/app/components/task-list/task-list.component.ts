import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTask, loadTasks, toggleTask } from '../../state/task/task.actions';
import { selectTasks } from '../../state/task/task.selectors';
import { Task } from '../../state/task/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks$ = this.store.select(selectTasks);
    showAlert: boolean = false;
    constructor(private store: Store) { }

    ngOnInit() {
        this.store.dispatch(loadTasks());
    }

    onToggle(taskId: number) {
        this.store.dispatch(toggleTask({ taskId }));
    }
    onDelete(taskId: number) {
        this.store.dispatch(deleteTask({ taskId }));
        this.onShowAlert();
    }

    onShowAlert() {
        this.showAlert = true;
    }
}
