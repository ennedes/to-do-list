import React, { useState, useRef, useEffect }  from 'react';
import Navbar from '../../components/Navbar';


const NewTask = () => {

  const [check, setCheck] = useState(false);
  const [error, setError] = useState('');
  const taskRef = useRef('');

  const [task, setTask] = useState('');

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks); 
    } else {
      return [];
    }
  });

  const handleTasks = (e) => {
    if (/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,30}$/.test(taskRef.current.value)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    setTask(e.target.value);
  };

  useEffect(() => {
      // storing input name
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    

  function handleSubmit() {

    if (tasks.length < 10 && task != '') {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: task,
        }
      ]);
    } else {
      setError('Task limit reached (10)');
    }
    // clear out the input box
    setTask("");
    setCheck(false);
  }

  return (
    <>
      <Navbar />
        <h1>
          Add a new task:
        </h1>

        <form>
          <label>Task name:</label>
          <input
            type='text' 
            value={task}
            onChange={handleTasks}
            ref={taskRef}
          />
          <br />
          <br />
        </form>
        <button 
          type='type' 
          onClick={() => handleSubmit()}
          disabled={!check}
        >
          Add!
        </button>

        <p>{error}</p>
    </>
  )
};


export default NewTask;