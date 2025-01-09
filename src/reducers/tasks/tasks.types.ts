import {
  CreateTaskData,
  TaskEntity,
  UpdateTaskData
} from '../../types/task.types';

type TasksStatus = 'idle' | 'received' | 'loading';

export interface TasksState {
  tasks: TaskEntity[];
  status: TasksStatus;
}

export enum TasksActionsTypes {
  SET_TASKS = 'SET_TASKS',
  ADD_TASK = 'ADD_TASK',
  EDIT_TASK = 'EDIT_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_DONE_TASKS = 'DELETE_DONE_TASKS',
  SET_STATUS = 'SET_STATUS'
}

export type SetTasksActionType = {
  type: TasksActionsTypes.SET_TASKS;
  payload: {
    tasks: TaskEntity[];
  };
};

export type AddTaskActionType = {
  type: TasksActionsTypes.ADD_TASK;
  payload: {
    taskData: CreateTaskData;
  };
};

export type UpdateTaskActionType = {
  type: TasksActionsTypes.EDIT_TASK;
  payload: {
    taskId: number;
    taskData: UpdateTaskData;
  };
};

export type DeleteTaskActionType = {
  type: TasksActionsTypes.DELETE_TASK;
  payload: {
    taskId: number;
  };
};

export type DeleteDoneTasksActionType = {
  type: TasksActionsTypes.DELETE_DONE_TASKS;
};

export type SetStatusActionType = {
  type: TasksActionsTypes.SET_STATUS;
  payload: {
    status: TasksStatus;
  };
};

export type TasksActions =
  | SetTasksActionType
  | AddTaskActionType
  | UpdateTaskActionType
  | DeleteTaskActionType
  | DeleteDoneTasksActionType
  | SetStatusActionType;
