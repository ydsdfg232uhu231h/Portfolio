import {BrowserRouter,Routes,Route} from "react-router";

// import React from 'react'
import Homepage from "../pages/homepage";
import Aboutpage from "../pages/Aboutpage"
import NotFound from "../pages/Notfound";
import Project from "../pages/Projectpage";
import Resume from "../pages/Resumepage";
import Skills from "../pages/Skillspage";
import Contact from "../pages/Contectpage";
import Layout from "../navigation/Layout";

function Routedef() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routedef;
