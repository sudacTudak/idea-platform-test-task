import { Dispatch, useEffect, useReducer } from 'react';
import {
  TasksReducer,
  tasksStateInitializer
} from '../reducers/tasks/tasks.reducer';
import { getTasks } from '../api';
import {
  TasksActions,
  TasksActionsTypes,
  TasksState
} from '../reducers/tasks/tasks.types';
import { LS_TASKS_ENTITIES_KEY } from '../reducers/tasks/tasks.constants';

type UseTasksReturnType = [TasksState, Dispatch<TasksActions>];

export const useTasks = (): UseTasksReturnType => {
  const [tasksState, dispatch] = useReducer(
    TasksReducer,
    null,
    tasksStateInitializer
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();

        if (!tasks) return;

        dispatch({
          type: TasksActionsTypes.SET_TASKS,
          payload: {
            tasks
          }
        });
      } catch {
        return;
      }
    };

    if (tasksState.tasks.length === 0) {
      dispatch({
        type: TasksActionsTypes.SET_STATUS,
        payload: {
          status: 'loading'
        }
      });
      fetchTasks();
      dispatch({
        type: TasksActionsTypes.SET_STATUS,
        payload: {
          status: 'received'
        }
      });
    }
  }, []);

  useEffect(() => {
    const jsonTasks = JSON.stringify(tasksState.tasks);
    localStorage.setItem(LS_TASKS_ENTITIES_KEY, jsonTasks);
  }, [tasksState.tasks]);

  return [tasksState, dispatch];
};
