import "./AddTask.css";
import { useState } from "react";

const AddTask = () => {


  return (
    <div className="add-task" style={{ width: "400px" }}>
      <form className="form">
        <div className="mb-3">
          <label htmlFor="input" className="form-label">
            Task
          </label>
          <input type="text" className="form-control" id="input" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" id="date" />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
