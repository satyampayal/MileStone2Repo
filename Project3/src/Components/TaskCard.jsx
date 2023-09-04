import React from 'react'
import { useState } from 'react';
function TaskCard({ item,edit,index,id}) {
  const [isComplted, setIsCompleted] = useState(false);
  const [allUserTask, setAllUserTask] = useState([]);

const editTaskHandler = (id) => {
  const editData = localStorage.getItem('project3');
  const TaskList = JSON.parse(editData);
  console.log(id)
  const newTaskList = TaskList.filter((item) => {
    return id !== item.id
  })
  localStorage.setItem('project3',JSON.stringify(newTaskList));
  console.log(newTaskList);
}

  const isCompltedHandler = () => {
    // alert("I am clicked")
    setIsCompleted(!isComplted)

  }
  return (
    <div className='w-[250px] px-[20px] py-[10px] border-white border-[1px] 
    rounded-[5px] text-white  bg-[rgba(0,0,0,0.3)] capitalize'>
      <h1 className='text-[24px]'><span className='text-[16px] mr-4'>{index}</span>{item.task}</h1>
      <p className=' text-start mb-4 mt-6 text-[20px] '>status:{isComplted ? '  completed' : '  pending'}</p>
      <button type='button' className='bg-fuchsia-900 w-[100%] border-none rounded-[5px]  mb-4
             py-[8px]'
        onClick={isCompltedHandler}
      >Update status</button>
      <br />
      <button 
      // onClick={()=>editTaskHandler(item.id)}
      onClick={edit}
        type='button' className='bg-fuchsia-900 w-[100%] border-none rounded-[5px]  mb-6
             py-[8px]'>Remove</button>
    </div>
  )
}

export default TaskCard