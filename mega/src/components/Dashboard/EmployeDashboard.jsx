  import React from 'react';
  import Header from '../others/Header';
  import TasklistNumber from '../others/TasklistNumber';
  import TaskList from '../TaskList/TaskList';

  const EmployeDashboard = ({ data }) => {
    return (
      <div className="p-10 bg-[#1C1C1C] h-screen">
        {data && <Header data={data} />}
        <TasklistNumber data={data} />
        <TaskList data={data} />
      </div>
    );
  };

  export default EmployeDashboard;
