import React, { Component } from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';
import Actions from '../Actions';
import './GBForm.css';

class GBForm extends Reflux.Component {

  constructor(props){
    super(props);
    this.store = GuestStore;
  }

  render() {
    return (
      <div className="panel panel-default">
   <div className="panel-body">
      <div>
         <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address{this.state.count}</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
         </div>
         <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Message"/>
         </div>
         <button onClick={this.onClick}>Submit</button>
      </div>
   </div>
</div>
);
  }

  onClick = (e) => {
    Actions.submit('woooo');
  }


}

export default GBForm;
