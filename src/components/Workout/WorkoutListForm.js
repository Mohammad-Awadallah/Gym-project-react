
import { useRef,useContext } from "react";
import WorkoutsContext from "../../store/Workouts-context";

import Card from './../UI/Card';
import './WorkoutListForm.css';

const WorkoutListForm = ()=>{

    const workoutsCtx = useContext(WorkoutsContext)
    const inputType = useRef();
    const inputDate = useRef();

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredType = inputType.current.value;
        const enteredDate = inputDate.current.value;
        if(!enteredType || !enteredDate){
            alert("please enter full info");
            return;
        }
        workoutsCtx.addWorkout({id:workoutsCtx.totalLength,date:enteredDate,type:enteredType,exercises:[]})
        inputType.current.value=''
        inputDate.current.value=''
    }


    return (
        <Card class="totalForm" >
            <h1>Start new Workout</h1>
       
        <form className="form" onSubmit={formSubmitHandler}>
            <label htmlFor="type" >Type</label>
            <input type='text' id='type' ref={inputType} />
            <label htmlFor="date" >Date</label>
            <input type='date' id='date' ref={inputDate} />
            <button type="submit">Start Workout</button>
        </form>
        </Card>
    )


}



export default WorkoutListForm