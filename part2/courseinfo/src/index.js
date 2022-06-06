import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Course = (props) => {
  console.log('props pasadas a course',props); 
  
  /* <div>
  {parts.map((part) => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ))}
</div> */
  
  return (
    <>
      <Header name={props.course[0].name} />
      <Content parts={props.course[0].parts} />
      <Total total={props.course[0].parts} />
    </>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ total }) => {
  let suma = total
    .map((total) => total.exercises)
    .reduce((prev, curr) => prev + curr, 0);
  return <p> Total of {suma} exercises</p>;
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return <Course course={courses} />;
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
