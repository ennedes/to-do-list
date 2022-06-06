import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/Card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Checkbox } from 'antd';
import { Modal, Button } from 'antd';
import { Card } from 'antd';

const Dashboard = () => {

  const [task, setTask] = useState('');
  const [id, setId] = useState();

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 251, 199, 0.973)',
  };

  // MODAL //
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
      setIsModalVisible(true);
      setId(id);
      console.log(id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    handleComplete();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  }; 
  // END MODAL /

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


  useEffect(() => {
    // storing input name
    localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
  }, [tasksDone]);

  const handleComplete = (id) => {
    const removeItem = tasks.filter((task) => {
      if (task.id == id)
      {
        setTasksDone([
          ...tasksDone,
          {
            id: tasksDone.length + 1,
            text: task.text,
          }
        ]);
      }
      console.log(id);
      return task.id !== id;
    });

    setTasks(removeItem);
    setIsModalVisible(false);
  };


  return (
    <>
      <Navbar />
      <div className='page-title'>
        <h1>
          Welcome to your dashboard!
        </h1>
      </div>
      {/* today's tasks in cards layout */}

      {tasks.map((task) => (
        <li key={task.id} style={{ listStyleType: 'none' }}>
          <div className='list'>
            <Card.Grid style={gridStyle}>
              <Checkbox onClick={() => showModal(task.id)} /> {task.text}
            </Card.Grid>
          </div>
        </li>
      ))}

      <Modal 
        title="Task completed!"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            I'm not done yet
          </Button>,
          <Button key="submit" type="primary" onClick={() => handleComplete(id)}>
            Send to Archive
          </Button>
        ]}
      >
        <p>Good job!</p>
      </Modal>
      <Footer />
    </>
  )
};


export default Dashboard;