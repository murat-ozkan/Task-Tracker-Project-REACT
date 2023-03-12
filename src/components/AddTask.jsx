import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddTask.css";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [showTasks, setShowTasks] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setShowTasks(!showTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskPack = { task, date };
    addTask(taskPack);
    setTask("");
    setDate("");
    console.log(taskPack);
  };

  const addTask = async (taskPack) => {
    const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist";
    try {
      await axios.post(url, taskPack);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <>
      <div className="text-center">
        <button className="button" onClick={toggle}>
          {showTasks ? "Hide Adding Task" : "Show Adding Task"}
        </button>
        {showTasks && (
          <Form onSubmit={handleSubmit} className="form text-center">
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <button type="submit" id="button">
              Add Task
            </button>
          </Form>
        )}
      </div>
    </>
  );
};

export default AddTask;
