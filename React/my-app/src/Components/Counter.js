import React, { Component } from "react";
import VisitorForm from "./VisitorForm";

class Counter extends Component{
    constructor(props)
    {
        super(props)
        this.state={
         count:0
        }

       const increment=()=> {
            this.setState(
                this.state.count=this.state.count+1
            );
        };
        const decrement=()=> {
            this.setState(
                this.state.count=this.state.count-1
            );
        };
        const reset=()=> {
            this.setState(
                this.state.count=0
            );
        };
    }
    render()
    {
        return(
            <div className="container my-4">
                <h2>No Of Visitors : {this.count}</h2>
            </div>
        )
    }
}


export default Counter