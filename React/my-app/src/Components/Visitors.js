import React, { Component } from "react";
import VisitorTable from "./VisitorTable";

const clients = [{
    name: "Bhajan",
    Mobile: 8901234560,
    email: "bhajan@gmail.com"
},
{
    name: "Aswathi",
    Mobile: 8906784560,
    email: "aswathi@gmail.com"
},
{
    name: "Vihaan",
    Mobile: 8901232000,
    email: "vihaan@gmail.com"
},
{
    name: "Arjun",
    Mobile: 89024564560,
    email: "arjun@gmail.com"
},
{
    name: "Meera",
    Mobile: 8901234560,
    email: "meera@gmail.com"
}
];
class Visitors extends Component {
    render() {
        return (
            <div>
                {
                    clients.map((obj) => {
                        return <VisitorTable name={obj.name} mobile={obj.Mobile} email={obj.email} />

                    })
                }


            </div>
        );
    }
}
export default Visitors