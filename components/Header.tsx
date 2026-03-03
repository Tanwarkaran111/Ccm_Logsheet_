import React from 'react';
import { SheetInput } from './SheetInput';

export const Header: React.FC = () => {
  return (
    <div className="border-b-2 border-black flex flex-col md:flex-row">
      {/* Logo Section */}
      <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-black p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">Welspun Corp</h1>
        <p className="text-sm font-semibold">Pipes & Steel</p>
      </div>

      {/* Title Section */}
      <div className="w-full md:w-2/4 border-b md:border-b-0 md:border-r border-black flex flex-col items-center justify-center p-2 text-center">
        <h2 className="text-xl font-bold uppercase underline decoration-2 underline-offset-4">Welspun Corp Ltd (Steel Division)</h2>
        <h3 className="text-lg font-bold mt-1">CCM LOG SHEET</h3>
      </div>

      {/* Meta Data Section */}
      <div className="w-full md:w-1/4 flex flex-col text-xs font-bold">
        <div className="flex border-b border-black h-8">
          <span className="w-20 p-1 border-r border-black flex items-center bg-gray-50">DATE</span>
          <SheetInput type="date" className="flex-1" data-label="DATE" />
        </div>
        <div className="flex border-b border-black h-8">
          <span className="w-20 p-1 border-r border-black flex items-center bg-gray-50">SHIFT</span>
          <div className="flex-1 flex">
            <label className="flex-1 flex items-center justify-center border-r border-black cursor-pointer hover:bg-gray-100">
              <input type="radio" name="shift" className="mr-1" value="A" data-label="SHIFT" /> A
            </label>
            <label className="flex-1 flex items-center justify-center border-r border-black cursor-pointer hover:bg-gray-100">
              <input type="radio" name="shift" className="mr-1" value="B" data-label="SHIFT" /> B
            </label>
            <label className="flex-1 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <input type="radio" name="shift" className="mr-1" value="C" data-label="SHIFT" /> C
            </label>
          </div>
        </div>
        <div className="flex h-full">
           <div className="flex-1 p-1 flex items-end justify-center text-[10px] text-gray-500">Format No.: F/7.5.1/SMS/03, Rev No.00</div>
        </div>
      </div>
    </div>
  );
};