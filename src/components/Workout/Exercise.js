

const Exersice = props => {

    return  <li>
                <h1>{props.name}</h1>
                {props.setsReps.map(rep => <p key={(props.id+1)*Math.random()}>reps is {rep}</p>)}
                
            </li>
      
   
    
}

export default Exersice