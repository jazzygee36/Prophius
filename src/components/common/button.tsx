interface Props {
  type: any;
  onClick?: () => void;
  title: string;
}

const HomeButton = ({ type, onClick, title }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#fff] h-[45px] w-full uppercase font-semibold text-[#264ECA]`}
    >
      {title}
    </button>
  );
};

export default HomeButton;
