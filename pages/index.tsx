/* eslint-disable react/jsx-key */
import React from 'react';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';

import ColorBox from '@components/assets/ColorBox';
import TaskList from '@components/TaskList';
import { taskCount } from '@components/atoms/taskListState';
import AddTask from '@components/AddTask';

const Index: NextPage = () => {
  const count = useRecoilValue<number>(taskCount);

  const DayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MonthOfYear = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // pad a number with a leading zero if it is less than 10
  const pad = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className="bg-gray-bg min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[500px] w-full drop-shadow-box-shadow">
        <p className="bg-brown rounded-tl-[40px] rounded-tr-[40px] text-white text-[20px] text-center py-[31px]">
          Today,{' '}
          {`${DayOfWeek[new Date().getUTCDay()]} ${
            MonthOfYear[new Date().getUTCMonth()]
          } ${pad(new Date().getUTCDate())} ${new Date().getUTCFullYear()}`}
        </p>
        <div className="bg-light-brown py-[24px] flex justify-between px-[30px]">
          <p className="text-brown text-xl">Showing {count} tasks</p>

          <div className="flex space-x-2">
            <ColorBox />
            <ColorBox fill="#8F83DA" />
          </div>
        </div>

        <div className="min-h-[424px] bg-white rounded-bl-[40px] rounded-br-[40px]">
          <TaskList />

          <AddTask />
        </div>
      </div>
    </div>
  );
};

export default Index;
