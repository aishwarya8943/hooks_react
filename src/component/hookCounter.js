import React,{useState} from 'react'



function HookCounter(){

    const [count,setCount] = useState(0)    //array destructing 
    //count = current state.
    //setCount = method that could change the current state.
    

    return(
        <div>
            {/* <button onClick = {() => setCount(count +1)}>Count {count} </button> */}
            {/* <button onClick ={() => setCount(count +1)}>Count {count}</button> */}
            <button onClick ={()=>setCount(count+1)}>Count {count} </button>
        </div>

    )
}


export default HookCounter