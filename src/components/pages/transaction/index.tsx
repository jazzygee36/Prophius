import { useState } from 'react';
import Dashbaord from '../../common/dashboard';
import TransactionTable from './table';
import { transactionBalance } from '../../utils/mockDatas';

const Transactions = () => {
  const [showBalance, setShowBalance] = useState(false);

  const handleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className=''>
      <Dashbaord>
        <div className='flex justify-between items-center mb-5 mt-3'>
          <h2 className='text-sm md:text-[25px] font-semibold '>
            Transactions History
          </h2>
          <button
            onClick={handleBalance}
            className='font-bold text-[#264ECA] text-sm md:text-[block]'
          >
            {showBalance ? 'Hide balance' : 'Show balance'}
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center mb-5 justify-center text-center '>
          {transactionBalance.map((history) => (
            <div
              key={history.name}
              className=' gap-5 rounded-lg border border-gray-300 py-3 px-4'
            >
              <p>{history.name}</p>
              <p className='font-bold text-2xl'>
                {showBalance ? `N${history.amount}` : '******'}
              </p>
            </div>
          ))}
        </div>
        <TransactionTable />
      </Dashbaord>
    </div>
  );
};

export default Transactions;
