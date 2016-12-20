import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<main className="Main">
				{this.props.children}
			</main>
		);
	}
}

export default Main;