import { SVGProps } from 'react';

const ColorBox = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  const { fill = '#86DA83' } = props;

  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      {...props}
    >
      <rect width={32} height={32} rx={12} fill={fill} />
    </svg>
  );
};

export default ColorBox;
