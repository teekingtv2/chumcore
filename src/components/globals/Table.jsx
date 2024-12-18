import React from "react";

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-md border-b-[1px] border-b-slate-500">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, i) => renderRow(item, i + 1))}</tbody>
    </table>
  );
};

export default Table;
