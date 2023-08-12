import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: any }>());
export const toggleTask = createAction('[Task] Toggle Task', props<{ taskId: number }>());
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());



export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: number }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ taskId: number }>());
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>());