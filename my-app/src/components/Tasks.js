
import Task from "./Task"
const Tasks = ({task,onDelete}) => {
   
  return (
    <div className="tasks">
     {/* {task.map((item)=>(
        <h1 key={item.id}>{item.name}</h1>
     ))} */}

     {task.map((item)=>(
        <Task key={item} item={item} onDelete={onDelete}></Task>
     ))}

    </div>
  )
}

export default Tasks
