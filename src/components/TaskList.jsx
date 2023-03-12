import axios from "axios";
import "./TaskList.css";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div className="task-list">
      <div>
        {task.map((item) => {
          const { id, task, date } = item;
          return (
            <div>
              <div>
                <h4>{task}</h4>
                <p>{new Date(date).toLocaleDateString()}</p>
              </div>
              <div>
                <RiDeleteBack2Fill
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    // fontSize: "2rem",
                    // boxShadow: "3px 3px 5px green",
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
