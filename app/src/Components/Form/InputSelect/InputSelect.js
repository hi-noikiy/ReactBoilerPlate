import React, { Component } from 'react';
import './InputSelect.css';

class InputList extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.selected
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	render() {
		var selectClass = 'form-element-select ' + (this.state.value === '' ? '' : 'has-value');
		var optionsList = this.props.options.map((option, i) => (
			<option className={option.value === '' ? 'blank' : ''}
					key={i}
					value={option.value}
			>
					{option.label}
			</option>
		));
		return (
			<div className={selectClass}>
				<select id={this.props.id} name={this.props.name} value={this.state.value} onChange={this.handleChange}>
					{optionsList}
				</select>
				<div className="select-title">{this.props.label}</div>
			</div>
		);
	}
}
InputList.propTypes = {
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	selected: React.PropTypes.string,
	options: React.PropTypes.arrayOf(React.PropTypes.shape({
		value: React.PropTypes.string,
		label: React.PropTypes.string
	})),
};
InputList.defaultProps = {
	id: 'InputList'+Math.floor(Math.random()*1000),
	label: '',
	name: 'InputListName'+Math.floor(Math.random()*1000),
	selected: '',
	options: [{label:'Placeholder', value: 'placeholder'}]
};

export default InputList;