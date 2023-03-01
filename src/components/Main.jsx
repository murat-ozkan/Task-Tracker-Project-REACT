import "./Main.css";
import Button from "./Button";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Main = () => {
  return (
    <div className="bg-success">
      <Button />
      <AddTask />
      <TaskList/>
    </div>
  );
};

export default Main;
