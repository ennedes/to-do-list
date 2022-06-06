import React, { useState, useEffect}  from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Form, Input, Button } from 'antd';
import Footer from '../../components/Footer/Footer';


const NewTask = () => {

  const [check, setCheck] = useState(false);
  const [error, setError] = useState('');

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
    if (/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,30}$/.test(e.target.value)) {
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
    
  function addTask() {
    setTasks([
      ...tasks,
      {
        id: Math.max(...tasks.map(x => x.id)) + 1,
        text: task,
      }
    ]);
    setError('Task added!');
    setCheck(false);

    // return setTask("");
  }

  function clear() {
    setTask('');
    setCheck(false);
    setError('');
  }


  function handleSubmit() {
    if (tasks.length < 10 && task != '') {
      if (tasks.some(x => x.text === task)) {
        setError('Task is already listed');
      } else {
        addTask();
      }
    } else {
      setError('Task limit reached (10)');
    }
    // clear out the input box
    setTask('');
    setCheck(false);
  }

  return (
    <>
      <Navbar />
      <div>
        <div className='page-title'>
          <h1>
            Add a new task:
          </h1>
        </div>

        <div className='form-container'>
          <Form
            name="new-task-form"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 18,
            }}
          >
            <Form.Item
              label="Task name"
              name="task-name"
              value={task}
              onChange={handleTasks}
            >
              <Input />
            </Form.Item>

      

            <br />
            <br />
          </Form>
          <Button 
            type='type' 
            onClick={() => handleSubmit()}
            disabled={!check}
          >
            Add!
          </Button>

          <p>{error}</p>
          </div>
        </div>
        <Footer />
    </>
  )
};


export default NewTask;