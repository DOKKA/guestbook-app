import React, { Component } from 'react';
import './GBForm.css';

class GBForm extends Component {
  render() {
    return (
      <div className="panel panel-default">
   <div className="panel-body">
      <div>
         <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
         </div>
         <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Message"/>
         </div>
         <button>Submit</button>
      </div>
   </div>
</div>
);
  }
}

export default GBForm;
