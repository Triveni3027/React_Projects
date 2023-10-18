import "./Counter.css"
//we want to change the var in UI that purpose we have to use usestate that purpose we ahve to import the from  React library.
import {useState} from 'react';

function Counter(){
    //create state variable
    let [state,setState] = useState(0)
    //here this normal variable reflecting on our UI
    //Here we just Creating the incCount arrrow funtion
    const incCount = ()=>{
            //alert("Working.")//this only button checking purpose.
            //console.log(countValue); // print inside the console
            // countValue = countValue + 1
            // console.log(countValue);// print inside the console ,not reflecting on UI
            //click the button updating the state by using the setsate funciton
            setState(state + 1)
    }
    return <div className="counter">
        {/* <h2>Count value is {countValue}</h2><br />binding (adding) the normal variable */}
        <h2>Count value is {state}</h2><br />{/*binding (adding) the state variable*/}
        <button onClick={incCount}>Increase Count</button>
    </div>
}
export default Counter