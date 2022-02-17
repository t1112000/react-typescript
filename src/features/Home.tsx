import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="container-title">Eastplayers Test</h1>
      <div className="home">
        <Link className="home-item" to="./todo">
          <div className="home-item__item">
            <span>1</span>
            <span>Todo list</span>
          </div>
          <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5.64645 5.64645C5.84171 5.84171 5.84171 6.15829 5.64645 6.35355L1 11"
              stroke="#EF4638"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
        <Link className="home-item" to="./country">
          <div className="home-item__item">
            <span>2</span>
            <span>Country list</span>
          </div>
          <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5.64645 5.64645C5.84171 5.84171 5.84171 6.15829 5.64645 6.35355L1 11"
              stroke="#EF4638"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
