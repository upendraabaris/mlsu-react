import { useContext } from "react";
import { UserContext } from "./CompA";
import CompD from "./CompD";
const CompC=()=>{
    const name = useContext(UserContext);
    return(
        <>
        <h1 className="text-5xl">{name}</h1>
        <CompD/>
        </>
    )
}

export default CompC;