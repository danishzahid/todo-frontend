import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

import axios from "axios";

import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import styles from "./Home.module.css"; // Import the CSS module

function Home() {
  // const addTask = () => {};
  // const deleteTask = () => {};
  // const updateTask = () => {};

  // const tasks = ["asn", "sSD", "adsf"];
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://todo-backend-rdhq.onrender.com/api/tasks/all"
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  const addTask = async () => {
    try {
      await axios.post("https://todo-backend-rdhq.onrender.com/api/tasks", {
        title: newTask, // Use 'title' instead of 'description'
      });
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(
        `https://todo-backend-rdhq.onrender.com/api/tasks/${taskId}`
      );
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const updateTask = async (taskId, title) => {
    try {
      await axios.put(
        `https://todo-backend-rdhq.onrender.com/api/tasks/${taskId}`,
        { title } // Use 'title' instead of 'description'
      );
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

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
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>
            <FaPlus />
          </button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task._id}>
              <span>{task.title}</span>{" "}
              {/* Use 'title' instead of 'description' */}
              <div>
                <button
                  onClick={() =>
                    updateTask(
                      task._id,
                      prompt("Update task:", task.title) // Use 'title' instead of 'description'
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
