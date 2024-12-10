import React from "react";

function Emergency() {
  const data = [
    {
      id: 1,
      title: "Engine",
      description: "One of the engine vessel bad",
      cost: "80,000.00",
      date: "21/05/2024",
    },
    {
      id: 1,
      title: "Windscreen",
      description: "Windscreen was replaced",
      cost: "120,000.00",
      date: "23/05/2024",
    },
    {
      id: 1,
      title: "Engine",
      description: "One of the engine vessel bad",
      cost: "80,000.00",
      date: "21/05/2024",
    },
    {
      id: 1,
      title: "Windscreen",
      description: "Windscreen was replaced",
      cost: "120,000.00",
      date: "23/05/2024",
    },
  ];
  return (
    <div className="overflow-hidden overflow-x-scroll">
      <table className="w-full text-[18px] text-center  ">
        <thead className="text-[18px] text-primary bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              S/N
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Cost
            </th>

            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>

            {/* <th scope="col" className="px-6 py-3">
                                      <span className="sr-only">Actions</span>
                                  </th> */}
          </tr>
        </thead>

        <tbody>
          {data.map((datas, index) => (
            <tr
              key={index}
              className={`bg-white ${
                index % 2 === 0 ? "" : "bg-[#D9D9D930]/[19%]"
              }`} // Apply bg-gray-200 to even rows
            >
              <td className="px-6 py-4">{index + 1}</td>

              <td className="px-6 py-4">{datas?.title}</td>
              <td className="px-6 py-4">{datas?.description}</td>
              <td className="px-6 py-4">{datas?.cost}</td>
              <td className="px-6 py-4">{datas?.date}</td>
              <td className="px-6 py-4">View</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="text-primary underline text-center text-sm pt-4">
        View All
      </h4>
    </div>
  );
};

export default Emergency;
