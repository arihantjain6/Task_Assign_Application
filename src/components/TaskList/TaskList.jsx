import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [authData, setUserData] = useContext(AuthContext);
  const employeeEmail = data.email;

  const deleteTask = (taskIdx) => {
    const taskToDelete = data.tasks[taskIdx];
    const updatedEmployees = authData.employees.map((emp) => {
      if (emp.email !== employeeEmail) return emp;

      // clone counters or initialise if missing
      const completedTotal = emp.completedTotal ?? emp.tasks.filter(t=>t.completed).length;
      const failedTotal = emp.failedTotal ?? emp.tasks.filter(t=>t.failed).length;

      let newCompletedTotal = completedTotal;
      let newFailedTotal = failedTotal;
      if (taskToDelete.completed) newCompletedTotal += 1;
      if (taskToDelete.failed) newFailedTotal += 1;

      const updatedTasks = emp.tasks.filter((_, idx) => idx !== taskIdx);
      return { ...emp, tasks: updatedTasks, completedTotal: newCompletedTotal, failedTotal: newFailedTotal };
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  
  const updateTask = (taskIdx, newFlags) => {
    const updatedEmployees = authData.employees.map((emp) => {
      if (emp.email !== employeeEmail) return emp;
      const updatedTasks = emp.tasks.map((t, idx) =>
        idx === taskIdx ? { ...t, ...newFlags } : t
      );
      return { ...emp, tasks: updatedTasks };
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onComplete={() => updateTask(idx, { active: false, completed: true })}
              onFail={() => updateTask(idx, { active: false, failed: true })}
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              onAccept={() => updateTask(idx, { newTask: false, active: true })}
            />
          );
        }
        if (elem.completed) {
          return (
            <CompleteTask key={idx} data={elem} onDelete={() => deleteTask(idx)} />
          );
        }
        if (elem.failed) {
          return (
            <FailedTask key={idx} data={elem} onDelete={() => deleteTask(idx)} />
          );
        }
      })}
    </div>
  );
};

export default TaskList;
