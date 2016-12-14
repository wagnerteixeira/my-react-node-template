import "./app.scss";

import React, {Component} from 'react';

class AppContainer extends Component {
	componentDidMount() {
		console.log("HEY THERE!");
	}
	

	render() {
		return (
			<section>
				<h1>Hello World</h1>
				<button onClick={this._click.bind(this)}>I am a button</button>
			</section>
		);
	}

	_click() {
		console.log("STUFF");
	}
}

export default AppContainer;