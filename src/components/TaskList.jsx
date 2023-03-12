import axios from "axios";
import "./TaskList.css";
import { TiDelete } from "react-icons/ti";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
    console.log("task");
  };

  return (
    <div className="task-list">
      <div>
        {task.map((item) => {
          const { id, task, date } = item;
          return (
            <div key={id} className="d-flex justify-content-between mx-5 mb-1">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{task}</h4>
                  <p>{new Date(date).toLocaleDateString()}</p>
                </div>
              </div>
              <div>
                <TiDelete className="deleteIcon"
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    fontSize: "2rem",
                    color: "#e3371e",
                  }}
                  onClick={() => deleteTask(id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
