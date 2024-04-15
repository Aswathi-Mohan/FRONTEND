import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import React, { Component } from 'react';
 import VisitorForm from './Components/VisitorForm';
 import VisitorTable from './Components/VisitorTable';
 import Visitors from './Components/Visitors';
// import Counter from './Components/Counter';
import StateConcept from './Components/StateConcept';
import Pagination from './Components/Pagination';

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
      <Pagination/>
    </div>
  );
}
}
export default App;
