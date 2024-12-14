import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Dashbaord = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-col px-4 md:px-16'>
        <Header />
        <div className='relative '>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Dashbaord;
