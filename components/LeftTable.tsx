import React from 'react';
import { SheetInput } from './SheetInput';

const Row = ({ label, subLabel, unit, span = false }: { label: string, subLabel?: string, unit?: string, span?: boolean }) => (
  <tr className="h-8 border-b border-black">
    <td className="border-r border-black px-2 text-xs font-bold bg-gray-50 whitespace-nowrap">
      {label} {subLabel && <span className="text-[10px] block font-normal">{subLabel}</span>}
    </td>
    {span ? (
       <td colSpan={2} className="border-r border-black p-0">
          <SheetInput data-label={label} />
       </td>
    ) : (
      <>
        <td className="border-r border-black p-0 w-24">
          <SheetInput data-label={`${label} (STD 1)`} />
        </td>
        <td className="border-r border-black p-0 w-24">
          <SheetInput data-label={`${label} (STD 2)`} />
        </td>
      </>
    )}
  </tr>
);

export const LeftTable: React.FC = () => {
  return (
    <table className="w-full border-collapse h-full">
      <thead>
        {/* New Header Row: STD 1 & STD 2 pushed above */}
        <tr className="h-8 border-b border-black bg-gray-100">
          <th className="border-r border-black text-xs w-1/2 text-left px-2"></th>
          <th className="border-r border-black text-xs w-24">STD 1</th>
          <th className="border-r border-black text-xs w-24">STD 2</th>
        </tr>
      </thead>
      <tbody>
        {/* Tundish Trolley now as a data row (spanned input) */}
        <Row label="TUNDISH TROLLEY" span />

        {/* Tundish Section */}
        <Row label="TUNDISH NO" span />
        <Row label="TUNDISH BOARD" span />
        <Row label="TUNDISH LIFE" span />
        <Row label="TUNDISH NOZZLE DIA" />
        <Row label="TUNDISH OPENING" />
        <Row label="MOULD JACKET NO" />
        
        {/* Mould Section */}
        <Row label="SECTION" />
        <Row label="MOULD TUBE NO" />
        <Row label="MOULD TUBE LIFE" />
        <Row label="MOULD TUBE CLEANING LIFE" />
        <Row label="CASTING START TIME" />
        <Row label="CASTING FINISH TIME" />
        <Row label="TOTAL CASTING TIME" />
        <Row label="AVG CASTING SPEED" />
        <Row label="RAPSEED OIL / CASTING POWDER" span />
        <Row label="RHOMBOIDITY" />
        
        {/* Primary Water */}
        <Row label="PRIMARY MOULD WATER" subLabel="FLOW (LPM)" />
        
        {/* Primary Mould Water Pressure - Split Row */}
        <tr className="h-16 border-b border-black">
          <td className="border-r border-black px-2 text-xs font-bold bg-gray-50">
            PRIMARY MOULD WATER <span className="block font-normal">PRESSURE</span>
          </td>
          <td colSpan={2} className="p-0 border-r border-black">
            <div className="h-1/2 border-b border-black flex">
               <span className="w-12 text-[10px] flex items-center justify-center border-r border-black bg-gray-50">INLET</span>
               <div className="flex-1 border-r border-black"><SheetInput data-label="PRIMARY MOULD WATER PRESSURE - INLET (STD 1)" /></div>
               <div className="flex-1"><SheetInput data-label="PRIMARY MOULD WATER PRESSURE - INLET (STD 2)" /></div>
            </div>
            <div className="h-1/2 flex">
               <span className="w-12 text-[10px] flex items-center justify-center border-r border-black bg-gray-50">OUTLET</span>
               <div className="flex-1 border-r border-black"><SheetInput data-label="PRIMARY MOULD WATER PRESSURE - OUTLET (STD 1)" /></div>
               <div className="flex-1"><SheetInput data-label="PRIMARY MOULD WATER PRESSURE - OUTLET (STD 2)" /></div>
            </div>
          </td>
        </tr>

        {/* Primary Water Temp - Split Row */}
        <tr className="h-16 border-b border-black">
          <td className="border-r border-black px-2 text-xs font-bold bg-gray-50">
            PRIMARY WATER TEMP
          </td>
          <td colSpan={2} className="p-0 border-r border-black">
            <div className="h-1/2 border-b border-black flex">
               <span className="w-12 text-[10px] flex items-center justify-center border-r border-black bg-gray-50">INLET</span>
               <div className="flex-1 border-r border-black"><SheetInput data-label="PRIMARY WATER TEMP - INLET (STD 1)" /></div>
               <div className="flex-1"><SheetInput data-label="PRIMARY WATER TEMP - INLET (STD 2)" /></div>
            </div>
            <div className="h-1/2 flex">
               <span className="w-12 text-[10px] flex items-center justify-center border-r border-black bg-gray-50">OUTLET</span>
               <div className="flex-1 border-r border-black"><SheetInput data-label="PRIMARY WATER TEMP - OUTLET (STD 1)" /></div>
               <div className="flex-1"><SheetInput data-label="PRIMARY WATER TEMP - OUTLET (STD 2)" /></div>
            </div>
          </td>
        </tr>

        {/* Secondary Water Header */}
        <tr className="h-8 border-b border-black bg-gray-100">
           <td colSpan={3} className="border-r border-black px-2 text-xs font-bold text-center">
             SECONDARY WATER (L/min)
           </td>
        </tr>
        
        {/* Secondary Water Zones with 2 columns each */}
        <Row label="ZONE 1" />
        <Row label="ZONE 2" />
        <Row label="ZONE 3" />

      </tbody>
    </table>
  );
};