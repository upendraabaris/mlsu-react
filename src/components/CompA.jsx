import { createContext } from "react";
import CompB from "./CompB";

export const UserContext = createContext();

const CompA=()=>{
    const name = "Hello Sir";
    return(
        <>
        <UserContext.Provider value={name}>
        <CompB/>
        </UserContext.Provider>
        </>
    )
}

export default CompA;