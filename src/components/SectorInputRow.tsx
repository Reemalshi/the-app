import React, { useState } from 'react';
import { Sector } from '../types/Sector';

interface SectorInputRowProps {
  field: keyof Sector;
  index: number;
  onAddItem: (field: keyof Sector, name: string, index: number) => void;
  onCancel: () => void;
}

const SectorInputRow: React.FC<SectorInputRowProps> = ({ field, index, onAddItem, onCancel }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddItem(field, name, index);
      setName('');
    }
  };

  return (
    <tr>
      <td colSpan={5} className="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <input
          type="text"
          className="p-2 w-full mr-4"
          placeholder={`Add ${String(field)}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onCancel} className="close-btn mr-2">
          <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/>
          </svg>
        </button>
        <button onClick={handleAdd} className="check-btn">
          <svg className="w-6 h-6 text-green-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SectorInputRow;
