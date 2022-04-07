export default function Checked(props) {
  return (
    <div
      className="w-[32px] h-[32px] bg-blue-border rounded-[16px] flex items-center justify-center cursor-pointer"
      {...props}
    >
      <svg
        width={13}
        height={9}
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.75 4.5 4.5 8.25 12 .75"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
