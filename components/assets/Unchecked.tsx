import { SVGProps } from 'react';

const Unchecked = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={30}
      height={30}
      rx={15}
      fill="#F2F4F9"
      stroke="#6085D8"
      strokeWidth={2}
    />
  </svg>
);

export default Unchecked;
