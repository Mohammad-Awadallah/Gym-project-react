import { useState } from "react";

import Card from "./../UI/Card";
import Exersice from "./Exercise";
import ExersiceForm from "./ExerciseForm";
import "./WorkoutItem.css";

const WorkoutItem = (props) => {
  const [showExercise, setShowExercise] = useState(false);
  const [showForm , isShowForm] = useState(false)
  const showExerciseHandler = () => {
    setShowExercise((prev) => !prev);
  };
  const addExerciseHandler = ()=>{
    isShowForm(prev => {
        return !prev
    })
}

  return (
    <Card>
      <li className="item">
        <h1>
          {props.type}
          <span>{" day At " + props.date}</span>
        </h1>

        {showExercise && (
          <ul>
            {props.exercises.map((exercise) => {
              console.log(exercise.id);

              return (
                <Exersice
                  key={exercise.id}
                  id={exercise.id}
                  name={exercise.name}
                  setsReps={exercise.setsReps}
                />
              );
            })}
          </ul>
        )}

        <div className="actions">
          <button onClick={showExerciseHandler}>Show Exercises</button>
          <button onClick={addExerciseHandler}>Add exercise</button>
         
        </div>
        {showForm &&<ExersiceForm id={props.id} />}
      </li>
    </Card>
  );
};

export default WorkoutItem;
