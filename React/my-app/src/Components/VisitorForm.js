import React, { Component } from "react";
import Counter from "./Counter";

class VisitorForm extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex  w-100">
                    <div className="w-50">
                        <form className="w-100 mt-5">

                            <div class="row mb-3">
                                <label for="inputnme" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputname" placeholder="Name" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputemail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputemail" placeholder="email" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputmobile" class="col-sm-2 col-form-label">Mobile</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputmobile" placeholder="Mobile" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary m-2">Save Details</button>
                                    <button type="submit" class="btn btn-primary">Reset</button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="w-50 text-center d-flex justify-content-center align-self-center">                        
                            <h2>No Of Visitors :0</h2>                        
                    </div>





                </div>



            </div>
        );
    }
}
export default VisitorForm