import { RadioGroup } from '@headlessui/react';
import { useRecoilState } from 'recoil';

import ColorBox from '@components/assets/ColorBox';
import { taskListColorTag } from '@components/atoms/taskListState';

export default function FilterTask() {
  const [colorTag, setColorTag] = useRecoilState<string>(taskListColorTag);

  return (
    <RadioGroup
      className="flex space-x-2"
      value={colorTag}
      onChange={setColorTag}
    >
      <RadioGroup.Option value="primary">
        {({ checked }) => (
          <ColorBox
            className={
              checked
                ? 'ring-offset-0 ring ring-border-gray-secondary rounded-[12px]'
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
                ? 'ring-offset-0 ring ring-border-gray-secondary rounded-[12px]'
                : ''
            }
            fill="#8F83DA"
          />
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}
