import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 bg-red-600">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 bg-red-600">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Compeleted</h5>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Failed</h5>
      </div>
      <div className="">
        {authData.employees.map(function (elem) {
          return (
            <div
              key={elem.id}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded "
            >
              <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white-600">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
