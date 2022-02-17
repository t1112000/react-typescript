import React, { useState } from "react";
import { Link } from "react-router-dom";

interface TaskProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

export const Todo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const taskNnotCompleted = tasks.filter((item) => !item.isCompleted).length;

  const CheckTask = (id: number) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTask);
  };

  const AddTask = (e: React.FormEvent) => {
    e.preventDefault();
    inputValue &&
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: new Date().getTime(), name: inputValue, isCompleted: false },
      ]);
    setInputValue("");
  };

  return (
    <div className="container">
      <h1 className="container-title">
        Todo list
        <Link className="container-icon" to="/">
          <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1.35355 5.64645C1.15829 5.84171 1.15829 6.15829 1.35355 6.35355L6 11"
              stroke="#262626"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </h1>
      <div className="todolist">
        <form className="todolist-form">
          <input
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={AddTask}>Add</button>
        </form>
        <div className="todolist-task">
          <h2 className="todolist-task__title">
            There are
            <span style={{ color: "#ef4638", fontWeight: "bold" }}>
              {taskNnotCompleted}
            </span>
            tasks left out of
            <span>{tasks.length}</span> tasks
          </h2>
          <ul className="todolist-task__list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={
                  task.isCompleted
                    ? "todolist-task__item completed"
                    : "todolist-task__item"
                }
                onClick={() => CheckTask(task.id)}
              >
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
