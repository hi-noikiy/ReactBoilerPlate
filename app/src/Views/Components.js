import React, { Component } from 'react';
import Alert from '../Components/Alert/Alert';
import Button from '../Components/Button/Button';
import InputRange from '../Components/Form/InputRange/InputRange';
import InputText from '../Components/Form/InputText/InputText';
import LoadingBar from '../Components/LoadingBar/LoadingBar';

class Components extends Component {
	render() {
		return (
			<article>
				These are some sample Components:
				<h2>Alerts</h2>
				<Alert type="default" message="Click to expand" description="This is an Error Alert"/>
				<Alert type="warning" message="Warning Alert"/>
				<Alert type="info" message="Info Alert"/>
				<Alert type="error" message="Error Alert"/>
				<Alert type="success" message="Success Alert"/>
				<h2>Buttons</h2>
				<Button label="Button" type="default" />
				<Button label="Button" type="primary" />
				<Button label="Button" type="warning" />
				<Button label="Button" type="danger" />
				<Button label="Button" type="success" />
				<h2>Forms</h2>
				<InputText id="InputText_Email"
						   label="Email"
						   name="email"
						   type="email"
						   value=""
				/>
				<InputText id="InputText_Password"
						   label="Password"
						   name="password"
						   type="password"
						   value=""
				/>
				<InputText id="InputText_Number"
						   label="Favorite Number"
						   name="number"
						   type="number"
						   value=""
				/>
				<InputRange id="RangeID"
							label="Satisfaction"
							name="SatisfactionRange"
							min={0}
							max={10}
							step={1}
							value={5}
				/>
				<h2>Modal</h2>
				<h2>Loading</h2>
				<LoadingBar/>
			</article>
		);
	}
}

export default Components;