import React, { useContext, useMemo } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [authData] = useContext(AuthContext)

  const employee = useMemo(() => {
    if (!authData || !authData.employees) return null;
    return authData.employees.find((e) => e.email === props.data.email);
  }, [authData, props.data.email]);

  return (
    <>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={employee} />
        {employee && (
          <>
            <TaskListNumbers data={employee} />
            <TaskList data={employee} />
          </>
        )}
      </div>
    </>
  )
}

export default EmployeeDashboard
