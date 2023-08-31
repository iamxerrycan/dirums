import React, { useState, useEffect } from "react";
import "./Task.css";
import logo from '../Logo/bird.png'

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const taskData = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("storedTasks==" ,storedTasks);
    setTasks(storedTasks);
  };

  useEffect(() => {
    taskData();
    const updateTasks = setInterval(taskData, 100);
    return () => {
      clearInterval(updateTasks);
    };
  }, []);

    const colors = ["#06D6A0", "#30B7E3", "#FFD166", "#EF476F"];
    const fourColor = (index) => {
      return colors[index % colors.length];
    };

  return (
    <div className="taskContainer">
      <div className="lopTaskHeading">
        <img src={logo} style={{ width: "155px", height: "67px" }}  alt="" />
        <div className="vertical-linet"></div>
        <p>Website Devloper Tracker</p>
      </div>

      <div className="taskDivFlex">
        <div className="taskStart">
          <h3 id="taskHeadingg">Task to do</h3>
          <hr className="horiLine" />
          {tasks
            .filter((task) => task.type === "taskToDo")
            .map((task, index) => (
              <div
                key={index}
                className="taskCard"
                style={{ backgroundColor: fourColor(index) }}
              >
                <h4>{task.description}</h4>
                <p>Due Date:{task.date}</p>
              </div>
            ))}
        </div>
        <div className="taskInProgress">
          <h3 id="taskHeadingg">In progress</h3>
          <hr className="horiLine" />
          {tasks
            .filter((task) => task.type === "inProgress")
            .map((task, index) => (
              <div
                key={index}
                className="taskCard"
                style={{ backgroundColor: fourColor(index) }}
              >
                <h4>{task.description}</h4>
                <p>Due Date:{task.date}</p>
              </div>
            ))}
        </div>
        <div className="taskDone">
          <h3 id="taskHeadingg">Task done</h3>
          <hr className="horiLine" />
          {tasks
            .filter((task) => task.type === "taskDone")
            .map((task, index) => (
              <div
                key={index}
                className="taskCard"
                style={{ backgroundColor: fourColor(index) }}
              >
                <h4>{task.description}</h4>
                <p>Due Date:{task.date}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
