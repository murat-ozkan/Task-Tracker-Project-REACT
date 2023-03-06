import "./Main.css";
import Button from "./Button";
import TaskList from "./TaskList";
import { useEffect } from "react";

const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist"
const Main = () => {
  const getTask = async () => {
    const data = await axios(url, data);
  };
  useEffect(() => {
    getTask();
  }, []);
  return (
    <>
      <div className="main d-flex justify-content-center align-items-center">
        <Button />
      </div>
      <TaskList />
    </>
  );
};

export default Main;
