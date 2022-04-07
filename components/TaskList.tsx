/* eslint-disable react/jsx-key */
import React from 'react';
import { selector, useRecoilState, useRecoilValue } from 'recoil';

import ColorBox from '@components/assets/ColorBox';
import Unchecked from '@components/assets/Unchecked';
import Checked from '@components/assets/Checked';
import { taskListState } from '@components/atoms/taskListState';
import type { TaskListType } from '@typings';

export default function TaskList() {
  const [taskList, setTaskList] = useRecoilState<TaskListType[]>(taskListState);

  const colorTag = {
    primary: <ColorBox width={18} height={18} />,
    secondary: <ColorBox width={18} height={18} fill="#8F83DA" />,
  };

  const checkUncheckStatus = (index: number) => {
    const newTaskList = toggleTaskStatus(taskList, index);
    setTaskList(newTaskList);
  };

  return (
    <div className="bg-white">
      {React.Children.toArray(
        taskList.map((task, index) => {
          return (
            <div className="flex items-center justify-between py-[23px] border-[1px] border-border-gray border-solid bg-white px-[30px]">
              <div className="flex items-center">
                <div className="mr-[16px]">
                  {task.done ? (
                    <Checked onClick={() => checkUncheckStatus(index)} />
                  ) : (
                    <Unchecked onClick={() => checkUncheckStatus(index)} />
                  )}
                </div>
                <p className="text-[20px] text-gray-primary">{task.task}</p>
              </div>
              <div>{colorTag[task.colorTag]}</div>
            </div>
          );
        }),
      )}
    </div>
  );
}

function toggleTaskStatus(arr: TaskListType[], index: number) {
  return [
    ...arr.slice(0, index),
    {
      ...arr[index],
      done: !arr[index].done,
    },
    ...arr.slice(index + 1),
  ];
}
