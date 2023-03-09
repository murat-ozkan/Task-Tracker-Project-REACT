import "./Main.css";
import axios from "axios";
import Button from "./Button";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";

const Main = () => {
  const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist";
  const [task, setTask] = useState([]);

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <div className="main d-flex justify-content-center align-items-center">
        <Button getTask={getTask}/>
      </div>
      <TaskList />
    </>
  );
};

export default Main;
