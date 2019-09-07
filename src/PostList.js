import React, {Component} from 'react';
import Contatos from './contatos.json';

class App extends Component{
	
	
	render(){
		
		return () {
			
			<div>
			
			{Contatos.map(detail,index)=>{
			return <div>
			{detail.id}
				{detail.index}
			</div>
		}}
			
			</div>
			
		}
		
	}
	
}

export default App;