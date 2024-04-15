import React from "react";
import Visitors from "./Visitors";

function VisitorTable(props){
    console.log(props)
        return(
            <div>
            <table className="table table-striped w-75 mt-5">
                <tr>
                    <th>Visitor Name</th>
                    <th>Visitor Contact</th>
                    <th>Visitor Email</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.mobile}</td>
                    <td>{props.email}</td>
                    <td><button type="button" className="btn btn-primary">Update</button></td>
                    <td><button className="btn-primary text-white p-2 bg-primary">Delete</button></td>
                </tr>
            </table>
        </div>
        );
    }

export default VisitorTable
