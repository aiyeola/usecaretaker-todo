import { atom, selector } from 'recoil';

import type { TaskListType } from '@typings';

const taskListState = atom<TaskListType[]>({
  key: 'taskListState',
  default: [
    {
      task: 'Submit final paper online',
      done: false,
      colorTag: 'secondary',
    },
    {
      task: 'Review proposed budget',
      done: false,
      colorTag: 'primary',
    },
    {
      task: 'Email Olayide about walkthroughs',
      done: true,
      colorTag: 'primary',
    },
    {
      task: 'Write on Blog: Ambition & Patience',
      done: true,
      colorTag: 'secondary',
    },
  ],
});

const taskCount = selector<number>({
  key: 'taskCount',
  get: ({ get }) => {
    const tasks = get(taskListState);

    return tasks.length;
  },
});

export { taskListState, taskCount };
