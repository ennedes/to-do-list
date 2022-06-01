import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Dashboard = () => {

  const [task, setTask] = useState('');

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
          return JSON.parse(savedTasks); 
        } else {
          return [];
        }
      });

      const [tasksDone, setTasksDone] = useState(() => {
        const savedTasksDone = localStorage.getItem("tasksDone");

        if (savedTasksDone) {
          return JSON.parse(savedTasksDone); 
        } else {
          return [];
        }
      });

      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

      const handleComplete = (id) => {
        const removeItem = tasks.filter((task) => {
          setTasksDone([
            ...tasksDone,
            {
              id: tasksDone.length + 1,
              text: task.text,
            }
          ]);

          return task.id !== id;
        });

        setTasks(removeItem);

      };

      useEffect(() => {
        // storing input name
        localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
      }, [tasksDone]);

    return (
        <>
        <Navbar />
            <h1>
                Welcome to your dashboard!
            </h1>
            {/* today's tasks in cards layout */}

            {tasks.map((task) => (
              <li key={task.id} style={{ listStyleType: 'none' }}>
                <input type='checkbox' onChange={() => handleComplete(task.id)}/>
                {task.text}
              </li>
            ))}

            {/* <Cards /> */}
            <Footer />
        </>
    )
};


export default Dashboard;