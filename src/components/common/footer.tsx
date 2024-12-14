import FooterLogo from '../../assets/loginLogo.png';
const QuickLink = [{ name: 'About Us' }, { name: 'Blog' }, { name: 'FAQ' }];

const Company = [
  { name: 'Contact Us' },
  { name: 'Private Policy' },
  { name: 'Terms of Use' },
];

const Footer = () => {
  return (
    <div className='bg-[#0c1632] w-full h-full mt-5'>
      <div className=' grid grid-cols-1 md:grid-cols-3 text-white justify-center items-center text-center gap-10 md:gap-0 py-10 px-3'>
        <div className='flex justify-center'>
          <img src={FooterLogo} alt='footer-logo' width={150} />
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-[20px]'>QuickLink</h1>
          {QuickLink.map((link) => (
            <div key={link.name}>
              <p className='cursor-pointer'>{link.name}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-[20px]'>About Company</h1>

          {Company.map((link) => (
            <div key={link.name}>
              <p className='cursor-pointer'>{link.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className='py-10 mx-10' />
    </div>
  );
};

export default Footer;
