/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRecoilValue, useRecoilState } from 'recoil';

import TaskList from '@components/TaskList';
import {
  taskCount,
  taskListColorTag,
  useSsrComplectedState,
} from '@components/atoms/taskListState';
import AddTask from '@components/AddTask';
import FilterTask from '@components/FilterTask';

const Index: NextPage = () => {
  const count = useRecoilValue<number>(taskCount);
  const [colorTag, setColorTag] = useRecoilState<string>(taskListColorTag);

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

  const feedbackText = {
    all: ` Showing ${count} tasks`,
    primary: `Filtering and showing ${count} tasks`,
    secondary: `Filtering and showing ${count} tasks`,
  };

  // pad a number with a leading zero if it is less than 10
  const pad = (num: number) => (num < 10 ? `0${num}` : num);

  const setSsrCompleted = useSsrComplectedState();

  useEffect(setSsrCompleted, [setSsrCompleted]);

  return (
    <div className="bg-gray-bg min-h-screen flex flex-col items-center justify-center py-[30px] px-[10px]">
      <div className="min-w-[350px] w-full max-w-[500px] drop-shadow-box-shadow">
        <p className="bg-brown rounded-tl-[40px] rounded-tr-[40px] text-white text-[20px] text-center py-[31px]">
          Today,{' '}
          {`${DayOfWeek[new Date().getUTCDay()]} ${
            MonthOfYear[new Date().getUTCMonth()]
          } ${pad(new Date().getUTCDate())} ${new Date().getUTCFullYear()}`}
        </p>
        <div className="bg-light-brown py-[24px] flex justify-between px-[30px]">
          <p
            className="text-brown text-xl cursor-pointer"
            onClick={() => setColorTag('all')}
          >
            {feedbackText[colorTag]}
          </p>

          <FilterTask />
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
