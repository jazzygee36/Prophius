import Dashbaord from '../../common/dashboard';
import TransactionTable from './table';

const Transactions = () => {
  const transactions = [
    {
      name: 'Balances',
      amount: 7000,
    },
    {
      name: 'Savings',
      amount: 7000,
    },
    {
      name: 'Incomes',
      amount: 7000,
    },
    {
      name: 'Expenses',
      amount: 7000,
    },
  ];
  return (
    <div className=''>
      <Dashbaord>
        <h2 className='text-[25px] font-semibold mb-5'>Transactions History</h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 items-center mb-5 '>
          {transactions.map((history) => (
            <div
              key={history.name}
              className=' gap-5 rounded-lg border border-gray-300 py-3 px-4'
            >
              <p>{history.name}</p>
              <p className='font-bold text-2xl'>N{history.amount}</p>
            </div>
          ))}
        </div>
        <TransactionTable />
      </Dashbaord>
    </div>
  );
};

export default Transactions;
