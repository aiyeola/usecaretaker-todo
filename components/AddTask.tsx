import { RadioGroup } from '@headlessui/react';
import { useForm, Controller } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { IsNotEmpty } from 'class-validator';
import { useSetRecoilState } from 'recoil';

import ColorBox from '@components/assets/ColorBox';
import PlusIcon from '@components/assets/PlusIcon';
import { taskListState } from '@components/atoms/taskListState';
import type { TaskListType } from '@typings';

class Schema {
  @IsNotEmpty({
    message: 'a task is required',
  })
  task: string;

  @IsNotEmpty()
  colorTag: string;
}

export default function AddTask() {
  const setTaskList = useSetRecoilState<TaskListType[]>(taskListState);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: classValidatorResolver(Schema),
    defaultValues: {
      task: '',
      colorTag: 'primary',
    },
  });

  const onSubmit = (data) => {
    setTaskList((oldTaskList) => [
      ...oldTaskList,
      {
        ...data,
        done: false,
      },
    ]);

    reset({
      task: '',
      colorTag: 'primary',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-between pt-[20px] pb-[55px] px-[30px] "
    >
      <div className="flex items-center">
        <button type="submit">
          <PlusIcon />
        </button>

        <div className="min-w-[210px] max-w-[300px] h-[32px] flex flex-col relative">
          <input
            type="text"
            {...register('task')}
            placeholder="Add a task"
            className="ml-[20px] w-full h-full text-gray-primary placeholder:text-gray-secondary focus:outline-none"
          />
          {errors.task && (
            <span className="absolute ml-[20px] bottom-[-25px] text-red-500">
              {errors.task.message}
            </span>
          )}
        </div>
      </div>

      <Controller
        name="colorTag"
        control={control}
        render={({ field }) => (
          <RadioGroup className="flex space-x-2" {...field}>
            <RadioGroup.Option value="primary">
              {({ checked }) => (
                <ColorBox
                  className={
                    checked
                      ? 'ring-offset-0 ring ring-border-gray rounded-[12px]'
                      : ''
                  }
                />
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="secondary">
              {({ checked }) => (
                <ColorBox
                  className={
                    checked
                      ? 'ring-offset-0 ring ring-border-gray rounded-[12px]'
                      : ''
                  }
                  fill="#8F83DA"
                />
              )}
            </RadioGroup.Option>
          </RadioGroup>
        )}
      />
    </form>
  );
}
