import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from './task.service';
import * as TaskActions from './task.actions';


@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions, // Make sure this import is correct
    private taskService: TaskService
  ) { }

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks })),
          catchError(error => of(TaskActions.loadTasksFailure({ error })))
        )
      )
    )
  );

  // Other effects...

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap(action =>
        this.taskService.deleteTask(action.taskId).pipe(
          map(() => TaskActions.deleteTaskSuccess({ taskId: action.taskId })),
          catchError(error => of(TaskActions.deleteTaskFailure({ error })))
        )
      )
    )
  );
}
