import React from 'react';
import SectorInputRow from './SectorInputRow';
import { Sector } from '../types/Sector';

interface SectorRowProps {
  sector: Sector;
  index: number;
  onAddItem: (field: keyof Sector, name: string, index: number) => void;
  editingIndex: { field: keyof Sector, index: number } | null;
  setEditingIndex: React.Dispatch<React.SetStateAction<{ field: keyof Sector, index: number } | null>>;
}

const SectorRow: React.FC<SectorRowProps> = ({ sector, index, onAddItem, editingIndex, setEditingIndex }) => {
  return (
    <>
      <tr className='hover:bg-gray-50 '>
        <td className="border border-gray-300 px-4 py-2">
          {sector.category.join(', ')}
          {editingIndex?.field === 'category' && editingIndex.index === index && (
            <SectorInputRow field="category" index={index} onAddItem={onAddItem} onCancel={() => setEditingIndex(null)} />
          )}
          
        </td>
        <td className="border border-gray-300 px-4 py-2 ">
          {sector.field.join(', ')}
          {editingIndex?.field === 'field' && editingIndex.index === index && (
            <SectorInputRow field="field" index={index} onAddItem={onAddItem} onCancel={() => setEditingIndex(null)} />
          )}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          {sector.subCategory.join(', ')}
          {editingIndex?.field === 'subCategory' && editingIndex.index === index && (
            <SectorInputRow field="subCategory" index={index} onAddItem={onAddItem} onCancel={() => setEditingIndex(null)} />
          )}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          {sector.division.join(', ')}
          {editingIndex?.field === 'division' && editingIndex.index === index && (
            <SectorInputRow field="division" index={index} onAddItem={onAddItem} onCancel={() => setEditingIndex(null)} />
          )}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          {sector.subDivision.join(', ')}
          {editingIndex?.field === 'subDivision' && editingIndex.index === index && (
            <SectorInputRow field="subDivision" index={index} onAddItem={onAddItem} onCancel={() => setEditingIndex(null)} />
          )}
        </td>
      </tr>
    </>
  );
};

export default SectorRow;
