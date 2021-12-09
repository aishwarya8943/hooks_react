import React,{useState} from 'react'


function HookCounter4 (){
    const [items,setItems] = useState([
        {pcode : 1,pName : 'Apple'},
        {pcode : 2,pName : 'Orange'},
        {pcode : 3,pName : 'Grapes'}
    ])

    const addItemHandler = () =>{
        let nobj = {pCode : 5,pName : 'Rose'}
        let arr = items.concat(nobj)
        setItems(arr)
    }
    return(
        <div>
            <h1>Items</h1>
            <ul>
                {
                    items.map(obj=>(
                        <li key={obj.pcode}>{obj.pName}</li>
                    ))
                }
            </ul>
            <button onClick ={addItemHandler}>Add Items</button>
        </div>
    )
}


export default HookCounter4