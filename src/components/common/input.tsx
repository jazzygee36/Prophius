interface Props {
  type: string;
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
}

const HomeInput = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  autoFocus,
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      autoFocus={autoFocus}
      className='h-[45px] text-white w-full bg-transparent px-3 rounded-md mb-5 border border-[#ffffff]'
    />
  );
};

export default HomeInput;
