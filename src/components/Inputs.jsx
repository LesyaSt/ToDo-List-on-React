import React, { useState, useEffect } from "react";
import "../styles/inputs.scss";

import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

function Inputs({ theme }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  // Використання useEffect для зміни класів на основі теми
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);
  useEffect(() => {
    const todoElement = document.getElementById('l-todo');
    const createTodo = document.getElementById('create-text');
    const clear = document.getElementById('light-clear');
    const threeOption = document.getElementById('three-option');
    if (todoElement) {
      // Зміна фону та кольору тексту в залежності від теми
      todoElement.style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)';
      createTodo.style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)';
    clear.style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)';
    threeOption.style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)';
    }
  }, [theme]); // Залежність від theme
  // Функція для додавання нового завдання
  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, { text: newTask.trim(), completed: false }]);
      setNewTask(''); // Очистка поля вводу після додавання
    }
  };

  // Функція для відмітки завдання як виконаного/невиконаного
  const toggleCompletion = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  // Функція для видалення завдання
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Обробка події Enter для додавання завдання
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Запобігає повторному виклику події Enter
      addTask();
    }
  };

  // Отримання відфільтрованих завдань
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks; // Усі завдання
    }
  };

  return (
    <section className="input">
      <div className="createInput" id="create-text">
        <button className="check"></button>
        <input
          className="inputText"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Create a new todo..."
        />
      </div>

      <div className="list-todo" id="l-todo">
        {tasks.length === 0 ? (
          <p className="noTask">No tasks added</p>
        ) : (
          getFilteredTasks().map((task, index) => (
            <div className="list-task" key={index}>
              <button
               className='done'
                // className="done"
                onClick={() => toggleCompletion(index)}
              >
                <img
                  src={check}
                  alt={task.completed ? "виконано" : "невиконано"}
                  style={{ display: task.completed ? 'block' : 'none' }}
                />
              </button>
              <span
                className="span"
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'hsl(236, 9%, 61%)' : 'hsl(235, 19%, 35%)'
                }}
              >
                {task.text}
              </span>
              <button className="cross" onClick={() => deleteTask(index)}>
                <img src={cross} alt="видалити" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="clear" id="light-clear">
        <button className="btn-item">{tasks.length} items left</button>
        <button
          className="btn-clear"
          onClick={() => setTasks(tasks.filter(task => !task.completed))}
        >
          Clear Completed
        </button>
      </div>

      <div className="select" id="three-option">
        {['all', 'active', 'completed'].map((option) => (
          <button
            key={option}
            className={filter === option ? 'active' : ''}
            onClick={() => setFilter(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Inputs; 
