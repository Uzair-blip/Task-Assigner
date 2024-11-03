import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data || !data.tasks) return null;

  return (
    <div id="tasklist" className="mt-10 h-[55%] flex overflow-x-auto items-center justify-start flex-nowrap gap-10 w-full">
      {data.tasks.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />;
        if (elem.NewTask) return <NewTask key={idx} data={elem}/>;
        if (elem.completed) return <CompleteTask key={idx} data={elem} />;
        if (elem.failed) return <FailedTask key={idx} data={elem} />;
        return null;
      })}
    </div>
  );
};


export default TaskList