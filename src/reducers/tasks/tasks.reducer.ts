import { Reducer } from 'react';
import { TasksActions, TasksActionsTypes, TasksState } from './tasks.types';
import { LS_TASKS_ENTITIES_KEY } from './tasks.constants';
import { TaskEntity } from '../../types/task.types';

export const INITIAL_TASKS_STATE: TasksState = {
  tasks: [],
  status: 'idle'
};

export const tasksStateInitializer = () => {
  const lsTasksData = localStorage.getItem(LS_TASKS_ENTITIES_KEY);

  if (!lsTasksData) {
    return INITIAL_TASKS_STATE;
  }

  try {
    const tasks = JSON.parse(lsTasksData) as TaskEntity[];

    return {
      status: 'received',
      tasks: tasks
    } as TasksState;
  } catch (err) {
    if (err instanceof Error) {
      console.error(
        `Invalid JSON data in the local storage by the '${LS_TASKS_ENTITIES_KEY}' key`
      );
    }
    return INITIAL_TASKS_STATE;
  }
};

export const TasksReducer: Reducer<TasksState, TasksActions> = (
  state,
  action
) => {
  switch (action.type) {
    case TasksActionsTypes.SET_TASKS: {
      return {
        ...state,
        tasks: action.payload.tasks
      };
    }
    case TasksActionsTypes.ADD_TASK: {
      const newTaskData = action.payload.taskData;
      const existingTaskIds = state.tasks.map((task) => task.id);
      const newTaskId =
        existingTaskIds.length === 0 ? 1 : Math.max(...existingTaskIds) + 1;

      const newTask = {
        id: newTaskId,
        ...newTaskData
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };
    }
    case TasksActionsTypes.EDIT_TASK: {
      const { taskId, taskData } = action.payload;
      const changedTasks = state.tasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          ...taskData
        };
      });

      return {
        ...state,
        tasks: changedTasks
      };
    }
    case TasksActionsTypes.DELETE_TASK: {
      const deletingTaskId = action.payload.taskId;
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== deletingTaskId
      );

      return {
        ...state,
        tasks: filteredTasks
      };
    }
    case TasksActionsTypes.DELETE_DONE_TASKS: {
      const filteredTasks = state.tasks.filter((task) => task.type !== 'done');

      return {
        ...state,
        tasks: filteredTasks
      };
    }
    case TasksActionsTypes.SET_STATUS: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    default: {
      return state;
    }
  }
};
