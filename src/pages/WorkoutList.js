
import WorkoutList from "../components/Workout/WorkoutList"
import WorkoutListForm from "../components/Workout/WorkoutListForm"
import React from "react"



const WorkoutListpage = ()=>{

    

    return(
        <React.Fragment>
        <WorkoutListForm/>
        <WorkoutList  />
        </React.Fragment>
       
    )

}


export default WorkoutListpage