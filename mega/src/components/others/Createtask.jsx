  import React, { useState } from 'react';

  const Createtask = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignee, setAssignee] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [task, setTask] = useState([]);

    const submithandler = (e) => {
      e.preventDefault();
    
      const newTask = {
        title,
        date,
        assignee,
        category,
        description,
        active: false,
        newTask: true,
        completed: false,
        failed: false
      };
    
      setTask([...task, newTask]);
      
      const data = JSON.parse(localStorage.getItem("employees"));
      data.forEach(elem => {
        if (assignee === elem.firstName) {
          elem.tasks = elem.tasks || []; // Ensure tasks array exists
          elem.tasks.push(newTask);
          elem.taskCounts.newTask=elem.taskCounts.newTask+1
        }
      });
    
      localStorage.setItem("employees", JSON.stringify(data));
    
      // Clear form fields
      setTitle("");
      setDate("");
      setAssignee("");
      setCategory("");
      setDescription("");
    };
    
    return (
      <div className='flex mt-10 items-center justify-center w-full h-[60%]'>
        <div className='border-2 border-emerald-600 p-8 rounded-lg shadow-lg bg-[#1c1c1c] max-w-4xl w-full'>
          <form onSubmit={submithandler} className='flex justify-between'>
            <div className='w-1/2 pr-10'>
              <h3 className='text-emerald-600 text-lg font-semibold mb-1'>Task Title</h3>
              <input 
                type="text" 
                placeholder='Enter Title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full mb-3 px-3 py-1 border border-white bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
              />

              <h3 className='text-emerald-600 text-lg font-semibold mb-1'>Date</h3>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='w-full mb-3 px-3 py-1 border border-white bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
              />

              <h3 className='text-emerald-600 text-lg font-semibold mb-1'>Assign to</h3>
              <input 
                type="text" 
                placeholder='Enter Employee' 
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className='w-full mb-3 px-3 py-1 border border-white bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
              />

              <h3 className='text-emerald-600 text-lg font-semibold mb-1'>Category</h3>
              <input 
                type="text" 
                placeholder='Design, Dev, etc.' 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full mb-3 px-3 py-1 border border-white bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
              />
            </div>

            <div className='w-1/2 pl-3'>
              <h3 className='text-emerald-600 text-lg font-semibold mb-1'>Description</h3>
              <textarea 
                cols="30" 
                rows="6" 
                placeholder='Description' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full mb-3 px-3 py-1 border border-white bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
              ></textarea>

              <button 
                type="submit" 
                className='w-full py-1 bg-emerald-600 text-black rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 font-semibold'
              >
                Create Task
              </button>
            </div>
          </form>

          {/* Optional: Display the list of created tasks */}
          <div className='mt-5'>
            <h3 className='text-emerald-600 text-lg font-semibold'>Created Tasks:</h3>
            <ul className='text-white'>
              {task.map((t, index) => (
                <li key={index} className='border-b border-emerald-600 py-2'>
                  <strong>{t.title}</strong> - {t.date} - {t.assignee} - {t.category}
                  <p>{t.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  export default Createtask;
