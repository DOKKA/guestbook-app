import React from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';
import './GBList.css';

class GBList extends Reflux.Component {

  constructor(props){
    super(props);
    this.store = GuestStore;
  }

  render() {
    const messageList =  this.state.messages.map((message, index) => {
      return (<li key={index}>
        <a href={'mailto:'+message.email} >{message.email}</a><br/>
        <span>{message.text}</span>
        </li>);
    });

    return (
      <ul className="GBList">
        {messageList}
      </ul>
    );
  }
}

export default GBList;
