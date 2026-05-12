import ChildComp from "./ChildComp";
import Contact from "./Contact";
import Movies from "./Movies";

import Hooks from "../components/Hooks";
import CompA from "../components/CompA";
import CompD from "../components/CompD";

const Home=()=>{
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    const name = "Upendra";
    const lastname = "Jain";
    return(
        <>
        {/* <h1 className="text-5xl">Home Page</h1> */}
        {/* <Contact name={name}/> */}
        {/* <ChildComp firstname={name} lastname={lastname}/> */}
        {/* <Movies/> */}
        {/* <Hooks/> */}
        <CompA/>
        {/* <CompD/> */}
        </>
    )
}

export default Home;