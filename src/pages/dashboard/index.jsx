import React from "react";
import Table from "../../components/globals/Table";
import { signupData } from "../../utils/data";

const columns = [
  {
    header: "S/N",
    accessor: "email",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Location",
    accessor: "location",
    // className: "hidden md:table-cell",
  },
];

const DashboardPage = () => {
  const renderRow = (item, i) => (
    <tr
      key={item._id}
      className="even:bg-slate-200 hover:bg-chumOrange text-gray-400 hover:text-black"
    >
      <td className="table-cell text-sm p-4">{i}</td>
      <td className="table-cell text-sm p-4">{item.email}</td>
      <td className="table-cell text-sm ">{item.location}</td>
    </tr>
  );

  return (
    <div className="w-screen h-[65vh]">
      <div className="max-w-[700px] h-full m-auto px-5 md:px-0 flex flex-col justify-center">
        <div className="flex justify-between items-end mb-5">
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl">Welcome, Admin</h2>
            <p className="">See the registered users below</p>
          </div>

          <div className="impact py-1 px-2 h-max rounded-lg flex justify-between items-center cursor-pointer text-white font-semibold">
            <span>Export CSV</span>
          </div>
        </div>
        <div className="w-full overflow-y-scroll">
          <Table columns={columns} renderRow={renderRow} data={signupData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;