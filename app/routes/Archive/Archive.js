import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
          <div className='list'>
            <div className='page-title'>
              <h1>Tasks you have completed:</h1>
            </div>
            <ul className="todo-list">
              {tasksDone.map((task) => (
                <li key={task.id}>
                  {task.text}
                </li>
                
              ))}
            </ul>

          </div>
          <Footer />
        </>
    );
};

export default Archive;
