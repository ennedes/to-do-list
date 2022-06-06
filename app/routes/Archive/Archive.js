import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Archive = () => {

  const [tasksDone, setTasksDone] = useState(() => {
    const savedTasksDone = localStorage.getItem("tasksDone");

    if (savedTasksDone) {
      return JSON.parse(savedTasksDone); 
    } else {
      return [];
    }
  });

      
        return (
          <>
          <Navbar />
          <div className="App">
              <h1>Tasks you have completed:</h1>
            <ul className="todo-list">
            {tasksDone.map((task) => (
          <li key={task.id}>{task.text}</li>
            ))}
            </ul>
          </div>
        </>
    );
};

export default Archive;