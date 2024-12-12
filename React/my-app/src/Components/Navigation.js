import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Users from "./Users";
import ContactUs from "./ContactUs";
import NoPage from "./NoPage";
import Todo from "./Todo";
import AdviseGenerator from "./AdviseGenerator";
import Images from "./Images";

function Navigation(){
return(
   
   <Routes>
   
        <Route path="/" element={<Home/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path="Users" element={<Users/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="advisegenerator" element={<AdviseGenerator/>}/>
        <Route path="images" element={<Images/>}/>
        <Route path="ContactUs" element={<ContactUs/>}/>
        <Route path="*" element={<NoPage />} />
        
    
   </Routes>
   
)
}
export default Navigation