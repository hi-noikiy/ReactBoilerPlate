import React, { Component } from 'react';
import Alert from '../Components/Alert/Alert';
import Button from '../Components/Button/Button';
import InputRange from '../Components/Form/InputRange/InputRange';
import InputText from '../Components/Form/InputText/InputText';
import InputList from '../Components/Form/InputList/InputList';
import InputSelect from '../Components/Form/InputSelect/InputSelect';
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
				<InputSelect id="InputSelect_Religion"
							 name="religion"
							 label="Religion?"
							 options={[
								 {label: 'Choose a Religion...', value: ''},
								 {label: 'Buddhism', value: 'buddhist'},
								 {label: 'Christianity', value: 'christian'},
								 {label: 'Judaism', value: 'jewish'},
								 {label: 'Islam', value: 'muslim'},
							 ]}
				/>
				<InputList label="What is life?"
						   type="checkbox"
						   name="life"
						   options={[
							   {label: '42', value: '42'},
							   {label: 'Happiness', value: 'happy'},
							   {label: 'Love', value: 'love'},
							   {label: 'Silicon Valley', value: 'siliconValley'}
						   ]}
						   selected="siliconValley"
				/>
				<InputList label="Favorite color?"
						   type="radio"
						   name="color"
						   options={[
							   {label: 'Blue', value: 'blue'},
							   {label: 'Red', value: 'red'},
							   {label: 'Yellow', value: 'yellow'},
							   {label: 'Green', value: 'green'}
						   ]}
						   selected="blue"
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