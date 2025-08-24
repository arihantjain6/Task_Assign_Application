import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  //  console.log(authData.employees)
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 min-h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-sl font-medium  w-1/5">Employee Name</h2>
        <h3 className="text-sl font-medium  w-1/5">New Task</h3>
        <h5 className="text-sl font-medium  w-1/5">Active Task</h5>
        <h5 className="text-sl font-medium  w-1/5">Completed</h5>
        <h5 className="text-sl font-medium  w-1/5">Failed</h5>
      </div>
      <div className="min-h-[80%] overflow-auto">
        {userData.employees.map((elem, idx) => {
          const counts = elem.tasks?.reduce(
            (acc, t) => {
              if (t.active) acc.active += 1;
              if (t.newTask) acc.newTask += 1;
              if (t.completed) acc.completed += 1;
              if (t.failed) acc.failed += 1;
              return acc;
            },
            { active: 0, newTask: 0, completed: elem.completedTotal ?? 0, failed: elem.failedTotal ?? 0 }
          );

          return (
            <div
              key={idx}
              className="bg-transparent border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-sm font-medium w-1/5 text-white!">
                {elem.firstName}
              </h2>
              <h3 className="text-sm font-medium w-1/5 text-blue-600!">
                {counts.newTask}
              </h3>
              <h5 className="text-sm font-medium w-1/5 text-white!">
                {counts.active}
              </h5>
              <h5 className="text-sm font-medium w-1/5 text-yellow-400!">
                {counts.completed}
              </h5>
              <h5 className="text-sm font-medium w-1/5 text-red-600!">
                {counts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
