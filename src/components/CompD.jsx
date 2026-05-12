import { useContext } from "react";
import { UserContext } from "./CompA";
const CompD=()=>{
    const name = useContext(UserContext);
    return(
        <>
        <h1 className="text-5xl">{name}</h1>
        </>
    )
}

export default CompD;