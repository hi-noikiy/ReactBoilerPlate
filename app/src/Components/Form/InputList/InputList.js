import React, { Component } from 'react';
import './InputList.css';

class InputList extends Component {
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
		var listClass = 'form-element-list form-list-' + this.props.type;
		var optionsList = this.props.options.map((option, i) => (
			<li>
				<input type={this.props.type}
					   name={this.props.name}
					   value={option.value}
					   id={this.props.name+'_'+option.value}
				/>
				<label htmlFor={this.props.name+'_'+option.value}>
					{option.label}
				</label>
			</li>
		));
		return (
			<div className={stateClass}>
				<div className="list-title">{this.props.label}</div>
				<ul>
					{optionsList}
				</ul>
			</div>
		);
	}
}
InputList.propTypes = {
	id: React.PropTypes.string,
	type: React.PropTypes.oneOf(['checkbox', 'radio']),
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	selected: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.arrayOf(React.PropTypes.string)
	]),
	options: React.PropTypes.arrayOf(React.PropTypes.shape({
		value: React.PropTypes.string,
		label: React.PropTypes.string
	})),
};
InputList.defaultProps = {
	id: 'InputList'+Math.floor(Math.random()*1000),
	type: 'checkbox',
	label: '',
	name: 'InputListName'+Math.floor(Math.random()*1000),
	selected: ''
};

export default InputList;