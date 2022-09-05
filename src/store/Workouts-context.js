import { useState,createContext } from "react";



const DUMMY_DATA = [{
    id:0,
    date:"2018-01-01",
    type:"Push",
    exercises:[{id:0,name:'bench press',setsReps:['100*5','100*5','100*5']},{id:1,name:'bench press',setsReps:[3,3,3]}]
},
{
    id:1,
    date:"2018-01-02",
    type:"Pull",
    exercises:[]
}
]


const WorkoutsContext = createContext({
    workouts:[],
    totalLength:0,
    addWorkout:()=>{},
    removeWorkout:()=>{},
    addExercise:()=>{}
})


export const WorkoutsContextProvider = props =>{
   
    const [userWorkouts,setUserWorkouts] = useState(DUMMY_DATA)
    
    const addWorkoutHandler = (newWorkout) =>{
        setUserWorkouts(prev => {
            return prev.concat(newWorkout)
        })
    }

    const removeWorkoutHandler = (workoutId) =>{
        setUserWorkouts((prev) => {
            return prev.filter((workout) => workout.id !== workoutId);
          });   
    }

    const addExerciseHandler = (exercise,id)=>{
        
        setUserWorkouts(prev => {
            return prev.map(workout =>{
                if(workout.id === id){
                 workout.exercises.push(exercise)
                }
                return workout
            })
        })
        
       
       
    }

    const context = {
        workouts:userWorkouts,
        totalLength:userWorkouts.length,
        addWorkout:addWorkoutHandler,
        removeWorkout:removeWorkoutHandler,
        addExercise:addExerciseHandler
    }

    return (
        <WorkoutsContext.Provider value={context}>
            {props.children}
        </WorkoutsContext.Provider>
    )
}

export default WorkoutsContext