import "./Button.css";
import React, { useState } from "react";
import AddTask from "./AddTask";

const Button = () => {
  const [showTasks, setShowTasks] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setShowTasks(!showTasks);
  };

  return (
    <div>
      <button className="button" type="submit" onClick={toggle}>
        {showTasks ? "Hide Adding Task" : "Show Adding Task"}
      </button>
      {showTasks && <AddTask />}
    </div>
  );
};

export default Button;
