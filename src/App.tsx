import { useDeferredValue, useEffect, useState } from 'react';
import { useSearchContext } from './context/search.context';
import { useTasks } from './hooks/useTasks';
import { RootLayout } from './layout/RootLayout/RootLayout';
import { TasksPanel } from './components/TasksPanel/TasksPanel';

import {
  filterTasksBySearchQuery,
  groupTasksByType,
  sortTasksByStartDay
} from './utils';

import { CreateTaskData, TaskGroups, UpdateTaskData } from './types/task.types';
import { TasksActionsTypes } from './reducers/tasks/tasks.types';

function App() {
  const [tasksState, dispatch] = useTasks();
  const { searchValue } = useSearchContext();
  const deferredSearchValue = useDeferredValue(searchValue);
  const [taskGroups, setTaskGroups] = useState<TaskGroups>({
    todo: [],
    inProgress: [],
    review: [],
    done: []
  });

  useEffect(() => {
    const sortedTasks = sortTasksByStartDay(tasksState.tasks);
    const searchedTasks = filterTasksBySearchQuery(
      sortedTasks,
      deferredSearchValue
    );
    setTaskGroups(groupTasksByType(searchedTasks));
  }, [tasksState.tasks, deferredSearchValue]);

  useEffect(() => {
    console.log('useEffect in App tasksState: ', tasksState);
    console.log('useEffect in App taskGroups: ', taskGroups);
  }, [tasksState.tasks, taskGroups]);

  const addTask = (taskData: CreateTaskData) =>
    dispatch({
      type: TasksActionsTypes.ADD_TASK,
      payload: {
        taskData
      }
    });

  const editTask = (taskId: number, newData: UpdateTaskData) =>
    dispatch({
      type: TasksActionsTypes.EDIT_TASK,
      payload: { taskId, taskData: newData }
    });

  const deleteTask = (taskId: number) =>
    dispatch({
      type: TasksActionsTypes.DELETE_TASK,
      payload: { taskId }
    });

  const deleteDoneTasks = () =>
    dispatch({ type: TasksActionsTypes.DELETE_DONE_TASKS });

  return (
    <RootLayout>
      <TasksPanel
        taskGroups={taskGroups}
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
        deleteDoneTasks={deleteDoneTasks}
      />
    </RootLayout>
  );
}

export default App;
