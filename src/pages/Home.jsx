import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import axios from "axios";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import styles from "./Home.module.css";

function Home() {
  const [allTasks, setAllTasks] = useState([]);
  const [myTasks, setMyTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showAllTasks, setShowAllTasks] = useState(true);

  useEffect(() => {
    fetchAllTasks();
    fetchUserTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/tasks/all`,
        { withCredentials: true }
      );
      setAllTasks(response.data);
      console.log("all", response.data);
    } catch (error) {
      console.error("Error fetching all tasks:", error.message);
    }
  };

  const fetchUserTasks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/tasks/myTasks`,
        { withCredentials: true }
      );
      setMyTasks(response.data);
      console.log("my", response.data);
    } catch (error) {
      console.error("Error fetching user tasks:", error.message);
    }
  };

  const addTask = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_APIURL}/api/tasks`,
        { title: newTask },
        { withCredentials: true }
      );
      setNewTask("");
      toast.success("Task added successfully!");
      fetchAllTasks();
      fetchUserTasks();
    } catch (error) {
      console.error("Error adding task:", error.message);
      toast.error("Failed to add task. Please try again.");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_APIURL}/api/tasks/${taskId}`,
        { withCredentials: true }
      );
      toast.success("Task deleted successfully!");
      fetchAllTasks();
      fetchUserTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
      toast.error("Failed to delete task. Please try again.");
    }
  };

  // const updateTask = async (taskId, title) => {
  //   try {
  //     await axios.put(
  //       `${process.env.REACT_APP_APIURL}/api/tasks/${taskId}`,
  //       { title },
  //       { withCredentials: true }
  //     );
  //     toast.success("Task updated successfully!");
  //     fetchAllTasks();
  //     fetchUserTasks();
  //   } catch (error) {
  //     console.error("Error updating task:", error.message);
  //     toast.error("Failed to update task. Please try again.");
  //   }
  // };

  const updateTask = async (taskId, title, completed) => {
    try {
      // Make a PUT request to update task status
      await axios.put(
        `${process.env.REACT_APP_APIURL}/api/tasks/${taskId}`,
        {
          title,
          completed, // Toggle the completed status
        },
        { withCredentials: true }
      );

      // Display success toaster
      toast.success("Task updated successfully!");

      // Fetch updated tasks
      fetchAllTasks();
    } catch (error) {
      console.error("Error updating task:", error.message);

      // Display error toaster
      toast.error("Failed to update task. Please try again.");
    }
  };

  const toggleTasks = () => {
    setShowAllTasks((prev) => !prev);
  };

  const tasksToShow = showAllTasks ? allTasks : myTasks;

  return (
    <>
      <Header />
      <Profile />
      <div className={styles.tasksContainer}>
        <h1>Task Manager</h1>
        <div className={styles.toggleButton}>
          <button onClick={toggleTasks}>
            {showAllTasks ? "My Tasks" : "All Tasks"}
          </button>
        </div>
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
          {tasksToShow.map((task) => (
            <li key={task._id}>
              <span>{task.title}</span>
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    const newStatus = !task.completed;
                    updateTask(task._id, task.title, newStatus);
                  }}
                />
                <button
                  onClick={() =>
                    updateTask(task._id, prompt("Update task:", task.title))
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
