import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { IsNotEmpty } from 'class-validator';

import ColorBox from '@components/assets/ColorBox';
import PlusIcon from '@components/assets/PlusIcon';

class Schema {
  @IsNotEmpty({
    message: 'fill in a task',
  })
  task: string;
}

export default function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: classValidatorResolver(Schema),
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-between pt-[20px] pb-[55px] px-[30px] "
    >
      <div className="flex items-center">
        <PlusIcon />

        <div className="w-[300px] h-[32px] flex flex-col relative">
          <input
            type="text"
            {...register('task')}
            placeholder="Add a task"
            className="ml-[20px] w-full h-full text-gray-primary placeholder:text-gray-secondary"
          />
          {errors.task && (
            <span className="absolute ml-[20px] bottom-[-25px] text-red-500">
              {errors.task.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <ColorBox />
        <ColorBox fill="#8F83DA" />
      </div>
    </form>
  );
}
