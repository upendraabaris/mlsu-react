import { useEffect, useRef, useState } from "react";

const Hooks =()=>{
    const headingRef = useRef();
    const [ count, setCount ] =  useState(0);

    useEffect(()=>{
        // setTimeout(()=>{
        //     // document.getElementById("hello").innerText = 'Hello Class';
        //     headingRef.current.innerText = 'Hello Class';
        //     headingRef.current.style.color = 'Red';
        // },5000)
        console.log("count call");

    },[count]);
    return(
        <>
        {/* <h1 id="hello" className="text-5xl" ref={headingRef}>Hello World</h1> */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className="bg-blue-500 p-2 rounded-lg">
            Increment
        </button>
        </>
    )
}

export default Hooks;