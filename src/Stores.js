import Reflux from 'reflux';
import Actions from './Actions'

class GuestStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {count: 0};
		this.listenables = Actions;
	}
	
	onSubmit()
	{
        //console.log(arguments)
        this.setState((prevState, props)=>{
            return {count: prevState.count +1};
        });
		//this.setState({count: this.state.count+1});
	}
	
}

export default GuestStore;