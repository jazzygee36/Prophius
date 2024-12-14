import { useState } from 'react';
import { TableDetails } from '../../utils/transactionTable';

// Define a type for the statuses
type Status = 'Pending' | 'Success' | 'Failed';

const color: Record<Status, string> = {
  Pending: 'orange',
  Success: 'green',
  Failed: 'red',
};

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const itemsPerPage = 5;

  // Filtered data based on selected status
  const filteredTable = filter
    ? TableDetails.filter((item) => item.status === filter)
    : TableDetails;

  const totalPages = Math.ceil(filteredTable.length / itemsPerPage);

  // Get current items for the current page
  const currentItems = filteredTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* Header and Filter */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-sm md:text-xl font-bold'>
          All Transactions :{' '}
          <span className='text-[#264ECA]'>{TableDetails.length}</span>
        </h3>
        <div className='flex gap-3 items-center'>
          <p className='hidden md:block'>Filter by status:</p>
          <select
            className='border border-gray-300 p-2 rounded-md'
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value=''>All</option>
            <option value='Pending'>Pending</option>
            <option value='Success'>Success</option>
            <option value='Failed'>Failed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='table-auto border-collapse border border-gray-300 w-full text-left'>
          <thead className='bg-gray-100'>
            <tr className='text-[#0c1632]'>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>
                Transaction Date
              </th>
              <th className='border border-gray-300 px-4 py-2'>Email</th>
              <th className='border border-gray-300 px-4 py-2'>Description</th>
              <th className='border border-gray-300 px-4 py-2'>Amount</th>
              <th className='border border-gray-300 px-4 py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } cursor-pointer`}
              >
                <td className='border border-gray-300 px-4 py-2'>
                  {transaction.name}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {transaction.date}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {transaction.email}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {transaction.type}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {transaction.amount}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2  `}
                  style={{ color: color[transaction.status as Status] }}
                >
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className='flex justify-between items-center mt-5 mb-3'>
        <button
          className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50'
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className='text-sm'>
          Page {currentPage} of {totalPages}
        </p>
        <button
          className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50'
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;
