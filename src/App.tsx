import { useDeferredValue, useEffect, useState } from 'react';
import { useSearchContext } from './context/search.context';
import { useTasks } from './hooks/useTasks';
import { RootLayout } from './layout/RootLayout/RootLayout';
import { TaskGroups } from './types/task.types';
import {
  filterTasksBySearchQuery,
  groupTasksByType,
  sortTasksByStartDay
} from './utils';

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

  return <RootLayout></RootLayout>;
}

export default App;
