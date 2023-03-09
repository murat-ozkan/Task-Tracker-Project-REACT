import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddTask.css";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskPack = { newTask, date };
    setNewTask("");
    setDate("");
    console.log(newTaskPack);
  };

const addNewTask = async(newTaskPack) => {
  const url = "https://640217daab6b7399d0b39f20.mockapi.io/api/tasklist";
try {
  await axios.post(url, newTaskPack)
} catch (error) {
  console.log(error);
}
}

  return (
    <Form onSubmit={handleSubmit} className="form text-center">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTask;

//*
//     <Form >
//       <div>
//         <label htmlFor="input" ></label>
//         <input

//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="date" className="form-label"></label>
//         <input type="date" className="form-control" id="date" />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </Form>
//   );
// };

//*
