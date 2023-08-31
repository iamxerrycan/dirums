import React, { useState } from "react";
import "./TaskPopup.css";

const TaskPopup = ({ onTaskSubmit }) => {
  const [taskDetails, setTaskDetails] = useState({
    description: "",
    date: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(taskDetails);
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, taskDetails];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTaskDetails({
      description: "",
      date: "",
      type: "",
    });
  };

  return (
    <div className="popupOverlay">
      <div className="taskPopup">
        <h2>Create a task for a team</h2>
          <form onSubmit={handleSubmit}>
            <div className="cardSame">
              <label>
                Add task description:
                <textarea
                className="textarea"
                  type="text"
                  style={{ resize: 'none' }}
                  name="description"
                  value={taskDetails.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="cardSame">
              <label>
                Due Date:
                <input
                  type="date"
                  name="date"
                  value={taskDetails.date}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="cardSame">
              <div className="checkboxContainer">
                <label className="checkboxLabel">
                    Status:
                  <input
                    type="radio"
                    name="type"
                    value="inProgress"
                    checked={taskDetails.type === "inProgress"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "inProgress" })
                    }
                  />
                  Progress
                </label>
              </div>
              <div className="checkboxContainer">
                <label className="checkboxLabel">
                  <input
                    type="radio"
                    name="type"
                    value="taskToDo"
                    checked={taskDetails.type === "taskToDo"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "taskToDo" })
                    }
                  />
                  Task to do
                </label>
              </div>
              <div className="checkboxContainer">
                <label className="checkboxlabel">
                  <input
                    type="radio"
                    name="type"
                    value="taskDone"
                    checked={taskDetails.type === "taskDone"}
                    onChange={() =>
                      setTaskDetails({ ...taskDetails, type: "taskDone" })
                    }
                  />
                  Task done
                </label>
              </div>
            </div>
            <div className="popupButtons">
              <button type="submit">Create Task</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default TaskPopup;
