import React, { Component } from 'react';
import './InputText.css';

class InputText extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value,
			hasText: this.props.value !== '',
			valid: true
		};
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(e) {
		this.setState({
			value: e.target.value,
			hasText: e.target.value !== '',
			valid: e.target.checkValidity()
		});
	}
	render() {
		var stateClass = 'form-element-text ' +
			(this.state.hasText ? 'has-text' : '') + ' ' +
			(this.state.valid ? '' : 'invalid');
		return (
			<div className={stateClass}>
				<input
					id={this.props.id}
					type={this.props.type}
					name={this.props.name}
					value={this.state.value}
					onInput={this.handleInput}
				/>
				<label htmlFor={this.props.id}>
					{this.props.label}
				</label>
			</div>
		);
	}
}
InputText.propTypes = {
	id: React.PropTypes.string,
	type: React.PropTypes.oneOf(['text', 'password', 'number', 'email', 'tel']),
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
};
InputText.defaultProps = {
	id: 'InputText'+Math.floor(Math.random()*1000),
	type: 'text',
	label: '',
	name: 'InputTextName'+Math.floor(Math.random()*1000),
	value: ''
};

export default InputText;