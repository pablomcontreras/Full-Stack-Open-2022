import React from "react";


export const Course = (props) => {
  // console.log("props pasadas a course", props);

  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={props.course.parts} />
    </>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
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

 const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
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

