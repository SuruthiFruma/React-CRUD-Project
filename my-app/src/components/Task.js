import {FaTimes} from 'react-icons/fa'

const Task = ({item,onDelete}) => {
  return (
    <div className="task">
      <h3>{item.name} <FaTimes onClick={()=>{onDelete(item.id)}} style={{color:'red',cursor:'pointer'}}/></h3>
      <p>{item.description}</p>
    </div>
  )
}

export default Task
