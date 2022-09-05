

import "./ExerciseForm.css"
import { useRef,useContext} from 'react'
import WorkoutsContext from '../../store/Workouts-context'


const ExersiceForm = (props)=>{


    const workoutsCtx = useContext(WorkoutsContext)
    
    const nameInputRef = useRef()
    const setsRepsInputRef = useRef()



    const formSubmitHandler = event =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredSetsReps = setsRepsInputRef.current.value;
        if(!enteredName || !enteredSetsReps){
            alert("please enter full info")
        }
        const setsrepsArray = enteredSetsReps.split(',')
        const idnumber = workoutsCtx.workouts[props.id].exercises.length;
        
        const newExercise = {id:idnumber,name:enteredName,setsReps:setsrepsArray,volume:50}
 
        workoutsCtx.addExercise(newExercise,props.id)
        nameInputRef.current.value=''
        setsRepsInputRef.current.value=''
    }

   

    return (
        <div className='exerForm'>
            
            <form onSubmit={formSubmitHandler}>

            <label htmlFor="name">Add Exercise Name</label>
                <input type='text' id="name" ref={nameInputRef} />

                <label htmlFor="setsReps">Add Sets and Reps</label>
                <input type='text' id="setsReps" ref={setsRepsInputRef} />

                <button>Add</button>

            </form>
        </div>
    )
}

export default ExersiceForm