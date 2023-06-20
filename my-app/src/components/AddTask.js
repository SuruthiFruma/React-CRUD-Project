import { useState } from "react";
const AddTask = ({onAdd}) => {
  const [project, setproject] = useState("");
  const [description, setdescription] = useState("");
  const [favourite, setfavourite] = useState(false);
  const onSubmit=(e)=>{
    e.preventDefault()
    onAdd({project,description,favourite})
    setproject('')
    setdescription('')
    setfavourite(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Project Name</label>
        <input
          type="text"
          placeholder="Enter the project name"
          value={project}
          onChange={(e) => {
            setproject(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label>Description </label>
        <input
          type="text"
          placeholder="Enter the Description "
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }} 
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Mark as favourite</label>
        <input
          type="checkbox"
          value={favourite}
          onChange={(e) => {
            setfavourite(e.currentTarget.checked);
          }}
        ></input>
      </div>
      <input
        className="btn btn-block"
        type="submit"
        value=" Save Project "
      ></input>
    </form>
  );
};

export default AddTask;
