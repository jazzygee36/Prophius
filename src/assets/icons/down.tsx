interface Props {
  onClick?: () => void;
}
const DownArrow = ({ onClick }: Props) => {
  return (
    <svg
      className='w-6 h-6 text-gray-800 dark:text-white cursor-pointer'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m8 10 4 4 4-4'
        onClick={onClick}
      />
    </svg>
  );
};

export default DownArrow;
