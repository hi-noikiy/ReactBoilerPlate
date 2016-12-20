import React, { Component } from 'react';
import Alert from '../Components/Alert/Alert';
import Button from '../Components/Button/Button';

class Components extends Component {
	render() {
		return (
			<article>
				These are some sample Components:
				<Alert type="error" message="Something went wrong!!" description="This is an Error Alert"/>
				<Alert type="success" message="All is swell :)"/>
				<Button label="Click me!" />
			</article>
		);
	}
}

export default Components;