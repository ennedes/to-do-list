import React, { useState, useRef, useEffect }  from 'react';
import Navbar from '../../components/Navbar';


const NewTask = () => {

    const [task, setTask] = useState('');

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
          return JSON.parse(savedTasks); 
        } else {
          return [];
        }
      });

    let id = -1;

    const handleTasks = (e) => {
        setTask(e.target.value);
    };

    useEffect(() => {
        // storing input name
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    

      function handleSubmit() {
        // prevent the browser default behavior or refreshing the page on submit
    
        if (task !== "") {
          setTasks([
            ...tasks,
            {
              id: tasks.length + 1,
              text: task,
            }
          ]);
        }

    
        // clear out the input box
        setTask("");
    }

    return (
        <>
        <Navbar />
            <h1>
                Add a new task:
            </h1>

            <form>
                <label>Title:</label>
                <input
                    type='text' 
                    value={task}
                    onChange={handleTasks}
                />
                <br />
                <br />
            </form>
            <button type='type' onClick={() => handleSubmit()}>Add!</button>
        </>
    )
};


export default NewTask;