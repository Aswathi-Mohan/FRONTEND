import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
import React, { Component } from 'react';
//  import VisitorForm from './Components/VisitorForm';
//  import VisitorTable from './Components/VisitorTable';
//  import Visitors from './Components/Visitors';
// import Counter from './Components/Counter';
// import StateConcept from './Components/StateConcept';
// import Pagination from './Components/Pagination';

import Home from './Components/Home';
import Navigation from './Components/Navigation';
import AboutUs from './Components/AboutUs';
import Users from './Components/Users';
import ContactUs from './Components/ContactUs';
import { BrowserRouter } from 'react-router-dom';
import NoPage from './Components/NoPage';
import Header from './Components/Header';


class App extends Component {
  render(){
    return (
    
    <div className="App">
      {/* <Greet name="Employee"/>
      <Greet name="Client"/> */}
      {/* <VisitorForm/>
      <Visitors/> */}
      {/* <Counter/> */}
      {/* <StateConcept/> */}
      {/* <Pagination/> */}
      <Header/>
      <Navigation/>
      {/* <AboutUs/>
      <Users/>
      <ContactUs/>
      <NoPage/> */}
    </div>
  
  );
}
}
export default App;
