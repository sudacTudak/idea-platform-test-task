import { filterTasksBySearchQuery } from '../tasks.utils';
import { TaskEntity } from '../../types/task.types';

const tasks: TaskEntity[] = [
  {
    id: 1,
    type: 'todo',
    startDay: new Date('2025-01-10').getTime(),
    endDay: new Date('2025-01-13').getTime(),
    text: 'Завершить рефакторинг старого кода.'
  },
  {
    id: 2,
    type: 'todo',
    startDay: new Date('2024-12-30').getTime(),
    endDay: new Date('2025-01-20').getTime(),
    text: 'Разработать план по внедрению новой функциональности.'
  },
  {
    id: 3,
    type: 'in_progress',
    startDay: new Date('2025-01-08').getTime(),
    endDay: new Date('2025-01-13').getTime(),
    text: 'Написать документацию для команды разработчиков.'
  },
  {
    id: 4,
    type: 'in_progress',
    startDay: new Date('2025-01-10').getTime(),
    endDay: new Date('2025-01-13').getTime(),
    text: 'Провести код-ревью нового модуля.'
  },
  {
    id: 5,
    type: 'done',
    startDay: new Date('2025-01-07').getTime(),
    endDay: new Date('2025-01-10').getTime(),
    text: 'Подготовить план собеседований.'
  },
  {
    id: 6,
    type: 'review',
    startDay: new Date('2025-01-07').getTime(),
    endDay: new Date('2025-01-12').getTime(),
    text: 'Подготовить презентацию для клиента.'
  }
];

// Случаи:
// 1. Входной параметр searchQuery содержит значение, не совпадающее ни с одной задачей
// 2. Входной параметр searchQuery содержит дату, которая не совпадает со startDay или endDay ни одной задачи
// 3. Входной параметр searchQuery содержит дату, которая сопадает с одной или несколькими задачами,
//    но дата введена не в корректном формате
// 4. Входной параметр searchQuery содержит значение, совпадающее с описанием одной или нескольких задач
// 5. Входной параметр searchQuery содержит значене даты, совпадающее с endDay или startDay одной или нескольких задач
// 6. Входной параметр searchQuery содержит значение, совпадающее с одной или несколькими задачами,
//    но значение окружено пробелами
// 6. Входной параметр searchQuery содержит корректную дату, совпадающую с одной или несколькими задачами,
//    но значение окружено пробелами
// 7. Входной параметр searchQuery содержит пустую строку

describe('Utils | filterTaskByQuery', () => {
  it('should return an empty array if query doesn`t match with any task text', () => {
    const searchQuery = 'Оптимизировать алгоритмы';

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);

    expect(filteredTasks).toHaveLength(0);
  });

  it('should return an empty array if query consists a date which doesn`t match with any task', () => {
    const searchQuery = '2024-29-12';

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);

    expect(filteredTasks).toHaveLength(0);
  });

  it('should return an empty array if query consists a date which match with at least one task but has incorrect format', () => {
    const searchQuery = '2025-10-01';

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);

    expect(filteredTasks).toHaveLength(0);
  });

  it('should return matched tasks if query matches with any task text', () => {
    const searchQuery = 'Подготовить';
    const expectedTaskCount = 2;

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);
    const everyTaskTextMatches = filteredTasks.every((item) =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    expect(filteredTasks).toHaveLength(expectedTaskCount);
    expect(everyTaskTextMatches).toBe(true);
  });

  it('should return matched tasks if query consists correct date which matches with at least one task', () => {
    const searchQuery = '10.01.2025';
    const expectedTaskCount = 3;
    const expectedTasksTexts = [
      'Завершить рефакторинг старого кода.',
      'Провести код-ревью нового модуля.',
      'Подготовить план собеседований.'
    ];

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);
    const filteredTasksTexts = filteredTasks.map((task) => task.text);
    const isOnlyExpectedTasksFound = expectedTasksTexts.every(
      (expectedTaskText) => filteredTasksTexts.includes(expectedTaskText)
    );

    expect(filteredTasks).toHaveLength(expectedTaskCount);
    expect(isOnlyExpectedTasksFound).toBe(true);
  });

  it('should return matched tasks if query matches with any task text but has spaces around', () => {
    const searchQuery = '    Подготовить    ';
    const expectedTaskCount = 2;

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);
    const everyTaskTextMatches = filteredTasks.every((item) =>
      item.text.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    expect(filteredTasks).toHaveLength(expectedTaskCount);
    expect(everyTaskTextMatches).toBe(true);
  });

  it('should return all tasks if query is empty string', () => {
    const searchQuery = '';
    const expectedTaskCount = tasks.length;

    const filteredTasks = filterTasksBySearchQuery(tasks, searchQuery);

    expect(filteredTasks).toHaveLength(expectedTaskCount);
  });
});
