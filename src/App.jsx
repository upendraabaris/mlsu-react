// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MovieDetails from "./pages/MovieDetails";


const App=()=>{
  const [darkMode,setDarkMode] = useState(false);

  function themeToggler(){
    setDarkMode(!darkMode);
  }

  return (
    <>
    <BrowserRouter>
    <ThemeContext.Provider value={{darkMode,themeToggler}}>
    <div className={darkMode ? "bg-black text-white min-h-screen": "bg-white text-black min-h-screen"}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>\
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
      </div>
      </ThemeContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;