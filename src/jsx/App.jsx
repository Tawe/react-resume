let stylesheet = require('../less/styles.less');

import React from 'react';
import {render} from 'react-dom';

import SideBar from './components/SideBar.jsx';
import Info from './components/Info.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';
import Credits from './components/Credits.jsx';

class App extends React.Component {
	constructor(){
		super();
		let data;
		$.ajax({
		   type:'GET',
		   url:'data/data.json',
		   dataType:'json',
		   async:false,
		   success:(d)=>{
		       data = d;
		   }
		});
		this.state = {
			info:data.info,
			sidebar:data.sidebar,
			skills:data.skills,
			work:data.work,
			credits:data.credits
		}
		console.log(this.state)
	
	}
	render () {
		return    <div>
			<SideBar data={this.state.sidebar}/>
			<div className="c-card__container">
				<Info data={this.state.info}/>
				<Skills data={this.state.skills}/>
				<Work data={this.state.work}/>
				<Credits data={this.state.credits}/>
			</div>
		</div>
	}
}

render(<App/>, document.getElementById('app'));