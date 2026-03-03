import React from 'react';
import { SheetInput } from './SheetInput';

export const Footer: React.FC = () => {
  return (
    <div className="border-t border-black">
      <div className="grid grid-cols-5 border-b border-black text-xs font-bold text-center bg-gray-50">
        <div className="border-r border-black py-1">MOULD OPERATOR</div>
        <div className="border-r border-black py-1">FITTER / SHIFT FITTER</div>
        <div className="border-r border-black py-1">S B O</div>
        <div className="border-r border-black py-1">GAS CUTTER</div>
        <div className="py-1">TEEMER MAN</div>
      </div>
      <div className="grid grid-cols-5 h-16 text-sm text-center">
        
        {/* Mould Operator - Split STD 1 / STD 2 */}
        <div className="border-r border-black p-0 flex">
            <div className="flex-1 border-r border-black h-full">
                <SheetInput placeholder="STD 1" data-label="MOULD OPERATOR (STD 1)" />
            </div>
            <div className="flex-1 h-full">
                <SheetInput placeholder="STD 2" data-label="MOULD OPERATOR (STD 2)" />
            </div>
        </div>

        {/* Fitter */}
        <div className="border-r border-black p-0"><SheetInput data-label="FITTER / SHIFT FITTER" /></div>
        
        {/* SBO */}
        <div className="border-r border-black p-0"><SheetInput data-label="S B O" /></div>
        
        {/* Gas Cutter - Split STD 1 / STD 2 */}
        <div className="border-r border-black p-0 flex">
             <div className="flex-1 border-r border-black h-full">
                <SheetInput placeholder="STD 1" data-label="GAS CUTTER (STD 1)" />
            </div>
            <div className="flex-1 h-full">
                <SheetInput placeholder="STD 2" data-label="GAS CUTTER (STD 2)" />
            </div>
        </div>

        {/* Teemer Man */}
        <div className="p-0"><SheetInput data-label="TEEMER MAN" /></div>
      </div>
    </div>
  );
};