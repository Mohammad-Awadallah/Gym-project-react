import WorkoutItem from "./WorkoutItem";
import { useContext } from "react";
import WorkoutsContext from "../../store/Workouts-context";
import "./WorkoutList.css";
const WorkoutList = (props) => {
  const workoutCtx = useContext(WorkoutsContext);

  return (
    <ul className="list">
      {workoutCtx.workouts.map((workout) => {
        return (
          <WorkoutItem
            key={workout.id}
            id={workout.id}
            type={workout.type}
            date={workout.date}
            exercises={workout.exercises}
          />
        );
      })}
    </ul>
  );
};

export default WorkoutList;
