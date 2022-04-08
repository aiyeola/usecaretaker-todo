import { atom, selector, useSetRecoilState, AtomEffect } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import type { TaskListType } from '@typings';

const ssrCompletedState = atom({
  key: 'SsrCompleted',
  default: false,
});

const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};

const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

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
  effects_UNSTABLE: [persistAtomEffect],
});

const taskCount = selector<number>({
  key: 'taskCount',
  get: ({ get }) => {
    const tasks = get(filteredTaskListState);

    return tasks.count;
  },
});

const taskListColorTag = atom<string>({
  key: 'taskListColorTag',
  default: 'all',
});

const filteredTaskListState = selector({
  key: 'filteredTaskList',
  get: ({ get }) => {
    const filter = get(taskListColorTag);
    const list = get(taskListState);

    let taskList;
    switch (filter) {
      case 'primary':
        taskList = list.filter((item) => item.colorTag === 'primary');
        return {
          taskList,
          count: taskList.length,
        };
      case 'secondary':
        taskList = list.filter((item) => item.colorTag === 'secondary');
        return {
          taskList,
          count: taskList.length,
        };
      default:
        return {
          taskList: list,
          count: list.length,
        };
    }
  },
});

export {
  taskListState,
  taskCount,
  filteredTaskListState,
  taskListColorTag,
  useSsrComplectedState,
};
