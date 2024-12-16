import { useState } from 'react';
import { TableDetails } from '../../utils/mockDatas';
import ReusableModal from '../../common/modal';

interface TransactionProps {
  name: string;
  date: string;
  email: string;
  type: string;
  amount: string;
  status: string;
}

type Status = 'Pending' | 'Success' | 'Failed';

const color: Record<Status, string> = {
  Pending: 'orange',
  Success: 'green',
  Failed: 'red',
};

// Utility function to convert JSON data to CSV
const convertToCSV = (data: TransactionProps[]) => {
  const headers = ['Name', 'Date', 'Email', 'Description', 'Amount', 'Status'];
  const rows = data.map(({ name, date, email, type, amount, status }) => [
    name,
    date,
    email,
    type,
    amount,
    status,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.join(',')),
  ].join('\n');

  return csvContent;
};

// Trigger CSV download
const downloadCSV = (data: TransactionProps[]) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'transactions.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const TransactionTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionProps | null>(null);
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

  // Open modal and set selected transaction
  const openModal = (transaction: TransactionProps) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedTransaction(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header and Filter */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-sm md:text-xl font-bold flex gap-1 md:gap-2'>
          <span>All </span>
          <span className='hidden md:block'> Transactions</span> :{' '}
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
          <button
            className='bg-blue-500 text-white px-2 md:px-4 py-3 text-sm rounded-md hover:bg-blue-600'
            onClick={() => downloadCSV(filteredTable)}
          >
            Download CSV
          </button>
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
                onClick={() => openModal(transaction)}
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
                  className={`border border-gray-300 px-4 py-2`}
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

      {/* Modal */}
      <ReusableModal isOpen={isModalOpen} onClose={closeModal}>
        {selectedTransaction ? (
          <div>
            <h2 className='text-xl font-semibold mb-5 text-blue-950'>
              Transaction Details
            </h2>
            <div className='flex justify-between '>
              <p>
                <strong>Name:</strong>
              </p>
              <p>{selectedTransaction.name}</p>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between'>
              <p>
                <strong>Date:</strong>
              </p>
              <p>{selectedTransaction.date}</p>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between'>
              <p>
                <strong>Email:</strong>
              </p>
              <p>{selectedTransaction.email}</p>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between'>
              <p>
                <strong>Description:</strong>
              </p>
              <p>{selectedTransaction.type}</p>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between'>
              <p>
                <strong>Amount:</strong>
              </p>
              <p>{selectedTransaction.amount}</p>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between'>
              <p>
                <strong>Status:</strong>
              </p>
              <span
                style={{ color: color[selectedTransaction.status as Status] }}
              >
                {selectedTransaction.status}
              </span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </ReusableModal>
    </div>
  );
};

export default TransactionTable;
