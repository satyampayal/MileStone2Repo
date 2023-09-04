import { useEffect, useState } from 'react'
import './App.css'
import TaskCard from './Components/TaskCard';
// local storage me data kase send kare .. kuch ase learn this 
var TASKDATA = [];
var id = 0;
var card = []
function App() {
  const [task, setTask] = useState('');
  const [isComplted, setIsCompleted] = useState(false);
  const [allUserTask, setAllUserTask] = useState([]);

  //console.log(task[0])
  // get data frm ls
  const getTaskFromLS = () => {
    const allTask = localStorage.getItem('project3');

    setAllUserTask(JSON.parse(allTask));
    // allUserTask.map((item) => console.log(item));
    //  console.log(allUserTask.length);
  }
  ///////  data send to   LS
  const addTaskHandler = () => {
    if (task !== '') {
      id = id + 1
      var taskfinal = {
        task,
        isComplted,
        id
      }
      TASKDATA.push(taskfinal)


      localStorage.setItem('project3', JSON.stringify(TASKDATA));
      setTask('')

    }
    // get Data from ls
    getTaskFromLS();
  }

  // delete task from ls 
  const editTaskHandler = (id) => {
    const editData = localStorage.getItem('project3');
    const TaskList = JSON.parse(editData);
    console.log(id)
    const newTaskList = TaskList.filter((item) => {
      return id !== item.id
    })
    TASKDATA = TASKDATA.filter((item) => {
      return id !== item.id
    })
    localStorage.setItem('project3', JSON.stringify(newTaskList));
    //  console.log(TASKDATA);
    const allTask = localStorage.getItem('project3');
    console.log("TASK DATA->>", TASKDATA)

    setAllUserTask(JSON.parse(allTask));
  }
  //    const isCompltedHandler = (id) => {
  //      // alert("I am clicked")
  //    setIsCompleted(!isComplted)
  //  }
  useEffect(() => {
    getTaskFromLS();
  }, [])

  return (
    <div className=' color  '>
      <div className='mt-[20px] grid justify-center'>
        <div className='  w-fit  border-[1px] rounded-[6px] px-[30px] py-[15px]  bg-white'>
          <input type="text" name="task" id="task"
            placeholder='Add your new task '
            value={task}
            onChange={(e) => setTask((e.target.value))}
            className=' px-3 py-1  border-b-[1px]   w-[20vw] mr-2  '
          />
          <button type="button"
            className='border-none rounded-[5px] bg-fuchsia-900  text-white px-[16px] py-[6px]'
            onClick={addTaskHandler}
          >
            Add
          </button>
        </div>
      </div>

      {
        // card of task 
      }
      <div className='mt-[50px] h-[100vh]  w-[1240px] mx-auto'>
        <div className='px-[2rem] py-[2rem] grid grid-cols-4 gap-3'>
          {allUserTask.length > 0 ? allUserTask.map((item, idx) => <TaskCard key={item.id} index={idx + 1} item={item} edit={() => editTaskHandler(item.id)} />)
            : <h1 className='text-white'>No Task Added yet </h1>
          }


        </div>
      </div>

    </div>
  )
}

export default App
