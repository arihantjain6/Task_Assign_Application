import React from 'react'

const TaskListNumbers = ({ data }) => {
  const counts = data.tasks?.reduce(
    (acc, t) => {
      if (t.active) acc.active += 1;
      if (t.newTask) acc.newTask += 1;
      if (t.completed) acc.completed += 1;
      if (t.failed) acc.failed += 1;
      return acc;
    },
    { active: 0, newTask: 0, completed: data.completedTotal ?? 0, failed: data.failedTotal ?? 0 }
  );

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 px-9  bg-blue-400">
        <h2 className="text-xl font-bold">{counts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9  bg-green-400">
        <h2 className="text-xl font-bold">{counts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9  bg-yellow-400">
        <h2 className="text-xl font-bold">{counts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9  bg-red-400">
        <h2 className="text-xl font-bold">{counts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers
