import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Dashbaord = ({ children }: Props) => {
  return (
    <div className='flex flex-col px-10'>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Dashbaord;
