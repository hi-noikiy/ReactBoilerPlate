import React, { Component } from 'react';
import './InputList.css';

class InputList extends Component {
	constructor(props){
		super(props);
		var value = this.props.selected;
		if (this.props.type === 'radio' && (typeof value !== 'string')) {
			value = value[0];
		} else if (this.props.type === 'checkbox' && (typeof value === 'string')) {
			value = value.replace(', ',',');
			value = value.split(',');
		}
		this.state = {
			value: value
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		var value = null;
		if (this.props.type === 'radio') {
			value = e.target.value;
		}
		else {
			value = this.state.value;
			if (e.target.checked) {
				value.push(e.target.value);
			}
			else {
				for (let i = value.length - 1; i >= 0; i--) {
					if (value[i] === e.target.value) {
						value.splice(i, 1);
						break;
					}
				}
			}
		}
		this.setState({
			value: value
		});
	}
	render() {
		var listClass = 'form-element-list form-list-' + this.props.type;
		var optionsList = this.props.options.map((option, i) => (
			<li key={i}>
				<input type={this.props.type}
					   name={this.props.name}
					   value={option.value}
					   id={this.props.name+'_'+option.value}
					   onChange={this.handleChange}
					   checked={(this.props.type === 'radio' ?
						   (this.state.value === option.value ? 'checked' : '') :
						   (this.state.value.includes(option.value) ? 'checked' : ''))}
				/>
				<label htmlFor={this.props.name+'_'+option.value}>
					{option.label}
				</label>
			</li>
		));
		return (
			<div className={listClass}>
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
	selected: [],
	options: [{label:'Placeholder', value: 'placeholder'}]
};

export default InputList;