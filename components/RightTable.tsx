import React from 'react';
import { SheetInput } from './SheetInput';

// Modified LabelInput to accept className for height overrides, defaulting to h-8
const LabelInput = ({ label, className = "h-8" }: { label: string, className?: string }) => (
  <div className={`flex border-b border-black ${className}`}>
    <span className="w-1/3 px-2 flex items-center text-xs font-bold border-r border-black bg-gray-50 leading-tight">{label}</span>
    <div className="flex-1">
      <SheetInput data-label={label} />
    </div>
  </div>
);

export const RightTable: React.FC = () => {
  return (
    <div className="flex flex-col h-full border-l border-black">
       {/* Top Row: Heat No | Shift In Charge | Cast No */}
       <div className="flex border-b border-black h-10">
          <div className="flex-1 flex border-r border-black">
             <span className="w-16 px-1 flex items-center text-[10px] font-bold bg-gray-50 border-r border-black leading-tight">HEAT NO</span>
             <SheetInput className="text-lg font-bold" data-label="HEAT NO" />
          </div>
          <div className="flex-1 flex border-r border-black">
             <span className="w-16 px-1 flex items-center text-[10px] font-bold bg-gray-50 border-r border-black leading-tight">SHIFT IN CHARGE</span>
             <SheetInput data-label="SHIFT IN CHARGE" />
          </div>
          <div className="flex-1 flex">
             <span className="w-16 px-1 flex items-center text-[10px] font-bold bg-gray-50 border-r border-black leading-tight">CAST NO</span>
             <SheetInput data-label="CAST NO" />
          </div>
       </div>

       {/* Timings */}
       <LabelInput label="TAPPING TIME" />
       <LabelInput label="PURGING TIME" />
       <LabelInput label="LIFTING TEMP" />
       <LabelInput label="TUNDISH TEMP" />
       <LabelInput label="LADLE NO" />
       <LabelInput label="LADLE LIFE" />
       <LabelInput label="LADLE OPENING" />
       <LabelInput label="LADLE OPEN TIME" />
       <LabelInput label="LADLE CLOSE TIME" />
       
       {/* Misc Checks */}
       
       {/* TOTAL NO OF BILLET with Split STD 1 / STD 2 */}
       <div className="flex border-b border-black h-8">
          <span className="w-1/3 px-2 flex items-center text-xs font-bold border-r border-black bg-gray-50 leading-tight">TOTAL NO OF BILLET</span>
          <div className="flex-1 flex">
            <div className="flex-1 border-r border-black h-full">
                <SheetInput placeholder="STD 1" data-label="TOTAL NO OF BILLET (STD 1)" />
            </div>
            <div className="flex-1 h-full">
                <SheetInput placeholder="STD 2" data-label="TOTAL NO OF BILLET (STD 2)" />
            </div>
          </div>
       </div>

       <LabelInput label="TOTAL WT" />
       <LabelInput label="LADLE SHROUD LIFE" />
       
       {/* BILLET LENGTH with Split STD 1 / STD 2 */}
       <div className="flex border-b border-black h-8">
          <span className="w-1/3 px-2 flex items-center text-xs font-bold border-r border-black bg-gray-50 leading-tight">BILLET LENGTH</span>
          <div className="flex-1 flex">
            <div className="flex-1 border-r border-black h-full">
                <SheetInput placeholder="STD 1" data-label="BILLET LENGTH (STD 1)" />
            </div>
            <div className="flex-1 h-full">
                <SheetInput placeholder="STD 2" data-label="BILLET LENGTH (STD 2)" />
            </div>
          </div>
       </div>

       <LabelInput label="TOCB" />
       
       {/* Timings 2 */}
       <LabelInput label="CASTING COMPLETED AT" />
       <LabelInput label="MACHINE READY AT" />

       {/* Remarks - Moved here to balance column height and use free space */}
       <div className="flex-1 flex flex-col min-h-[4rem]">
          <div className="px-2 py-1 text-xs font-bold bg-gray-50 border-b border-black">REMARKS</div>
          <textarea 
            className="w-full flex-1 p-2 bg-transparent text-sm resize-none outline-none" 
            placeholder="Write remarks here..."
            data-label="REMARKS"
          ></textarea>
       </div>
    </div>
  );
};