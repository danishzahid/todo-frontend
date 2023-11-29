import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import styles from "./Home.module.css"; // Import the CSS module

function Home() {
  const addTask = () => {};
  const deleteTask = () => {};
  const updateTask = () => {};

  const tasks = ["asn", "sSD", "adsf"];

  return (
    <>
      <Header />
      <Profile />
      <div className={styles.tasksContainer}>
        <h1>Task Manager</h1>
        <div className={styles.taskInputContainer}>
          <input
            type="text"
            placeholder="Add a new task"
            // value={newTask}
            // onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>
            <FaPlus />
          </button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task._id}>
              <span>{task.description}</span>
              <div>
                <button
                  onClick={() =>
                    updateTask(
                      task._id,
                      prompt("Update task:", task.description)
                    )
                  }
                >
                  <FaEdit />
                </button>
                <button onClick={() => deleteTask(task._id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Home;
