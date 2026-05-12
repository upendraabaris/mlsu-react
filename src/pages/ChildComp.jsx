import { useState } from "react";

const ChildComp=(hello)=>{
    const [num,setNum] = useState(0);

    function handleState(){
        setNum(num+1);
    }
    
    const handleChange=(e)=>{
        console.log(e.target.value);
    }

    return(
        <>
        {/* <h1 className="text-5xl text-red-500">ChildComp {hello.firstname} {hello.lastname}</h1> */}

        {/* <h1 className=" text-5xl">{num}</h1> */}
        {/* <button className="bg-blue-500 rounded-lg p-2 m-2"
        onClick={handleState}
        >
            Increment
        </button> */}
        {/* <button className="bg-blue-500 rounded-lg p-2 m-2"
        onClick={()=>setNum(num+1)}
        >
            Increment
        </button> */}


        <input type="text"
        name="name"
        className="border p-2"
        placeholder="Enter name"
        onChange={handleChange}
        />
        </>

    )
}

export default ChildComp;