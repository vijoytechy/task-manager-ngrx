import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor() { }
    public tasks: Task[] = [

    ];

    getTasks(): Observable<Task[]> {
        return of(this.tasks); // Simulate an API call
    }


    deleteTask(taskId: number): Observable<void> {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1); // Using splice to remove the task
        }
        return of(undefined);
    }
}
