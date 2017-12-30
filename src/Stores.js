import Reflux from 'reflux';
import Actions from './Actions'

class GuestStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {messages: []};
		this.listenables = Actions;
	}
	
	onSubmit(email, messageBody)
	{
		console.log(this.state)
		const message = {
			email: email,
			text: messageBody
		};
        this.setState((prevState, props)=>{
            return {messages: [...prevState.messages, message]};
        });
	}
	
}

export default GuestStore;